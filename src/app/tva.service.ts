import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvaService {
  private apiUrl = 'http://127.0.0.1:8000/api/tva'; // Adjust to your Laravel server URL

  constructor(private http: HttpClient) { }

  getTvas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addTva(tva: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tva);
  }
  deleteTva(tvaId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${tvaId}`);
  }

  getTvaById(tvaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${tvaId}`);
  }

  updateTva(tva: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${tva.id}`, tva);
  }
  
}

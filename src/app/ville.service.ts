import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private apiUrl = 'http://127.0.0.1:8000/api/ville'; // Adjust to your Laravel server URL

  constructor(private http:HttpClient) { }

  getVilles():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  addVille(ville:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,ville);
  }
  deleteVille(villeID:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${villeID}`);
  }

  getVilleById(villeID:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${villeID}`);
  }

  updateVille(ville:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${ville.id}`,ville);
  }
}

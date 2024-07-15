import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  private apiUrl = 'http://127.0.0.1:8000/api/secteur'; // Adjust to your Laravel server URL

  constructor(private http: HttpClient) { }

  getSecteurs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  addSecteur(secteur: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, secteur);
  }
  deleteSecteur(secteurID: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${secteurID}`);
  }

  getSecteurById(secteurID: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${secteurID}`);
  }

  updateSecteur(secteur: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${secteur.id}`, secteur);
  }
}

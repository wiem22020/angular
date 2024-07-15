import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  
  getLastReglementId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/lastReglementId`);
  }
  getReglementById(reglementId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reglements/${reglementId}`);
  }

  getFacture(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/factures`);
  }

  addReglement(reglementData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reglements`, reglementData);
  }
  getReglement(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reglements`);
  }
  deleteReglement(reglementId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/reglements/${reglementId}`);
  }
  updateReglement(reglement: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/reglements/${reglement.id}`, reglement);
  }
}

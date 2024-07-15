import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  
  getLastFactureId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/lastFactureId`);
  }
  getFactureById(factureId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/factures/${factureId}`);
  }

  getClients(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clients`);
  }

  addFacture(factureData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/factures`, factureData);
  }
  getFacture(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/factures`);
  }
  deleteFacture(factureId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/factures/${factureId}`);
  }
  updateFacture(facture: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/factures/${facture.id}`, facture);
  }
}

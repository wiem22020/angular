import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LignefactureService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  addLigneFacture(ligneFactureData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ligne_facture`, ligneFactureData);
  }
  getlignefactureById(lignefactureId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ligne_facture/${lignefactureId}`);
  }



}

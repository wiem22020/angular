import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://127.0.0.1:8000/api/clients'; // Adjust to your Laravel server URL

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addClient(client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, client);
  }
  deleteClient(clientId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${clientId}`);
  }

  getClientById(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${clientId}`);
  }

  updateClient(client: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${client.id}`, client);
  }
}

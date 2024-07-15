import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://127.0.0.1:8000/api/article'; // Adjust to your Laravel server URL

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }
  deleteArticle(articleId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${articleId}`);
  }

  getArticleById(articleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${articleId}`);
  }

  updateArticle(article: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${article.id}`, article);
  }
}

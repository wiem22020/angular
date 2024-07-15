import { Component,OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent {
  articles: any[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }


  editArticle(article: any) {
    // Rediriger vers la page d'édition du article
    this.router.navigate(['/edit-article', article.id]);
  }

  deleteArticle(article: any) {
    // Envoyer une requête de suppression au serveur
    this.articleService.deleteArticle(article.id).subscribe(() => {
      // Mettre à jour la liste des articles après la suppression
      this.articles = this.articles.filter(c => c.id !== article.id);
      console.log('Article supprimé : ', article);
    }, error => {
      console.error('Erreur lors de la suppression du article : ', error);
    });
  }

  navigateToAddArticle(): void {
    this.router.navigate(['/add-article']);
  }
}

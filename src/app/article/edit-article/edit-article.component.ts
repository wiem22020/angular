import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  article: any = {};
  message: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.articleService.getArticleById(Number(articleId)).subscribe(data => {
        this.article = data;
      });
    }
  }

  updateArticle(): void {
    this.articleService.updateArticle(this.article).subscribe(response => {
      this.message = 'Article updated successfully';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000); // Redirect to article list after 2 seconds
    }, error => {
      console.error('Error updating article: ', error);
      this.message = 'An error occurred while updating the article.';
    });
  }
}

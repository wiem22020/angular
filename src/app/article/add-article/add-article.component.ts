import { Component } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  article = {
    codeArt: '',
    descriptionArt: '',
    prixUnitaireHT: '',
    tvaArt: '',
    prixUnitaireTTC: ''
  };
  message = '';
  

  constructor(private articleService: ArticleService, private router: Router) { }


  addArticle(form: NgForm): void {
    console.log('Submitting form', this.article); // Log the form data being submitted
    this.articleService.addArticle(this.article).subscribe(
      response => {
        this.message = 'AaddArticle ajouté avec succès';
        form.resetForm();
      },
      error => {
        console.error('Error', error); // Log any errors that occur
        if (error.status === 422) {
          // Handle specific validation errors
          console.error('Validation errors:', error.error);
          // Display specific error messages to the user
          this.message = 'Validation errors occurred. Please check your input.';
        } else {
          // Handle other types of errors
          this.message = 'An error occurred while adding the article.';
        }
      }
    );
  }

  calculatePrixUnitaireTTC(): void {
    const prixHT = parseFloat(this.article.prixUnitaireHT) || 0;
    const tva = parseFloat(this.article.tvaArt) || 0;
    this.article.prixUnitaireTTC = (prixHT + (prixHT * tva / 100)).toFixed(2);
  }
}

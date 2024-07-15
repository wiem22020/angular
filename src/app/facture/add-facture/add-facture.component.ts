import { Component, OnInit } from '@angular/core';
import { FactureService } from '../../facture.service';
import { ClientService } from '../../client.service';
import { ArticleService } from '../../article.service';
import { LignefactureService } from '../../lignefacture.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  facture = {
    code: '',
    date: '',
    client_id: null
  };
  clients: { id: number, nom: string, prenom: string, adresse: string, phone: number }[] = [];
  message = '';

  ligneFacture = {
    article_id: null,
    quantity: 1,
    code_article: '',
    descriptionArt: '',
    prix_unitaire: 0,
    tva: 0,
    total_ht: 0,
    total_ttc: 0
  };


  articles: { id: number, codeArt: string, descriptionArt: string, prixUnitaireHT: number, tvaArt: number }[] = [];

  ligneFactures: any[] = [];
  constructor(
    private factureService: FactureService,
    private clientService: ClientService,
    private articleService: ArticleService,
    private lignefactureService: LignefactureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchClients();
    this.fetchArticles();
    this.fetchLastFactureId();
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
      },
      error => {
        console.error('Error fetching clients:', error);
      }
    );
  }

  fetchArticles(): void {
    this.articleService.getArticles().subscribe(
      articles => {
        this.articles = articles;
      },
      error => {
        console.error('Error fetching articles:', error);
      }
    );
  }

  fetchLastFactureId(): void {
    this.factureService.getLastFactureId().subscribe(
      (lastFactureId: number) => {
        const factureId = lastFactureId + 1;
        this.facture.code = `FV000${factureId}`;
      },
      error => {
        console.error('Error fetching last facture ID:', error);
      }
    );
  }

  addLigneFacture(): void {
    console.log('Current articles:', this.articles);
    console.log('ligneFacture.article_id:', this.ligneFacture.article_id);

    const selectedArticle = this.articles.find(article => Number(article.id) === Number(this.ligneFacture.article_id));

    if (selectedArticle) {
      console.log('Selected article codeArt:', selectedArticle.codeArt);
      const total_ht = selectedArticle.prixUnitaireHT * this.ligneFacture.quantity;
      const total_ttc = total_ht + (total_ht * selectedArticle.tvaArt / 100);

      const newLigneFacture = {
        article_id: selectedArticle.id,
        code_article: selectedArticle.codeArt,
        descriptionArt: selectedArticle.descriptionArt,
        prix_unitaire: selectedArticle.prixUnitaireHT,
        tva: selectedArticle.tvaArt,
        quantity: this.ligneFacture.quantity,
        total_ht: total_ht,
        total_ttc: total_ttc
      };

      this.ligneFactures.push(newLigneFacture);

      this.resetLigneFactureForm();
    } else {
      console.error('Selected article not found');
    }
  }

  resetLigneFactureForm(): void {
    this.ligneFacture = {
      article_id: null,
      quantity: 1,
      code_article: '',
      descriptionArt: '',
      prix_unitaire: 0, // Corrected property name to match newLigneFacture
      tva: 0, // Corrected property name to match newLigneFacture
      total_ht: 0,
      total_ttc: 0
    };
  }



  addFacture(form: NgForm): void {
    if (this.facture.client_id) {
      this.factureService.addFacture(this.facture).subscribe(
        response => {
          this.addLigneFactures(response.id);
          this.message = 'Facture added successfully';
          form.resetForm();
          this.ligneFactures = [];
          this.fetchLastFactureId();
        },
        error => {
          console.error('Error', error);
          if (error.status === 422) {
            console.error('Validation errors:', error.error);
            this.message = 'Validation errors occurred. Please check your input.';
          } else {
            this.message = 'An error occurred while adding the facture.';
          }
        }
      );
    } else {
      console.error('Client ID is not selected');
    }
  }

  addLigneFactures(factureId: number): void {
    this.ligneFactures.forEach(ligneFacture => {
      const data = {
        facture_id: factureId,
        article_id: ligneFacture.article_id,
        quantity: ligneFacture.quantity
      };

      this.lignefactureService.addLigneFacture(data).subscribe(
        response => {
          console.log('LigneFacture added:', response);
        },
        error => {
          console.error('Error adding LigneFacture:', error);
        }
      );
    });
  }
}

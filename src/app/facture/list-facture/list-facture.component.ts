import { Component } from '@angular/core';
import { FactureService } from 'src/app/facture.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent {
  factures: any[] = [];

  constructor(private factureService: FactureService, private router: Router) { }

  ngOnInit(): void {
    this.factureService.getFacture().subscribe(data => {
      this.factures = data;
    });
  }


  editFacture(facture: any) {
    // Rediriger vers la page d'édition du facture
    this.router.navigate(['/edit-facture', facture.id]);
  }

  deleteFacture(facture: any) {
    // Envoyer une requête de suppression au serveur
    this.factureService.deleteFacture(facture.id).subscribe(() => {
      // Mettre à jour la liste des factures après la suppression
      this.factures = this.factures.filter(c => c.id !== facture.id);
      console.log('Facture supprimé : ', facture);
    }, error => {
      console.error('Erreur lors de la suppression du facture : ', error);
    });
  }

  navigateToAddFacture(): void {
    this.router.navigate(['/add-facture']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReglementService } from 'src/app/reglement.service';
@Component({
  selector: 'app-list-reglement',
  templateUrl: './list-reglement.component.html',
  styleUrls: ['./list-reglement.component.css']
})
export class ListReglementComponent {
reglements: any[] = [];

  constructor(private reglementService: ReglementService, private router: Router) { }

  ngOnInit(): void {
    this.reglementService.getReglement().subscribe(data => {
      this.reglements = data;
    });
  }


  editReglement(reglement: any) {
    // Rediriger vers la page d'édition du reglement
    this.router.navigate(['/edit-reglement', reglement.id]);
  }

  deleteReglement(reglement: any) {
    // Envoyer une requête de suppression au serveur
    this.reglementService.deleteReglement(reglement.id).subscribe(() => {
      // Mettre à jour la liste des reglements après la suppression
      this.reglements = this.reglements.filter(c => c.id !== reglement.id);
      console.log('Reglement supprimé : ', reglement);
    }, error => {
      console.error('Erreur lors de la suppression du reglement : ', error);
    });
  }

  navigateToAddReglement(): void {
    this.router.navigate(['/add-reglement']);
  }
}

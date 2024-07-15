import { Component } from '@angular/core';
import { TvaService } from '../../tva.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent {
  tvas: any[] = [];

  constructor(private tvaService: TvaService, private router: Router) { }

  ngOnInit(): void {
    this.tvaService.getTvas().subscribe(data => {
      this.tvas = data;
    });
  }


  editTva(tva: any) {
    // Rediriger vers la page d'édition du tva
    this.router.navigate(['/edit-tva', tva.id]);
  }

  deleteTva(tva: any) {
    // Envoyer une requête de suppression au serveur
    this.tvaService.deleteTva(tva.id).subscribe(() => {
      // Mettre à jour la liste des tvas après la suppression
      this.tvas = this.tvas.filter(c => c.id !== tva.id);
      console.log('tva supprimé : ', tva);
    }, error => {
      console.error('Erreur lors de la suppression du tva : ', error);
    });
  }

  navigateToAddTva(): void {
    this.router.navigate(['/add-tva']);
  }

}

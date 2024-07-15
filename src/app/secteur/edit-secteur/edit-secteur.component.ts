import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecteurService } from '../../secteur.service';

@Component({
  selector: 'app-edit-secteur',
  templateUrl: './edit-secteur.component.html',
  styleUrls: ['./edit-secteur.component.css']
})
export class EditSecteurComponent {
  secteur: any = {};
  message: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private secteurService: SecteurService
  ) { }

  ngOnInit(): void {
    const secteurId = this.route.snapshot.paramMap.get('id');
    if (secteurId) {
      this.secteurService.getSecteurById(Number(secteurId)).subscribe(data => {
        this.secteur = data;
      });
    }
  }

  updateSecteur(): void {
    this.secteurService.updateSecteur(this.secteur).subscribe(response => {
      this.message = 'secteur updated successfully';
      setTimeout(() => {
        this.router.navigate(['/list-secteur']);
      }, 2000); // Redirect to secteur list after 2 seconds
    }, error => {
      console.error('Error updating secteur: ', error);
      this.message = 'An error occurred while updating the Secteur.';
    });
  }
}

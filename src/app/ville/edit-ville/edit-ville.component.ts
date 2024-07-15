import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VilleService } from '../../ville.service';

@Component({
  selector: 'app-edit-ville',
  templateUrl: './edit-ville.component.html',
  styleUrls: ['./edit-ville.component.css']
})
export class EditVilleComponent {
  ville: any = {};
  message: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private villeService: VilleService
  ) { }

  ngOnInit(): void {
    const villeId = this.route.snapshot.paramMap.get('id');
    if (villeId) {
      this.villeService.getVilleById(Number(villeId)).subscribe(data => {
        this.ville = data;
      });
    }
  }

  updateVille(): void {
    this.villeService.updateVille(this.ville).subscribe(response => {
      this.message = 'ville updated successfully';
      setTimeout(() => {
        this.router.navigate(['/list-ville']);
      }, 2000); // Redirect to ville list after 2 seconds
    }, error => {
      console.error('Error updating ville: ', error);
      this.message = 'An error occurred while updating the Ville.';
    });
  }
}

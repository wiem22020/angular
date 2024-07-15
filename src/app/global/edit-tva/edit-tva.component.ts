import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvaService } from '../../tva.service';

@Component({
  selector: 'app-edit-tva',
  templateUrl: './edit-tva.component.html',
  styleUrls: ['./edit-tva.component.css']
})
export class EditTvaComponent {
  tva: any = {};
  message: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tvaService: TvaService
  ) { }

  ngOnInit(): void {
    const tvaId = this.route.snapshot.paramMap.get('id');
    if (tvaId) {
      this.tvaService.getTvaById(Number(tvaId)).subscribe(data => {
        this.tva = data;
      });
    }
  }

  updateTva(): void {
    this.tvaService.updateTva(this.tva).subscribe(response => {
      this.message = 'tva updated successfully';
      setTimeout(() => {
        this.router.navigate(['/tva']);
      }, 2000); // Redirect to tva list after 2 seconds
    }, error => {
      console.error('Error updating tva: ', error);
      this.message = 'An error occurred while updating the Tva.';
    });
  }
}

import { Component } from '@angular/core';
import { TvaService } from '../../tva.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-tva',
  templateUrl: './add-tva.component.html',
  styleUrls: ['./add-tva.component.css']
})
export class AddTvaComponent {
  tva = {
    service: '',
    valeur: ''
  };
  message = '';

  constructor(private tvaService: TvaService, private router: Router) { }
  addTva(form: NgForm): void {
    console.log('Submitting form', this.tva); // Log the form data being submitted
    this.tvaService.addTva(this.tva).subscribe(
      response => {
        this.message = 'TVA ajouté avec succès';
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
          this.message = 'An error occurred while adding the tva.';
        }
      }
    );
  }
}

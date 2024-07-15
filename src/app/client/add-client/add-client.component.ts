import { Component } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  client = {
    nom: '',
    prenom: '',
    adresse: '',
    phone: '',
    MF: ''
  };
  message = '';

  constructor(private clientService: ClientService, private router: Router) { }

  addClient(form: NgForm): void {
    console.log('Submitting form', this.client); // Log the form data being submitted
    this.clientService.addClient(this.client).subscribe(
      response => {
        this.message = 'Client ajouté avec succès';
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
          this.message = 'An error occurred while adding the client.';
        }
      }
    );
  }

}
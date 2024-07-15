import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SecteurService } from '../../secteur.service';
@Component({
  selector: 'app-add-secteur',
  templateUrl: './add-secteur.component.html',
  styleUrls: ['./add-secteur.component.css']
})
export class AddSecteurComponent {
  secteur={
    libelle:''
  };
  message='';

  constructor(private secteurService:SecteurService,private router :Router){}

  addSecteur(form:NgForm):void{
    this.secteurService.addSecteur(this.secteur).subscribe(response=>{
      this.message='Secteur ajoutée avec succes';
      form.resetForm();
    },error=>{
      console.error('Error', error); // Log any errors that occur
        if (error.status === 422) {
          // Handle specific validation errors
          console.error('Validation errors:', error.error);
          // Display specific error messages to the user
          this.message = 'Validation errors occurred. Please check your input.';
        } else {
          // Handle other types of errors
          this.message = 'An error occurred while adding the secteur.';
        }
    })
  }

}

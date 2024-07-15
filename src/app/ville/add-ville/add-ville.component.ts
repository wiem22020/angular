import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VilleService } from '../../ville.service';
@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent {
  ville={
    libelle:''
  };
  message='';

  constructor(private villeService:VilleService,private router :Router){}

  addVille(form:NgForm):void{
    this.villeService.addVille(this.ville).subscribe(response=>{
      this.message='Ville ajoutée avec succes';
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
          this.message = 'An error occurred while adding the ville.';
        }
    })
  }

}

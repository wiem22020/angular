import { Component } from '@angular/core';
import { FactureService } from '../../facture.service';
import { ReglementService } from 'src/app/reglement.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-reglement',
  templateUrl: './add-reglement.component.html',
  styleUrls: ['./add-reglement.component.css']
})
export class AddReglementComponent {
  reglement = {
    codeReg: '',
    dateReg: '',
    montant: '',
    modalite: '',
    facture_id: null
  };

  factures: { id: number, code: string, date: Date}[] = [];
  message = '';

  constructor(
    private reglementService: ReglementService,
    private factureService: FactureService,
    
    private router: Router
  ) { }
  ngOnInit(): void {
    
    this.fetchFactures();
    this.fetchLastReglementId();
  }

  fetchFactures(): void {
    this.factureService.getFacture().subscribe(
      factures => {
        this.factures = factures;
      },
      error => {
        console.error('Error fetching factures:', error);
      }
    );
  }

  fetchLastReglementId(): void {
    this.reglementService.getLastReglementId().subscribe(
      (lastReglementId: number) => {
        const reglementId = lastReglementId + 1;
        this.reglement.codeReg = `RG000${reglementId}`;
      },
      error => {
        console.error('Error fetching last reglement ID:', error);
      }
    );
  }

  addReglement(form: NgForm): void {
    if (this.reglement.facture_id) {
      this.reglementService.addReglement(this.reglement).subscribe(
        response => {
          
          this.message = 'Reglement added successfully';
          form.resetForm();
          
          this.fetchLastReglementId();
        },
        error => {
          console.error('Error', error);
          if (error.status === 422) {
            console.error('Validation errors:', error.error);
            this.message = 'Validation errors occurred. Please check your input.';
          } else {
            this.message = 'An error occurred while adding the reglement.';
          }
        }
      );
    } else {
      console.error('Client ID is not selected');
    }
  }
}

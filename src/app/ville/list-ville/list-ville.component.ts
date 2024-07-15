import { Component } from '@angular/core';
import { VilleService } from '../../ville.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ville',
  templateUrl: './list-ville.component.html',
  styleUrls: ['./list-ville.component.css']
})
export class ListVilleComponent {
  villes:any[]=[];

  constructor(private villeService:VilleService,private router :Router){}

  ngOnInit():void{
    this.villeService.getVilles().subscribe(data=>{
      this.villes=data
    });
  }

  editVille(ville:any){
    this.router.navigate(['/edit-ville',ville.id]);
  }

  deleteVille(ville:any){
    this.villeService.deleteVille(ville.id).subscribe(()=>{
      this.villes=this.villes.filter(c=>c.id !== ville.id);
      console.log('ville supprimée: ',ville);
    }, error => {
      console.error('Erreur lors de la suppression du tva : ', error);
    });
  }

  navigateToAddVille():void{
    this.router.navigate(['/add-ville']);
  }
}

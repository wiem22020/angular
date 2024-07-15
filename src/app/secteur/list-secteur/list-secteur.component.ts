import { Component } from '@angular/core';
import { SecteurService } from '../../secteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-secteur',
  templateUrl: './list-secteur.component.html',
  styleUrls: ['./list-secteur.component.css']
})
export class ListSecteurComponent {
  secteurs:any[]=[];

  constructor(private secteurService:SecteurService,private router :Router){}

  ngOnInit():void{
    this.secteurService.getSecteurs().subscribe(data=>{
      this.secteurs=data
    });
  }

  editSecteur(secteur:any){
    this.router.navigate(['/edit-secteur',secteur.id]);
  }

  deleteSecteur(secteur:any){
    this.secteurService.deleteSecteur(secteur.id).subscribe(()=>{
      this.secteurs=this.secteurs.filter(c=>c.id !== secteur.id);
      console.log('secteur supprimée: ',secteur);
    }, error => {
      console.error('Erreur lors de la suppression du tva : ', error);
    });
  }

  navigateToAddSecteur():void{
    this.router.navigate(['/add-secteur']);
  }
}

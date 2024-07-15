import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { TvaComponent } from './global/tva/tva.component';
import { AddTvaComponent } from './global/add-tva/add-tva.component';
import { EditTvaComponent } from './global/edit-tva/edit-tva.component';
import { ListVilleComponent } from './ville/list-ville/list-ville.component';
import { AddVilleComponent } from './ville/add-ville/add-ville.component';
import { EditVilleComponent } from './ville/edit-ville/edit-ville.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { ListSecteurComponent } from './secteur/list-secteur/list-secteur.component';
import { AddSecteurComponent } from './secteur/add-secteur/add-secteur.component';
import { EditSecteurComponent } from './secteur/edit-secteur/edit-secteur.component';
import { AddFactureComponent } from './facture/add-facture/add-facture.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { AddReglementComponent } from './reglement/add-reglement/add-reglement.component';
import { ListReglementComponent } from './reglement/list-reglement/list-reglement.component';


const routes: Routes = [
  {path:'add-reglement', component:AddReglementComponent},
  {path:'list-reglement', component:ListReglementComponent},
  {path:'add-facture', component:AddFactureComponent},
  {path:'list-facture', component:ListFactureComponent},
  
  { path: 'list-secteur', component:ListSecteurComponent },
  { path: 'add-secteur', component: AddSecteurComponent },
  { path: 'edit-secteur/:id', component: EditSecteurComponent },
  { path: 'list-article', component: ListArticleComponent },
  { path: 'add-article', component: AddArticleComponent },
  { path: 'edit-article/:id', component: EditArticleComponent },
  { path: 'list-ville', component: ListVilleComponent },
  { path: 'add-ville', component: AddVilleComponent },
  { path: 'edit-ville/:id', component: EditVilleComponent },
  { path: 'edit-tva/:id', component: EditTvaComponent },
  { path: 'tva', component: TvaComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-tva', component: AddTvaComponent },
  { path: 'edit-client/:id', component: EditClientComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: '', redirectTo: '/clients', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




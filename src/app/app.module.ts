import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import this
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { AddSecteurComponent } from './secteur/add-secteur/add-secteur.component';
import { ListSecteurComponent } from './secteur/list-secteur/list-secteur.component';
import { EditSecteurComponent } from './secteur/edit-secteur/edit-secteur.component';
import { AddFactureComponent } from './facture/add-facture/add-facture.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { AddReglementComponent } from './reglement/add-reglement/add-reglement.component';
import { ListReglementComponent } from './reglement/list-reglement/list-reglement.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    AddClientComponent,
    EditClientComponent,
    TvaComponent,
    AddTvaComponent,
    EditTvaComponent,
    ListVilleComponent,
    AddVilleComponent,
    EditVilleComponent,
    ListArticleComponent,
    AddArticleComponent,
    EditArticleComponent,
    AddSecteurComponent,
    ListSecteurComponent,
    EditSecteurComponent,
    AddFactureComponent,
    ListFactureComponent,
    AddReglementComponent,
    ListReglementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Add this
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

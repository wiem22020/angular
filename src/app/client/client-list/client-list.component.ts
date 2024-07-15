import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }


  editClient(client: any) {
    // Rediriger vers la page d'édition du client
    this.router.navigate(['/edit-client', client.id]);
  }

  deleteClient(client: any) {
    // Envoyer une requête de suppression au serveur
    this.clientService.deleteClient(client.id).subscribe(() => {
      // Mettre à jour la liste des clients après la suppression
      this.clients = this.clients.filter(c => c.id !== client.id);
      console.log('Client supprimé : ', client);
    }, error => {
      console.error('Erreur lors de la suppression du client : ', error);
    });
  }

  navigateToAddClient(): void {
    this.router.navigate(['/add-client']);
  }

}

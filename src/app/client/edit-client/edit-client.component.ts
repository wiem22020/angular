import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../client.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client: any = {};
  message: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.getClientById(Number(clientId)).subscribe(data => {
        this.client = data;
      });
    }
  }

  updateClient(): void {
    this.clientService.updateClient(this.client).subscribe(response => {
      this.message = 'Client updated successfully';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000); // Redirect to client list after 2 seconds
    }, error => {
      console.error('Error updating client: ', error);
      this.message = 'An error occurred while updating the client.';
    });
  }
}

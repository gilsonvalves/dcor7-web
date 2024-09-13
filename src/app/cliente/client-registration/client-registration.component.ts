import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/service/cliente-service/client.service';
import { Client } from 'src/app/shared/models/client.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {
  client: Client = { name: '', email: '' };

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    public  router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientService.getClient(Number(id)).subscribe(client => {
        if (client) {
          this.client = client;
        }
      });
    }
  }

  save(): void {
    if (this.client.id) {
      this.clientService.updateClient(this.client);
    } else {
      this.clientService.addClient(this.client);
    }
    this.router.navigate(['/clients']);
  }
}

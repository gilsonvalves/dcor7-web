import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/service/cliente-service/client.service';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  editClient(client: Client): void {
    // Redireciona para o formulário de edição
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id);
    this.clients = this.clients.filter(c => c.id !== id);
  }
}

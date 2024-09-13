import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Client } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, name: 'Cliente 1', email: 'cliente1@example.com' },
    { id: 2, name: 'Cliente 2', email: 'cliente2@example.com' }
  ];

  getClients(): Observable<Client[]> {
    return of(this.clients);
  }

  getClient(id: number): Observable<Client | undefined> {
    const client = this.clients.find(c => c.id === id);
    return of(client);
  }

  addClient(client: Client): void {
  //  client.id = this.clients.length ? Math.max(...this.clients.map(c => c.id)) + 1 : 1;
    this.clients.push(client);
  }

  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex(c => c.id === updatedClient.id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter(c => c.id !== id);
  }
}

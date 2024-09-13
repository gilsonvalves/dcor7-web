import { Injectable } from '@angular/core';

interface Client {
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [];

  addClient(client: Client) {
    this.clients.push(client);
    console.log('Client added:', client);
  }

  getClients(): Client[] {
    return this.clients;
  }
}

import { Component } from '@angular/core';
import { ClientService } from './../../shared/service/cliente-service/client.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {
  client = { name: '', email: '', phone: '', address: '' };

  constructor(private clientService: ClientService) {}

  onSubmit(): void {
    this.clientService.addClient(this.client);
    alert('Cliente cadastrado com sucesso!');
    this.client = { name: '', email: '', phone: '', address: '' }; // Reset form
  }
}

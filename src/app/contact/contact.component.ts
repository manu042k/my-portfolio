import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = "manu042k@gmail.com";
  address: string = "Riverside,CA, USA";
  linkedin: string = "manojm042k";
}

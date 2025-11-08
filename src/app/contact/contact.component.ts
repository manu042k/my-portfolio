import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactMethods = [
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'manojm042k',
      link: 'https://www.linkedin.com/in/manojm042k/',
      color: '#0A66C2',
      description: "Let's connect professionally",
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'manu042k',
      link: 'https://github.com/manu042k',
      color: '#333',
      description: 'Check out my code',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Riverside, CA, USA',
      link: '',
      color: '#34A853',
      description: "Where I'm based",
    },
  ];
}

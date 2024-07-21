import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  awards = [
    { title: 'Award Title 1', details: 'Details about the award, including the year received and the awarding organization.', icon: 'fas fa-trophy', link: 'https://example.com/award1' },
    { title: 'Award Title 2', details: 'Details about the award, including the year received and the awarding organization.', icon: 'fas fa-medal', link: 'https://example.com/award2' },
    { title: 'Award Title 3', details: 'Details about the award, including the year received and the awarding organization.', icon: 'fas fa-star', link: 'https://example.com/award3' },
    { title: 'Award Title 3', details: 'Details about the award, including the year received and the awarding organization.', icon: 'fas fa-star', link: 'https://example.com/award3' }
  ];
}

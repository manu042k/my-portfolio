import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {

  @ViewChild('cardWrapper') cardWrapper?: ElementRef;

  scrollAmount = 200; // Adjust this value based on card width and desired scroll distance
  currentOffset = 0;

  projects = [
    { title: 'Project 1', description: 'Description of project 1.', image: 'https://via.placeholder.com/80' },
    { title: 'Project 2', description: 'Description of project 2.', image: 'https://via.placeholder.com/80' },
    { title: 'Project 3', description: 'Description of project 3.', image: 'https://via.placeholder.com/80' },
    { title: 'Project 4', description: 'Description of project 4.', image: 'https://via.placeholder.com/80' },
    { title: 'Project 4', description: 'Description of project 4.', image: 'https://via.placeholder.com/80' },
    { title: 'Project 4', description: 'Description of project 4.', image: 'https://via.placeholder.com/80' },

  ];

  scrollLeft() {
    const container = this.cardWrapper?.nativeElement;
    const maxOffset = 0;
    this.currentOffset = Math.min(maxOffset, this.currentOffset + this.scrollAmount);
    container.style.transform = `translateX(${this.currentOffset}px)`;
  }

  scrollRight() {
    const container = this.cardWrapper?.nativeElement;
    const maxOffset = container.scrollWidth - container.clientWidth;
    this.currentOffset = Math.max(-maxOffset, this.currentOffset - this.scrollAmount);
    container.style.transform = `translateX(${this.currentOffset}px)`;
  }
}
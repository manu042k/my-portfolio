import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  title: string = 'Portfolio';

  navigationService = inject(NavigationService);

  navigateTo(section: string) {
    this.navigationService.scrollToSection(section);
  }
}

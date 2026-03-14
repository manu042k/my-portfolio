import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingDirective } from '../directive/typing.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TypingDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  imagePath: string = './../../assets/me.jpg';
  subTitle: string =
    "I'm a Software Developer specializing in web and application development.";
  aboutMe: string =
    'I’m Manoj Manjunatha, a Master’s student in Computer Engineering at UC Riverside. My experience at Siemens Healthineers has been instrumental in shaping my skills, where I contributed to modernizing laboratory and inventory management systems, developed scalable cloud-based applications using Django, and designed user-friendly interfaces with Angular. My expertise in creating impactful solutions and my passion for technology drive my work. Explore my projects to see how I apply these skills to address real-world challenges.';
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/manu042k',
      icon: 'fab fa-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manojm042k/',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'Resume',
      url: 'https://drive.google.com/drive/folders/1kL0fzznCEdT38PgVDM1BvH1VWfW7ZHFT?usp=drive_link',
      icon: 'fas fa-file-alt',
    },
  ];
}

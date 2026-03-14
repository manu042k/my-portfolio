import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
})
export class AwardsComponent {
  isPaused = false;

  awards = [
    {
      title: 'Winners - AI idea Pitch Competition 2025 ',
      details:
        'Presented idea on how to automate verification testing using AI agents (Browser Agents).',
      icon: 'fas fa-trophy',
      link: '',
    },
    {
      title: 'Runner Up - DC Hackathon',
      details:
        "Developed the MVP for 'SKB Copilot: Smart Knowledge Documentation and Sharing' utilizing Generative AI and LLM at Siemens Healthineers, February 2024.",
      icon: 'fas fa-trophy',
      link: 'https://drive.google.com/file/d/1ZTh2lWBenWZjcAj3DQ7zaKUf1IsO9pkF/view?usp=drive_link',
    },
    {
      title: 'Finalist, DC Excellence Awards',
      details:
        'Recognized as a Rising Star for exceptional achievements with under three years of experience at Siemens Healthineers, 2023-2024.',
      icon: 'fas fa-medal',
      link: '',
    },
    {
      title: 'e-Yantra Hackathon',
      details:
        'Led a team to a top 6 finish out of 1,878 teams, focusing on innovative solutions to combat COVID-19, e-Yantra IIT-B, 2021.',
      icon: 'fas fa-star',
      link: 'https://drive.google.com/file/d/1T9wBocS81G-ksW-mvcQTcb8P18TKuinG/view?usp=drive_link',
    },
  ];

  pauseMarquee() {
    this.isPaused = true;
  }

  resumeMarquee() {
    this.isPaused = false;
  }
}

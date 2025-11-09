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
    {
      title: 'AgileBot',
      description:
        'Developed a SaaS platform that automates user story generation from software requirement documents using Django DRF, React, and Tailwind for the frontend, and LangChain, FAISS, and llama-3.2 . The platform integrates Groq AI Inference and Cohere vector embeddings for enhanced task generation, with sprint planning and team management features to streamline agile workflows and improve project efficiency.',
      detials: 'https://github.com/manu042k/Agile-bot',
    },
    {
      title: 'CodeGaurd',
      description:
        'It is a comprehensive code analysis platform that leverages AI agents to provide detailed insights into your GitHub repositories. It performs multi-faceted analysis including security scanning, code quality assessment, architecture review, dependency management, and trend analysis.',
      detials: 'https://github.com/manu042k/CodeGaurd',
    },
    {
      title: 'VisionXAI',
      description:
        'Visual Query Bot – Developed an interactive chat application that enables users to upload images, draw bounding boxes on specific regions, and ask targeted questions about those areas. Leveraged LangChain and LangGraph to build robust information retrieval agents for context-aware visual querying',
      detials: 'https://annot-a-ix-v5yz.vercel.app',
    },
    {
      title: 'ChainReaction',
      description:
        'A real-time multiplayer web implementation of the classic Chain Reaction board game. Create cascading reactions, dominate the board, and outsmart your opponents in this intense strategy game.',
      detials: 'https://chain-reaction-tau.vercel.app',
    },
  ];

  scrollLeft() {
    const container = this.cardWrapper?.nativeElement;
    const maxOffset = 0;
    this.currentOffset = Math.min(
      maxOffset,
      this.currentOffset + this.scrollAmount
    );
    container.style.transform = `translateX(${this.currentOffset}px)`;
  }

  scrollRight() {
    const container = this.cardWrapper?.nativeElement;
    const maxOffset = container.scrollWidth - container.clientWidth;
    this.currentOffset = Math.max(
      -maxOffset,
      this.currentOffset - this.scrollAmount
    );
    container.style.transform = `translateX(${this.currentOffset}px)`;
  }
}

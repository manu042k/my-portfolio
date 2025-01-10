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
        'Developed a SaaS platform that automates user story generation from software requirement documents, utilizing Django DRF, React, and Tailwind for the frontend, and LangChain,FAISS, and llama-3.2 for AI-driven processing and accuracy. The platform integrates Groq AI Inference and Cohere vector embeddings to enhance task generation and validation using agents and chains. Additionally, it includes sprint planning and team management features to streamline agile workflows, improving project efficiency and collaboration through real-time task management and seamless integration.',
    },
    {
      title: 'G-Ai-chatbot',
      description:
        'Project features a front-end and back-end architecture that leverages Ollama for running LLMs locally to ensure fast and efficient language processing, LangChain for chaining language models to enhance conversational capabilities, FastAPI for high-performance API creation, and ChromaDB for efficient and scalable database management, providing a robust and responsive chatbot experience',
    },
    {
      title: 'Angular Frontend',
      description:
        'Contributed to development of a cross-platform solution to simplify laboratory data management using  micro-frontends (angular-architects module fedration), with a focus on creating user interfaces in Angular utilizing the SHUI framework for consistent design, ngrx for robust state management,and nx cli for an integrated development experience, and scalability.',
    },
    {
      title: 'Django Full stack',
      description:
        'Developed a proof-of-concept multi-tenant web application using Django to handle 1,000 tenants and over 1 million inventory records. Implemented Roles Management, Order Management, and Inventory Management Systems. Created background jobs with Celery, APIs for communication, and Dockerized the application for deployment on Azure Cloud.',
    },

    {
      title: 'Web Application Development',
      description:
        'Developed a prenatal risk calculation system (PRISCA) from its original WPF-based structure to a web application using the Django framework.Implemented role-based functionalities for various users. The system efficiently generates detailed reports by integrating data from biochemical markers, ultrasound measurements, and demographic information.',
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

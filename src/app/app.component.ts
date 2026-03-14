import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrganismBgComponent } from './components/organism-bg/organism-bg.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    OrganismBgComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';

  resumeData = {
    personalInfo: {
      name: 'Manoj Manjunatha',
      title: 'Software Engineer',
      location: 'Riverside, CA, USA',
      phone: '951-801-9745',
      email: 'mmanj008@ucr.edu',
      linkedin: 'https://linkedin.com/in/manojm042k/',
      github: 'https://github.com/manu042k',
      website: 'https://manu042k.tech/',
      linkedinLabel: 'linkedin.com/in/manojm042k',
      githubLabel: 'github.com/manu042k',
      websiteLabel: 'manu042k.tech'
    },
    education: [
      {
        institution: 'University of California, Riverside',
        location: 'Riverside, CA, USA',
        degree: 'Master’s in Computer Engineering',
        dates: 'Sep 2024 – Dec 2025',
        gpa: '3.63/4'
      }
    ],
    skills: {
      languages: 'C, C#, Python, TypeScript, JavaScript, SQL.',
      tools: 'Git, Docker, Kubernetes, Postman, RabbitMQ, NuGet, NGINX, VS Code, Visual Studio, Swagger / OpenAPI, Azure, AWS, Microsoft SQL, PostgreSQL, MongoDB, Kafka.',
      frameworks: 'ASP.NET Core, Django, FastAPI, Flask, Angular, React/Next.js, Node.js, Three.js, LangChain, Jest, PyTest, NUnit.',
      architecture: 'Microservices, Domain-Driven Design (DDD), Event-Driven Architecture (EDA), Agile.'
    },
    experience: [
      {
        company: 'Micron Technology',
        location: 'Boise, ID, USA',
        title: 'System Software Engineer Intern',
        dates: 'Jun 2025 – Sep 2025',
        bullets: [
          'Architected and deployed a full-stack memory-component fitness analysis platform using Angular, .NET Core Web API, and IIS server, incorporating 3D die-model visualization via Three.js to replace manual fitment workflows.',
          'Engineered computational geometry based die-fitness algorithms and deployed them through REST APIs used by 70+ engineers across three countries, integrating with a centralized database via the Entity Framework ORM.',
          'Developed an AI-assisted reasoning engine leveraging heuristic search, constraint propagation, and weighted decision policies to automate design-parameter selection, reducing manual validation and reporting workload by 80%.'
        ]
      },
      {
        company: 'Siemens Healthineers',
        location: 'Bengaluru, India',
        title: 'Software Developer/Engineer',
        dates: 'Aug 2022 – Aug 2024',
        bullets: [
          'Built and maintained the user-management pages within a 7 Micro-Frontend, 150+ page Angular system, leveraging Module Federation for scalable, decoupled development and contributing to a 20% increase in user satisfaction.',
          'Implemented NGRX to manage complex UI and data states enabling smooth state transitions, easier debugging, and improved testability and introduced Nx workspace orchestration, reducing development time by 30%.',
          'Built and deployed a multi-tenant Django application on Azure Cloud, supporting 1,000+ tenants and 1M+ records, and implemented a robust CI/CD pipeline using Docker, CosmosDB, and Azure App Service, reducing system downtime by 35%.',
          'Integrated C# microservices endpoints for seamless SAP and IoT communication, optimizing data workflows and cutting processing time by 40%, significantly improving operational efficiency.'
        ]
      },
      {
        company: 'Siemens Healthineers',
        location: 'Bengaluru, India',
        title: 'Software Developer Intern',
        dates: 'Jan 2022 – Jul 2022',
        bullets: [
          'Developed a full-stack web application using Django REST Framework and React to replace a legacy WPF system, resulting in a 30% reduction in processing time and modernizing the workflow architecture.',
          'Implemented a user-management system with role-based access control and developed advanced report-generation features, improving data accessibility and operational efficiency.'
        ]
      }
    ],
    projects: [
      {
        title: 'AgileBot - Smart Project-Management Platform',
        tech: 'Django, Celery, Next.js, Shadcn, OAuth, Tailwind, WebSockets',
        bullets: [
          'Built a SaaS platform converting requirement documents into structured user stories using Agentic LLM pipelines and semantic-search embeddings for accurate, context-aware outputs.',
          'Implemented agile workflow features, capacity-based task allocation and sprint planning, reducing manual effort by 40%.'
        ]
      },
      {
        title: 'CodeGuard - AI Static Code Analysis Platform',
        tech: 'Next.js, FastAPI, PostgreSQL, Docker, LangGraph, PyGithub',
        bullets: [
          'Developed a multi-agent static code analysis platform to evaluate security, code quality, architecture, and documentation across GitHub repositories.',
          'Automated reporting by executing code in isolated containers, ensuring safe, scalable, and reliable static analysis.'
        ]
      },
      {
        title: 'VisionX.ai - Visual Information Retriever',
        tech: 'LangChain, LangGraph, FastAPI, Angular, NGRX, vLLM',
        bullets: [
          'Built a multi-modal chat platform enabling users to upload images, annotate with bounding boxes, and query specific regions using AI-powered visual information retrieval.',
          'Developed a responsive agent-driven interface handling follow-up queries and providing contextually relevant internet-sourced information, improving interactive data exploration.'
        ]
      }
    ],
    awards: [
      { description: 'UCR AI Idea Pitch Competition 2025', category: 'Winner' },
      { description: 'SHS DC Excellence Awards 2024', category: 'Finalist' },
      { description: 'SHS DC AI Hackathon 2024', category: 'Runner-up' }
    ]
  };
}

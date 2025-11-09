import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  name: string;
  years: string;
  role: string;
  description: string;
  type: 'education' | 'internship' | 'work';
  location: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  timelineItems: TimelineItem[] = [
    {
      name: 'University of California, Riverside',
      years: 'September 2024 - December 2025',
      role: "Master's in Computer Engineering",
      description:
        'Pursuing advanced studies in Computer Engineering with a GPA of 3.74/4. Winner of UCR AI Idea Pitch Competition 2025. Specializing in microservices architecture, and full-stack development.',
      type: 'education',
      location: 'Riverside, CA, USA',
    },
    {
      name: 'Micron Technology',
      years: 'June 2025 - September 2025',
      role: 'System Software Engineer Intern',
      description:
        'Designed and deployed a memory component fitness analysis tool using Angular 20, .NET Core Web API, and IIS server featuring interactive 3D model rendering via Three.js to eliminate manual die fitment calculations. Engineered die fitness computation algorithms and RESTful APIs to automate product validation and design rule compliance. Implemented an AI agent for intelligent reasoning and heuristic-based value selection, reducing human effort by 80% in reporting and validation processes.',
      type: 'internship',
      location: 'Boise, ID, USA',
    },
    {
      name: 'Siemens Healthineers',
      years: 'August 2022 - August 2024',
      role: 'Software Developer/Engineer',
      description:
        'Developed the UI of a cross-platform laboratory data management system using Angular with Micro-Frontend architecture and Module Federation, increasing user satisfaction by 20%. Improved scalability and modularity by integrating NGRX for state management and Nx CLI, reducing development time by 30%. Built and deployed a multi-tenant Django application on Azure Cloud supporting 1,000+ tenants and 1M+ records. Integrated C# microservices for seamless SAP and IoT communication, cutting processing time by 40%.',
      type: 'work',
      location: 'Bengaluru, India',
    },
    {
      name: 'Siemens Healthineers',
      years: 'January 2022 - July 2022',
      role: 'Software Developer Intern',
      description:
        'Developed a full-stack web application using Django DRF and React to replace a legacy WPF-based system, achieving a 30% reduction in processing time. Implemented role-based access control and built features for comprehensive report generation, improving system security and data accessibility.',
      type: 'internship',
      location: 'Bengaluru, India',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  name: string;
  years: string;
  role: string;
  description: string;
  type: 'education' | 'internship' | 'work';
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
        'Pursuing advanced studies in Computer Engineering with a GPA of 3.74/4. Winner of UCR AI Idea Pitch Competition 2025. Specializing in AI/ML, microservices architecture, and full-stack development.',
      type: 'education',
    },
    {
      name: 'Micron Technology',
      years: 'June 2025 - September 2025',
      role: 'System Software Engineer Intern',
      description:
        'Designed and deployed a memory component fitness analysis tool using Angular 20, .NET Core Web API, and IIS server with 3D rendering via Three.js. Engineered die fitness computation algorithms and RESTful APIs, implementing an AI agent that reduced human effort by 80% in reporting and validation processes.',
      type: 'internship',
    },
    {
      name: 'Siemens Healthineers',
      years: 'August 2022 - August 2024',
      role: 'Software Developer/Engineer',
      description:
        'Developed a cross-platform laboratory data management system using Angular with Micro-Frontend architecture, increasing user satisfaction by 20%. Built and deployed a multi-tenant Django application on Azure Cloud supporting 1,000+ tenants and 1M+ records. Integrated C# microservices for SAP and IoT communication, cutting processing time by 40%.',
      type: 'work',
    },
    {
      name: 'Siemens Healthineers',
      years: 'January 2022 - July 2022',
      role: 'Software Developer Intern',
      description:
        'Developed a full-stack web application using Django DRF and React to replace a legacy WPF-based system, achieving a 30% reduction in processing time. Implemented role-based access control and built features for comprehensive report generation, improving system security and data accessibility.',
      type: 'internship',
    },
  ];
}

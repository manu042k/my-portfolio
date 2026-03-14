import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloudComponent } from '../icon-cloud/icon-cloud.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, IconCloudComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
  skills = [
    { name: 'C', image: './../../assets/c.png' },
    { name: 'C#', image: './../../assets/ch.png' },
    { name: 'Python', image: './../../assets/python.png' },
    { name: 'Typescript', image: './../../assets/typescript.png' },
    { name: 'NodeJs', image: './../../assets/nodejs.png' },
    { name: 'DOT-NET', image: './../../assets/dotnet.png' },
    { name: 'Django', image: './../../assets/django.png' },
    { name: 'Angular', image: './../../assets/angular.png' },
    { name: 'LangChain', image: './../../assets/langchain.png' },
    { name: 'Azure Cloud', image: './../../assets/azure.png' },
    { name: 'Git', image: './../../assets/git.png' },
    { name: 'Docker', image: './../../assets/docker.png' },
    { name: 'Postman', image: './../../assets/postman.png' },
    { name: 'Redux', image: './../../assets/redux.png' },
    { name: 'MySQL', image: './../../assets/db.png' },
    { name: 'MongoDb', image: './../../assets/mongodb.png' },
    { name: 'Firebase', image: './../../assets/firebase.png' },
    { name: 'Microservices', image: './../../assets/microservices.png' },
    { name: 'Microfrontend', image: './../../assets/microfrontend.png' },
    { name: 'Nx Cli', image: './../../assets/nx.png' },
  ];
}

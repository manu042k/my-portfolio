import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent implements OnInit {
  skills: any = [
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
    { name: 'Microservices ', image: './../../assets/microservices.png' },
    { name: 'Microfrontend ', image: './../../assets/microfrontend.png' },
    { name: 'Nx Cli', image: './../../assets/nx.png' },



  ];

  ngOnInit() {
    this.addAnimationDelays();
  }


  addAnimationDelays() {
    this.skills.forEach((skill: { [x: string]: number; }) => {
      skill['delay'] = Math.random() * 2; // Delay between 0 and 2 seconds
    });

  }
}
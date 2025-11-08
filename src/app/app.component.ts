import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavBarComponent,
    HomeComponent,
    SkillsSectionComponent,
    TimelineComponent,
    ProjectSectionComponent,
    FooterComponent,
    ContactComponent,
    AwardsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}

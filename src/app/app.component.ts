import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavBarComponent, HomeComponent, SkillsSectionComponent, ProjectSectionComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}

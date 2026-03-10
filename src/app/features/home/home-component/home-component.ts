import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero-component/hero-component';
import { AboutComponent } from '../components/about-component/about-component';
import { ProjectsComponent } from '../components/projects-component/projects-component';
import { LabComponent } from '../components/lab-component/lab-component';

@Component({
  selector: 'app-home-component',
  imports: [HeroComponent, AboutComponent, ProjectsComponent, LabComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}

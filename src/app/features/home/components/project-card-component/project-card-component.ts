import { Component, Input } from '@angular/core';
import { Project } from '../../../../core/models/project';

@Component({
  selector: 'app-project-card-component',
  imports: [],
  templateUrl: './project-card-component.html',
  styleUrl: './project-card-component.scss',
})
export class ProjectCardComponent {
    @Input() project: Project = new Project("", "", [], '', '', '');

    goToProject(projectUrl: string): void {
        window.open(projectUrl);
    }
}
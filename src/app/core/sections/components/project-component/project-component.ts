import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-component',
  imports: [],
  templateUrl: './project-component.html',
  styleUrl: './project-component.scss',
})
export class ProjectComponent {
    @Input() project: Project = new Project("", "", [], '', '');
}

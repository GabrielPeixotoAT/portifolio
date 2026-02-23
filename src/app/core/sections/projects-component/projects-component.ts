import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectComponent } from "../components/project-component/project-component";

@Component({
  selector: 'app-projects-component',
  imports: [ProjectComponent],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
    projects: Array<Project> = [
            new Project(
                "Game Story Writer", 
                "Um sistema web completo para gerenciar diálogos e missões de jogos (Quest System). Permite a criação dinâmica de grafos de conversação e exportação de JSON para engines de jogos.", 
                [
                    ".NET",
                    "JavaScript",
                    "PostgreSQL",
                    "RabbitMQ",
                    "Stripe"
                ],
                'img/gameStoryWriter.webp',
                'card gsw'
            ),
            new Project(
                "Chronicles of Arcanum", 
                "Desenvolvimento de mecânicas para um jogo RPG, incluindo sistemas de combate avançados.", 
                [
                    "Game Dev",
                    "Unity",
                    "C#",
                    "Blender"
                ],
                'img/chroniclesOfArcanum.webp',
                'card coa'
            )
        ];
}

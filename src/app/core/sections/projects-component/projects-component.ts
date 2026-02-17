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
                    "PostgreSQL",
                    "RabbitMQ",
                    "Stripe"
                ]
            ),
            new Project(
                "Map Creator", 
                "Ferramenta web interativa para criação de mapas de RPG no estilo 'Inkarnate'. Utiliza Canvas API para renderização de assets e manipulação de camadas em tempo real.", 
                [
                    "ASP.NET Web API",
                    "Angular",
                    "MongoDB"
                ]
            ),
            new Project(
                "Chronicles of Arcanum", 
                "Desenvolvimento de mecânicas para um jogo RPG, incluindo sistemas de combate avançados.", 
                [
                    "Unity",
                    "C#",
                    "Blender",
                    "Game Dev"
                ]
            )
        ];
}

import { Component } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { ProjectCardComponent } from "../project-card-component/project-card-component";

@Component({
  selector: 'app-projects-component',
  imports: [ProjectCardComponent],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
    projects: Array<Project> = [
        new Project(
            "Game Story Writer", 
            `<p class="mb-1">Plataforma web para organização e gerenciamento de diálogos, missões e elementos narrativos de jogos RPG.</p>
            <p class="mb-1">Projeto autoral com responsabilidade completa sobre arquitetura, modelagem de domínio, infraestrutura, deploy 
                em nuvem e versionamento.</p>
            <p class="mb-1">Publicação prevista para 2026.</p>`, 
            [
                ".NET",
                "JavaScript",
                "PostgreSQL",
                "RabbitMQ",
                "Stripe"
            ],
            'img/gameStoryWriter.webp',
            'card gsw',
            'https://storywriter.theropodsoftworks.com/'
        ),
        new Project(
            "Chronicles of Arcanum", 
            `<p class="mb-1">Jogo autoral desenvolvido na Unity (C#), do gênero RPG de Ação com perspectiva isométrica.</p>
            <p class="mb-1">Implementação de sistemas modulares de combate, inventário, missões e diálogos, com foco em organização de código 
                e reutilização de componentes.</p>`, 
            [
                "Game Dev",
                "Unity",
                "C#",
                "Blender"
            ],
            'img/chroniclesOfArcanum.webp',
            'card coa',
            'https://www.theropodsoftworks.com/chronicles-of-arcanum'
        )
    ];
}

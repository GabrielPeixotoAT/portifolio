import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { About } from "../../sections/about/about";
import { FooterComponent } from "../footer-component/footer-component";
import { ProjectsComponent } from "../../sections/projects-component/projects-component";
import { HeroComponent } from "../../sections/hero-component/hero-component";
import { LabComponent } from "../../sections/lab-component/lab-component";

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, About, FooterComponent, ProjectsComponent, HeroComponent, LabComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}

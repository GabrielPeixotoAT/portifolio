import { Component } from '@angular/core';
import { Navbar } from "./core/layout/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/layout/footer-component/footer-component";

@Component({
  selector: 'app-root',
  imports: [Navbar, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio-pessoal';
}

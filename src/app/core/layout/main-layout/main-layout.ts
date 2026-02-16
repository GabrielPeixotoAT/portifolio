import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { About } from "../../sections/about/about";
import { Hero } from "../../sections/hero/hero";

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, About, Hero],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}

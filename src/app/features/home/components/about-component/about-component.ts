import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll';

@Component({
  selector: 'app-about-component',
  imports: [AnimateOnScrollDirective],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
})
export class AboutComponent {

}

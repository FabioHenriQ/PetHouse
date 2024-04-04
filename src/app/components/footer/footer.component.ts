import { Component } from '@angular/core';
import { SubtitleComponent } from '../subtitle/subtitle.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

import { Component } from '@angular/core';
import { DescriptionComponent } from '../../components/description/description.component';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';

@Component({
  selector: 'app-our-pets',
  standalone: true,
  imports: [DescriptionComponent, SubtitleComponent],
  templateUrl: './our-pets.component.html',
  styleUrl: './our-pets.component.css'
})
export class OurPetsComponent {

}

import { Component } from '@angular/core';
import { DescriptionComponent } from '../../components/description/description.component';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardDonateComponent } from '../../components/card-donate/card-donate.component';

@Component({
  selector: 'app-our-pets',
  standalone: true,
  imports: [DescriptionComponent, SubtitleComponent, ButtonComponent, CardDonateComponent],
  templateUrl: './our-pets.component.html',
  styleUrl: './our-pets.component.css'
})
export class OurPetsComponent {

}

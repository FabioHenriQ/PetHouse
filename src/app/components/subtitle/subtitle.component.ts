import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {
  @Input() subtitle: string = '';
  @Input() fontColor: string = '';
  @Input() textShadow: string = '';
  @Input() fontWeight: string = '';
}

import { Component } from '@angular/core';
import { MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [MatInput, MatLabel],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.css'
})
export class HelpCenterComponent {

}

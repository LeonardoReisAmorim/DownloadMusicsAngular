import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppInputComponent } from './app-input/app-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-music',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-music.component.html',
  styleUrl: './input-music.component.css'
})
export class InputMusicComponent {

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}

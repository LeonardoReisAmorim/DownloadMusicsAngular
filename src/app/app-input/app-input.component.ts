import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../API/api-service'

@Component({
  selector: 'app-app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.css'
})
export class AppInputComponent {
  constructor(private apiService: ApiService) {}
  
  urlsYoutube:string = '';

  SubmitUrls(){
    this.apiService.addItem(this.urlsYoutube)
    .subscribe(response => alert(`Foi realizada o download de ${response} musica(s)`));
  }
}

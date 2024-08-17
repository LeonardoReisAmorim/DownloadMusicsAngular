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
    this.apiService.addItem(this.urlsYoutube).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'musicas.zip';
      a.click();
      URL.revokeObjectURL(objectUrl);
    }, error => {
      alert("Aconteceu um erro. Revise o link do youtube e tente novamente");
    });
  }
}

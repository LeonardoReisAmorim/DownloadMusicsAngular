import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../API/api-service'
import { InputMusicComponent } from '../input-music/input-music.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-input',
  standalone: true,
  imports: [FormsModule, InputMusicComponent, CommonModule],
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.css'
})
export class AppInputComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.inputMusicValues.push('');
  }
  
  inputMusicValues: string[] = [];

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  SubmitUrls(){
    if(!this.inputMusicValues.join(",")){
      alert("nao foi digitada nenhuma musica");
      return;
    }

    this.apiService.addItem(this.inputMusicValues.join(",")).subscribe(blob => {
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

  addInputMusic(){
    this.inputMusicValues.push('');
  }
}

import { Component } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  msg = "Bienvenue";
  tab = ["Bienvenue", "Welcome", "Welkom", "Willkommen", "مرحباً", "欢迎", "환영", "स्वागत", "Benvenuto", "いらっしゃいませ", "Bem-vindo", "Bienvenido", "Ласкаво просимо", "∴ᒷꖎᓵ𝙹ᒲᒷ"];
  private changeTxt(){
    this.msg = this.tab[Math.floor(Math.random() * 14)];
  }

  public ngOnInit(){
    setInterval(() => {
      this.changeTxt();
    }, 5 * 1000);
  }
}

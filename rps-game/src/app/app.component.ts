import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public active: number | undefined;
  public playerChoice: number | undefined;
  public systemChoice: number | undefined;
  public message: string = '';
  onSelectChoice(ch: number) {
    this.active = ch;
    this.playerChoice = this.active;
  }
  onPlay() {
    this.systemChoice = Math.floor(Math.random() * 3);
    (this.systemChoice == this.playerChoice) ? this.message = 'equal' : this.message;
    console.log(this.message);
  }
}

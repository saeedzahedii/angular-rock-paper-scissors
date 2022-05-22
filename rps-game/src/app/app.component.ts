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
  public playerWon: number = 0;
  public systemWon: number = 0;
  onSelectChoice(ch: number) {
    this.active = ch;
    this.playerChoice = this.active;
  }
  onPlay() {
    if (this.playerWon <= 2) {
      if (this.systemWon <= 2) {
        this.systemChoice = Math.floor(Math.random() * 3);
        console.log(this.systemChoice);
        if (this.systemChoice == this.playerChoice) {
          this.message = 'equal'
        }
        else {
          switch (this.playerChoice) {
            case 0:
              if (this.systemChoice == 1) {
                this.message = 'You Lose';
                ++this.systemWon;
              }
              else if (this.systemChoice == 2) {
                this.message = 'You Wone';
                ++this.playerWon;
              }
              break;


            case 1:
              if (this.systemChoice == 0) {
                this.message = 'You Won';
                ++this.playerWon;
              }
              else if (this.systemChoice == 2) {
                this.message = 'You Lose';
                ++this.systemWon;
              }
              break;


            case 2:
              if (this.systemChoice == 0) {
                this.message = 'You Lose';
                ++this.systemWon;
              }
              else if (this.systemChoice == 1) {
                this.message = 'You Wone';
                ++this.playerWon;
              }
              break;


            default:
              break;
          }
        }

        alert(this.message);
        this.playerChoice = undefined;
        this.systemChoice = undefined;
        this.active = undefined;
      }
    }
  }
}

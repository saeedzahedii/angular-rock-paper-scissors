import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  public active: number | undefined;
  public playerChoice: number | undefined;
  public systemChoice: number | undefined;
  public message: string = '';
  public turns: number = 5;
  public playerWon: number = 0;
  public systemWon: number = 0;
  public swin: number | undefined;
  public pwin: number | undefined;

  onSelectChoice(ch: number) {
    this.active = ch;
    this.playerChoice = this.active;
  }
  onPlay() {
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
            this.turns--;
          }
          else if (this.systemChoice == 2) {
            this.message = 'You Wone';
            ++this.playerWon;
            this.turns--;
          }
          break;


        case 1:
          if (this.systemChoice == 0) {
            this.message = 'You Won';
            ++this.playerWon;
            this.turns--;
          }
          else if (this.systemChoice == 2) {
            this.message = 'You Lose';
            ++this.systemWon;
            this.turns--;
          }
          break;


        case 2:
          if (this.systemChoice == 0) {
            this.message = 'You Lose';
            ++this.systemWon;
            this.turns--;
          }
          else if (this.systemChoice == 1) {
            this.message = 'You Wone';
            ++this.playerWon;
            this.turns--;
          }
          break;


        default:
          break;
      }
    }
    this.onCheckWinner(this.playerWon, this.systemWon);
    alert(this.message);
    this.playerChoice = undefined;
    this.systemChoice = undefined;
    this.active = undefined;
  }

  onCheckWinner(pw: number, sw: number) {
    if (this.turns < 1) {
      (pw > sw) ? this.pwin = 0 : this.pwin = 1;
      (pw < sw) ? this.swin = 0 : this.swin = 1;
    } else {
      return;
    }
  }
  onReset() {
    this.active = undefined;
    this.playerChoice = undefined;
    this.systemChoice = undefined;
    this.message = '';
    this.turns = 5;
    this.playerWon = 0;
    this.systemWon = 0;
    this.swin = undefined;
    this.pwin = undefined;
  }
}

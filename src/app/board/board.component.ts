import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() {}

  // initialize variables
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  ngOnInit() {
    this.newGame();
  }

  // returns current player
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // make move at board index
  makeMove(idx: number) {
    // if empty square
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player); // set square to player
      this.xIsNext = !this.xIsNext; // toggle player
      this.winner = this.calculateWinner(); // check win
    }
  }

  calculateWinner() {
    // win lines by board index
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // check each line
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // if all three squares same player
      if (this.squares[a] && this.squares[a] == this.squares[b] && this.squares[b] == this.squares[c]) {
        // return player
        return this.squares[a];
      }
    }
    // if no winner, return null
    return null;
  }
}

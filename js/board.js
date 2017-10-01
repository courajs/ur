
export default class Board {
  constructor() {
    let b = this._blackRow = [new Cell('black'), new Cell(), new Cell(), new Cell(), null, null, new Cell(), new Cell()];
    let c = this._centerRow = [new Cell(),new Cell('white'),new Cell(),new Cell(),new Cell(),new Cell(),new Cell(),new Cell()];
    let w = this._whiteRow = [new Cell(), new Cell(), new Cell('white'), new Cell(), null, null, new Cell(), new Cell()];

    b.forEach((cell, index) => {if (cell) { cell.row = 'a'; cell.col = index + 1 }});
    c.forEach((cell, index) => {cell.row = 'b'; cell.col = index + 1});
    w.forEach((cell, index) => {if (cell) { cell.row = 'c'; cell.col = index + 1}});

    this._whiteTrack = [w[1], w[0], c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], w[7], w[6]];
    this._blackTrack = [b[1], b[0], c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], b[7], b[6]];

    window.board = this;
  }

  renderRows() {
    let a = this._blackRow.filter(x=>x).map(c=>c.render());
    let b = this._centerRow.filter(x=>x).map(c=>c.render());
    let c = this._whiteRow.filter(x=>x).map(c=>c.render());
    return a.concat(b, c).join('\n');
  }

  render() {
    document.querySelector('#game').innerHTML = `
    <div class="board">
      ${this.renderRows()}
      <div class="black piece b1"></div>
    </div>
      `;
  }
}

export class Cell {
  constructor(color) {
    this.color = color;
  }

  piece() {
    if (this.color) {
      return `${this.color} piece`;
    } else {
      return '';
    }
  }

  render() {
    return `<div class="${this.row}${this.col} reddish ${this.piece()}"></div>`;
  }
}


export default class Board {
  render() {
    document.querySelector('#game').innerHTML = `
    <div class="board">
      <div class="a1 reddish black piece"></div>
      <div class="a2 reddish"></div>
      <div class="a3 reddish"></div>
      <div class="a4 reddish"></div>
      <div class="a7 reddish"></div>
      <div class="a8 reddish"></div>
      <div class="b1 reddish"></div>
      <div class="b2 reddish"></div>
      <div class="b3 reddish"></div>
      <div class="b4 reddish"></div>
      <div class="b5 reddish"></div>
      <div class="b6 reddish"></div>
      <div class="b7 reddish"></div>
      <div class="b8 reddish"></div>
      <div class="c1 reddish white piece"></div>
      <div class="c2 reddish"></div>
      <div class="c3 reddish"></div>
      <div class="c4 reddish"></div>
      <div class="c7 reddish"></div>
      <div class="c8 reddish"></div>
    </div>
      `;
  }
}

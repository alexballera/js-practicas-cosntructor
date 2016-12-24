var template =`
<h2>Ping Pong Práctica Javascript con Código Facilito</h2>
<h3>Práctica MVC</h3>
<canvas id="canvas"></canvas>`
var contenedor = document.getElementById('respuesta')

export default () => {

  contenedor.innerHTML = template

  (function(){
    var self.Board = function(width,height) {
      this.width = width
      this.height = height
      this.playing = false
      this.game_over = false
      this.bars = []
      this.ball = null
    }

    self.Board.prototype = {
      get elements() {
        var elements = this.bars
        elements.push(ball)
        return elements
      }
    }
  })()

  (function(){
    self.BoardView = function(canvas,board){
      this.canvas = canvas
      this.canvas.width = board.width
      this.canvas.height = board.height
      this.board = board
      this.ctx = canvas.getContext('2d')
    }
  })()

  window.addEventListener('load',main)

  function main(){
    var board = new Board(800,400)
    var canvas = dpcument.getElementById('canvas')
    var board_view = new BoardView(canvas,board)
  }


}

function GameScreen(side_px){
    var canvas = document.getElementById('game');
    this.ctx = canvas.getContext('2d');

    this.game = new Game();

    this.draw = function(){
        this.ctx.fillStyle = "rgba(200, 200, 200, 1)";
        this.ctx.fillRect(0, 0, side_px, side_px);

        var board_side = this.game.getSide();
        var slot_width = side_px/board_side;

        //Grid
        var i, j;

        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 4;
        for (i = 0; i <= board_side; i++){
            this.ctx.moveTo(0, i*slot_width);
            this.ctx.lineTo(side_px, i*slot_width);
            this.ctx.moveTo(i*slot_width, 0);
            this.ctx.lineTo(i*slot_width, side_px);
        }
        this.ctx.stroke();

        var chars = this.game.seeBoard();
        var current;
        var pad = 5;
        for (i = 0; i < chars.length; i++){
            for (j = 0; j < chars.length; j++){
                current = chars[i][j];
                if (current == "blank") {
                    this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    this.ctx.fillRect(i*slot_width, j*slot_width, slot_width, slot_width);
                } else {
                    this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    this.ctx.font="30px Georgia";
                    this.ctx.fillText(current, i*slot_width + pad, (j+1)*slot_width - pad);
                }
            }
        }
    }
}
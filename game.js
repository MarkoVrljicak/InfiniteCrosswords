function Game(){
    const side = 11;

    this.board = new Board(side);

    this.getSide = function() {return side};

    this.seeBoard = function() {return this.board.getBoard()}

}

function Board(side){
    this.fields = [];
    for (var i = 0; i < side; i++){
        var new_row = [];
        for (var j = 0; j < side; j++){
            new_row.push(new Field());
        }
        this.fields.push(new_row)
    }

    this.assignBlanks = function(){
        const blank_probability = .2;
        for (var i = 0; i < this.fields.length; i++){
            for (var j = i; j < this.fields.length; j++){
                if (Math.random() < blank_probability){
                    this.fields[i][j].setBlank();
                    this.fields[j][i].setBlank();
                }
            }
        }
    };

    this.assignBlanks();

    this.getBoard = function() {
        var chars = [];
        for (var i = 0; i < this.fields.length; i++){
            var row = [];
            for (var j = 0; j < this.fields.length; j++){
                row.push(this.fields[i][j].getChar());
            }
            chars.push(row);
        }
        return chars;
    }
}

function Field(){
    this.char = "";
    this.expected = null;

    this.setBlank = function() {
        this.char = "blank";
    };

    this.isBlank = function () {
        return (this.char == "blank");
    };

    this.setChar = function(char){
        this.char = char;
    };

    this.getChar = function(){
        return this.char;
    };

    this.setExpected = function(expected) {
        this.expected = expected;
    };

    this.isCorrect = function() {
        return (this.char == this.expected);
    }
}
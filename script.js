document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('chessboard');
    const squares = [];
    let knightPosition = 'c1'; 
    let previousPosition = '';

    // Creating the chessboard
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            if ((i + j) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            square.id = `${String.fromCharCode(97 + j)}${8 - i}`; // Square notation
            board.appendChild(square);
            squares.push(square);

        }
    }

function isValidMove(currentPos, newPos) {
        const currX = currentPos.charCodeAt(0) - 97;
        const currY = parseInt(currentPos[1], 10) - 1;
        const newX = newPos.charCodeAt(0) - 97;
        const newY = parseInt(newPos[1], 10) - 1;

        const dx = Math.abs(currX - newX);
        const dy = Math.abs(currY - newY);

        // Knight moves in L-shape: 2 squares in one direction and 1 square perpendicular to that direction
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }

    // Function to move the knight
    function moveKnight(newPosition) {
        previousPosition = knightPosition;

        const currentSquare = document.getElementById(knightPosition);
        const newSquare = document.getElementById(newPosition);

        
        currentSquare.innerHTML = '';

        
        const knightSymbol = document.createElement('span');
        knightSymbol.className = 'knight';
        knightSymbol.textContent = '♞';
        newSquare.appendChild(knightSymbol);

        
        if (previousPosition) {
            const previousSquare = document.getElementById(previousPosition);
            const mark = document.createElement('div');
            mark.className = 'mark';
            previousSquare.appendChild(mark); }
    
        
        knightPosition = newPosition;
    }

    
    moveKnight('c1');

    
    squares.forEach(square => {
        square.addEventListener('click', function() {
            const newPosition = this.id;
if(isValidMove(knightPosition, newPosition)){
            moveKnight(newPosition);}
else{console.log('Invalid move');}
        });
    });
});
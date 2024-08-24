// ## Sequencia de Fibonacci

// function fibonacci(n) {
//     let sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence;
// }
//
// console.log(fibonacci(100)); // Saída: [0, 1, 1, 2, 3]

// Jogo da velha interativo no console

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let board = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' ']
// ];
//
// let currentPlayer = 'X';
//
// function printBoard() {
//     console.log(`
//      0   1   2
//    -------------
// 0  | ${board[0][0]} | ${board[0][1]} | ${board[0][2]} |
//    -------------
// 1  | ${board[1][0]} | ${board[1][1]} | ${board[1][2]} |
//    -------------
// 2  | ${board[2][0]} | ${board[2][1]} | ${board[2][2]} |
//    -------------
//   `);
// }
//
// function checkWinner() {
//     // Verificar linhas
//     for (let i = 0; i < 3; i++) {
//         if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
//             return true;
//         }
//     }
//     // Verificar colunas
//     for (let i = 0; i < 3; i++) {
//         if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
//             return true;
//         }
//     }
//     // Verificar diagonais
//     if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
//         return true;
//     }
//     if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
//         return true;
//     }
//     return false;
// }
//
// function checkTie() {
//     return board.flat().every(cell => cell !== ' ');
// }
//
// function play() {
//     printBoard();
//     rl.question(`Player ${currentPlayer}, enter your move (row and column): `, input => {
//         const [row, col] = input.split(' ').map(Number);
//
//         if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
//             board[row][col] = currentPlayer;
//
//             if (checkWinner()) {
//                 printBoard();
//                 console.log(`Player ${currentPlayer} wins!`);
//                 rl.close();
//             } else if (checkTie()) {
//                 printBoard();
//                 console.log('It\'s a tie!');
//                 rl.close();
//             } else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 play();
//             }
//         } else {
//             console.log('Invalid move! Try again.');
//             play();
//         }
//     });
// }
//
// play();


// Soma e média de uma lista

// function sumAndAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     let average = sum / numbers.length;
//     return { sum, average };
// }
//
// console.log(sumAndAverage([1254,12597,1236547899,1254789654,12365478,54863587]));


// Maior numero de uma lista

// function findLargest(numbers) {
//     let largest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
//     return largest;
// }
//
// console.log(findLargest([1,3,5,8,9,1000,2578,641025,64789878421269])); // Saída: 8
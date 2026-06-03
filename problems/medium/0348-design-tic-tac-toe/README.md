# 348. Design Tic-Tac-Toe

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Design, Matrix, Simulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/design-tic-tac-toe/)

## Problem Description

Assume the following rules are for the tic-tac-toe game on an `n x n` board between two players:

- A move is guaranteed to be valid and is placed on an empty block.
- Once a winning condition is reached, no more moves are allowed.
- A player who succeeds in placing `n` of their marks in a horizontal, vertical, or diagonal row wins the game.

Implement the `TicTacToe` class:

- `TicTacToe(int n)` Initializes the object the size of the board `n`.
- `int move(int row, int col, int player)` Indicates that the player with id `player` plays at the cell `(row, col)` of the board. The move is guaranteed to be a valid move. Return:
  - `0` if there is no winner after the move
  - `1` if player 1 is the winner after the move
  - `2` if player 2 is the winner after the move

### Examples

**Example 1:**

    Input:
    ["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]
    [[3], [0,0,1], [0,2,2], [2,2,1], [1,1,2], [2,0,1], [1,0,2], [2,1,1]]
    Output: [null, 0, 0, 0, 0, 0, 0, 1]

    Explanation:
    TicTacToe ticTacToe = new TicTacToe(3);
    ticTacToe.move(0, 0, 1); // return 0
    X . .
    . . .
    . . .

    ticTacToe.move(0, 2, 2); // return 0
    X . O
    . . .
    . . .

    ticTacToe.move(2, 2, 1); // return 0
    X . O
    . . .
    . . X

    ticTacToe.move(1, 1, 2); // return 0
    X . O
    . O .
    . . X

    ticTacToe.move(2, 0, 1); // return 0
    X . O
    . O .
    X . X

    ticTacToe.move(1, 0, 2); // return 0
    X . O
    O O .
    X . X

    ticTacToe.move(2, 1, 1); // return 1 (player 1 wins!)
    X . O
    O O .
    X X X  ← bottom row complete!

### Constraints

- `2 <= n <= 100`
- player is `1` or `2`
- `0 <= row, col < n`
- Every call to `move` will be on an unplayed square
- At most `n^2` calls will be made to `move`

**Follow up:** Could you do better than O(n²) per move() operation?

## Approach

### O(1) Per Move with Counter Arrays

Instead of checking the whole board after each move, track counters for each row, column, and both diagonals. Player 1 adds +1, Player 2 adds -1. When any counter reaches +n or -n, that player wins.

**Key Insight:** You don't need to store the board at all! Just track how "full" each row, column, and diagonal is for each player. The +1/-1 trick lets both players share the same counters — +n means player 1 filled it, -n means player 2 filled it.

**Why +1/-1 works:** If player 1 adds +1 and player 2 adds -1, they cancel each other out. A counter can only reach +n if ALL n marks are from player 1, and -n if ALL from player 2. Mixed rows can never trigger a win.

**Data structures:**
- `rows[n]` — counter for each row
- `cols[n]` — counter for each column
- `diag` — counter for main diagonal (row === col)
- `antiDiag` — counter for anti-diagonal (row + col === n - 1)

**Algorithm:**
1. On `move(row, col, player)`:
   - Determine value: player 1 → +1, player 2 → -1
   - Add to `rows[row]`, `cols[col]`
   - If on main diagonal (`row === col`), add to `diag`
   - If on anti-diagonal (`row + col === n - 1`), add to `antiDiag`
   - If any counter's absolute value equals n → that player wins
2. Return 0 if no winner

**Walkthrough:**

    n = 3, rows=[0,0,0], cols=[0,0,0], diag=0, anti=0

    move(0,0,1): val=+1
      rows[0]=1, cols[0]=1, diag=1 (0===0)
      No counter is 3 → return 0

    move(0,2,2): val=-1
      rows[0]=0, cols[2]=-1, anti=-1 (0+2=2=n-1)
      → return 0

    move(2,2,1): val=+1
      rows[2]=1, cols[2]=0, diag=2 (2===2)
      → return 0

    move(1,1,2): val=-1
      rows[1]=-1, cols[1]=-1, diag=1 (1===1), anti=-2 (1+1=2)
      → return 0

    move(2,0,1): val=+1
      rows[2]=2, cols[0]=2, anti=(-2+1)=-1 (2+0=2)
      → return 0

    move(1,0,2): val=-1
      rows[1]=-2, cols[0]=1
      → return 0

    move(2,1,1): val=+1
      rows[2]=3 → |3| === n → Player 1 wins! return 1 ✓

**Comparison with other design problems:**
- Min Stack (#155): Auxiliary stack for O(1) getMin
- LRU Cache (#146): Hash map + doubly linked list for O(1) operations
- **Tic-Tac-Toe (#348): Counter arrays for O(1) win detection** ✅

**Time Complexity:** O(1) per move — just update and check 4 counters  
**Space Complexity:** O(n) — row and column arrays

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Counter arrays eliminate the need to scan the board after each move
- The +1/-1 trick lets both players share counters — elegant and space efficient
- Only 4 things to check per move: row, column, diagonal, anti-diagonal
- Center cell is on BOTH diagonals — handle this correctly
- This O(1) approach is what interviewers want to see for the follow-up
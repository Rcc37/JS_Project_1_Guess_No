# JS_Project_1_Guess_No

# Number Guessing Game

This project is a simple and interactive **Number Guessing Game** built using **HTML**, **CSS**, and **JavaScript**. It demonstrates concepts such as event handling, DOM manipulation, and the use of functions to enhance code reusability. The game generates a random number and challenges the player to guess it within a limited number of attempts.

---

## Features

- Random number generation between 1 and 20.
- Interactive UI updates based on user input.
- Feedback messages to indicate the correctness of guesses (e.g., "Too High!", "Too Low!", "Correct Number!").
- High score tracking across game sessions.
- Option to restart the game without refreshing the page.
- Dynamic styling changes (e.g., background color) to indicate winning state.

---

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the user interface.
- **JavaScript**: For game logic and interactivity.

---

## Project Structure

### **HTML Elements**
- `.message`: Displays feedback messages (e.g., "Start guessing...", "Correct Number!").
- `.number`: Displays the hidden number or the guessed number.
- `.score`: Shows the player's current score.
- `.highscore`: Displays the highest score achieved.
- `.guess`: Input field for entering guesses.
- `.check`: Button to submit guesses.
- `.again`: Button to restart the game.

### **CSS Styles**
- `body`: Background color dynamically changes upon winning.
- `.number`: Adjusts width based on game state.

### **JavaScript Logic**
1. **Random Number Generation**:
   - `let secretNumber = Math.trunc(Math.random() * 20) + 1;`
   - Ensures a new random number is generated for each game session.

2. **Score Management**:
   - `let score = 20;`
   - Reduces score on incorrect guesses.
   - Displays "You Lost the Game!" when the score reaches 0.

3. **High Score Tracking**:
   - Updates and displays the high score when the player guesses correctly.

4. **Event Listeners**:
   - **Check Button**:
     - Compares user input with the secret number and updates UI accordingly.
   - **Again Button**:
     - Resets the game state for a new round.

5. **DOM Manipulation**:
   - Updates content dynamically (e.g., `document.querySelector('.message').textContent`).
   - Changes styles dynamically (e.g., background color, element width).

6. **Reusable Functions**:
   - `displayMessage(message)`: Simplifies message updates to avoid code repetition.

---

## How to Play

1. Open the game in a web browser.
2. Enter a number between 1 and 20 in the input field.
3. Click the **Check** button to submit your guess.
4. Observe feedback messages to adjust your guesses:
   - "Too High!"
   - "Too Low!"
   - "Correct Number!"
5. Win by guessing the correct number before your score reaches 0.
6. Click **Again** to play another round and aim for a higher score.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Open the `index.html` file in your browser.

---

## Potential Improvements

- Add difficulty levels with varying ranges and initial scores.
- Implement additional styling for a more engaging UI.
- Store high scores in local storage for persistence.
- Add sound effects for better user interaction.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy playing and improving the game!



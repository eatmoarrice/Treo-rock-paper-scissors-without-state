import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import PublicNavbar from './components/PublicNavbar';

function App() {
	const shapes = ['rock', 'paper', 'scissors'];
	let computerChoice = 'rock';
	let playerChoice = 'rock';
	let computerResult = 'tie';
	let playerResult = 'tie';
	const randomMove = () => {
		console.log(computerChoice);
		computerChoice = shapes[Math.floor(Math.random() * 3)];
		playerChoice = shapes[Math.floor(Math.random() * 3)];
		console.log('Computer: ', computerChoice);
		console.log('Player: ', playerChoice);
	};
	const calculateWinner = () => {
		if (computerChoice === playerChoice) {
			computerResult = 'tie';
			playerResult = 'tie';
		} else if (computerChoice === 'rock') {
			if (playerChoice === 'paper') {
				computerResult = 'lose';
				playerResult = 'win';
			} else {
				computerResult = 'win';
				playerResult = 'lose';
			}
		} else if (computerChoice === 'paper') {
			if (playerChoice === 'scissors') {
				computerResult = 'lose';
				playerResult = 'win';
			} else {
				computerResult = 'win';
				playerResult = 'lose';
			}
		} else {
			if (playerChoice === 'rock') {
				computerResult = 'lose';
				playerResult = 'win';
			} else {
				computerResult = 'win';
				playerResult = 'lose';
			}
		}
	};

	randomMove();
	calculateWinner();

	return (
		<div className="App text-center">
			<PublicNavbar />
			<Container>
				<div className="d-flex justify-content-center flex-wrap">
					<ChoiceCard title="You" result={playerResult} shape={playerChoice} />
					<ChoiceCard title="Computer" result={computerResult} shape={computerChoice} />
				</div>
				<Button
					variant="info"
					onClick={() => {
						randomMove();
						calculateWinner();
					}}
				>
					Random
				</Button>
			</Container>
		</div>
	);
}

export default App;

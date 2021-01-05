import React from 'react';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';

const ChoiceCard = (props) => {
	return (
		<div className={`choice-card ${props.result === 'win' ? 'border-success' : props.result === 'tie' ? 'border-dark' : 'border-danger'}`}>
			<h2>{props.title}</h2>
			<img src={props.shape === 'rock' ? rock : props.shape === 'paper' ? paper : scissors} alt={props.shape} />
			<h3>{props.result === 'win' ? 'WIN' : props.result === 'tie' ? 'TIE' : 'LOSE'}</h3>
		</div>
	);
};

export default ChoiceCard;

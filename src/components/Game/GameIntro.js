import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import './GameIntro.css';
import Background from './Background';
import Spaceship from './Spaceship';
import Cockpit from './Cockpit';
import GameQuestion from './GameQuestion';

class GameIntro extends Component {

    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ tension: 200, friction: 7 }} >
                {props => (<div style={props}>
                    
                    <div className='spaceIntroCont'>
                        <div className='spaceQuestionCont'>
                            <GameQuestion />
                        </div>
                        <div className='spaceCockpitCont'>
                            <Cockpit />
                        </div>
                        <div className='spaceShip'>
                            <Spaceship />
                        </div>
                        <Background />
                    </div>

                </div>)}</Spring>

        )
    }
}

export default GameIntro;
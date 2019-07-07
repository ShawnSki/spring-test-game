import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import './GameIntro.css';

class GameQuestion extends Component {

    render() {
        return (
            <Spring
                from={{ opacity: 0, transform: 'translate3d(0,100px,0) scale(1) rotateX(0deg)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotateX(0deg)' }}
                config={{ delay: 5000, tension: 60, friction: 7 }} >
                {props => (<div style={props}>

                    <div className='spaceQuestionBox'>
                        <div className='spaceBoxQuestion'>
                            <h2>Question goes here...</h2>
                        </div>
                        <div className='spaceBoxBtns'>
                            <button>Answer option</button>
                            <button>Answer option</button>
                            <button>Answer option</button>
                            <button>Answer option</button>
                        </div>
                    </div>

                </div>)}</Spring>

        )
    }
}

export default GameQuestion;
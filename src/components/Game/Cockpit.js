import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import './GameIntro.css';

class Cockpit extends Component {

    render() {
        return (
            <Spring
                from={{ opacity: 0, transform: 'translate3d(0,100px,0) scale(1) rotateX(0deg)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotateX(0deg)' }}
                config={{ delay: 4000, tension: 60, friction: 7 }} >
                {props => (<div style={props}>

                    <div className='spaceHeader'>
                        <div className='spaceHeaderCaptain'>
                            <h2>CAPTAIN:</h2>
                            <h2>username</h2>
                        </div>
                        <div><h1>60</h1></div>
                        <div className='spaceHeaderScore'>
                            <h3>SCORE:</h3>
                            <h1>2000</h1>
                        </div>
                    </div>
                    <div className='spaceCockpit'></div>

                </div>)}</Spring>

        )
    }
}

export default Cockpit;
import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import './GameIntro.css';

class Background extends Component {

    render() {
        return (
            <Spring
                from={{ opacity: 1, transform: 'translate3d(0,800px,0) scale(1) rotateX(0deg)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotateX(0deg)' }}
                config={{ delay: 500, tension: 100, friction: 7 }} >
                {props => (<div style={props}>

                    <div className='spaceDirt'></div>

                </div>)}</Spring>

        )
    }
}

export default Background;
import React, { Component } from 'react'
import Heading from './components/Heading/Heading';
import './Checkout.scss';
import CheckInput from './components/Checkbox/Checkbox';
import NumberBox from './components/NumberBox/NumberBox';

export default class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
    }
    onClick() {
        this.setState(prevState => ({ isVisible: !prevState.isVisible }));
      }

    render() {
        
        return (
            <div className="gift-container">
                <div>
                    <Heading/>
                    <CheckInput hide={() => this.onClick()}/>
                    {
                        this.state.isVisible
                        
                    ? <NumberBox/> : null
                    }
                    </div>
            </div>

        )
    }
}

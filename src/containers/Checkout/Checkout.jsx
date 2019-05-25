import React, { Component } from 'react'
import Heading from './components/Heading/Heading';
import './Checkout.scss';
import CheckInput from './components/Checkbox/Checkbox';
import Description from './components/Description/Description';
import NumberBox from './components/NumberBox/NumberBox';

export default class Checkout extends Component {
    render() {
        return (
            <div className="gift-container">
                <div>
                    <Heading/>
                    <CheckInput/>
                    <Description/>
                    <NumberBox/>
                </div>
            </div>
        )
    }
}

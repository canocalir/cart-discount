import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ApplyButton from '../ApplyButton/ApplyButton';
import IsApplied from '../IsApplied/IsApplied';

const NumberContainer = styled.div`
    margin-top: 10px;
`;

const API = 'http://localhost:3001/giftcards';


export default class NumberBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giftcards: [],
            cardnumbers: [],
            controlnumber: [],
            cardValue: '',
            controlValue: ''
        };
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(response => this.setState({ 
            giftcards: response,
            cardnumbers: response.cardnumber,
            controlnumber: response.control
        }))
    }
    
    render() {
        
        return (
            <NumberContainer>
                <TextField
                style={{ margin: 8, width: 430 }}
                margin="normal"
                variant="outlined"
                type="search"
                label="Gift Card Number"
                name="cardNomber"
                ref={(ref) => {this.cardValue =ref}}
                />
                <TextField
                style={{ margin: 8, width: 200}}
                margin="normal"
                variant="outlined"
                type="search"
                label="Control Code"
                name="controlCoder"
                ref={(ref) => {this.controlValue =ref}}
                />

                <ApplyButton/>
            </NumberContainer>
        )
    }
}

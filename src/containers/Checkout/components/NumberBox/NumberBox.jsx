import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ApplyButton from '../ApplyButton/ApplyButton';
import axios from 'axios';
import IsApplied from '../IsApplied/IsApplied';

const NumberContainer = styled.div`
    margin-top: 10px;
`;


export default class NumberBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giftcards: [],
            cardValue: '',
            controlValue: '',
            isSeen: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange (value, value2) {
        this.setState({
            cardValue: value,
            controlValue: value2  
        });
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:3001/giftcards')
        const giftcards = response.data
        this.setState({giftcards: giftcards})
        }

    onClickHandler() {
        
        if (this.state.cardValue === this.state.giftcards.cardnumber && 
            this.state.controlValue === this.state.giftcards.control) {
            return alert("correct") & this.setState({isSeen:true})
        } else if (this.state.cardValue.length === 0 &&
             this.state.controlValue.length === 0) {
            return alert("error")
        } else {
            return alert("enter correct number")
        }
    }
    
    render() {
        let resultsbox;            
        if (this.state.isSeen) {
            resultsbox = <IsApplied cardno={this.state.cardValue}/>;
        } else {
            resultsbox = null;
        }
        
        return (
            <NumberContainer>
              {resultsbox}  
                <TextField
                style={{ margin: 8, width: 430 }}
                margin="normal"
                variant="outlined"
                type="search"
                label="Gift Card Number"
                name="cardNomber"
                onChange={e => this.onHandleChange(e.target.value)}
                
                />
                <TextField
                style={{ margin: 8, width: 200}}
                margin="normal"
                variant="outlined"
                type="search"
                label="Control Code"
                name="controlCoder"
                onChange={e => this.onHandleChange(e.target.value2)}
                />

                <ApplyButton handle={this.onClickHandler}/>
            </NumberContainer>
        )
    }
}

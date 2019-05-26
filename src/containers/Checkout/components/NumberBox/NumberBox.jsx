import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ApplyButton from '../ApplyButton/ApplyButton';
import axios from 'axios';
import IsApplied from '../IsApplied/IsApplied';
import Description from '../Description/Description';

const NumberContainer = styled.div`
    margin-top: 10px;
    margin-bottom:0px;
`;

const TextNotify = styled.div`
    color: red;
    padding: 5px;
    margin-left: 10px;
    align-content: flex-start;

`;

const TextEmpty = styled.div`
    color: red;
    padding: 5px;
    margin-left: 10px;
`;

const TextControl = styled.div`
    color: red;
    margin-left: 200px;
    padding: 5px;

`;

const WarningTextCont = styled.div`
    margin-top:5px;
    display:flex;
    flex-direction: row;
`;


export default class NumberBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giftcards: [],
            first: '',
            second: '',
            isSeen: false,
            validate: true,
            isEmpty: true,
            controlVal: true
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange (property) {
         return e => {

         this.setState({
            [property]: e.target.value 
        });
        if (this.state.first.length < 18) {
            this.setState({validate: false})
        } else {
            this.setState({validate:true})
        }

        if (this.state.second.length < 2) {
            this.setState({controlVal: false})
        } else {
            this.setState({controlVal:true})
        }

        if (this.state.first.length > 0 &&
            this.state.second.length > 3) {
                this.setState({isEmpty:false})
        } else {
            this.setState({isEmpty:true})
        }
      };
      
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:3001/giftcards')
        const giftcards = response.data
        this.setState({giftcards: giftcards})
    }

    onClickHandler() {
        const { giftcards, first, second } = this.state
        const matchingGiftCards = giftcards.filter((card) => {
            return card.cardnumber === first && card.control === second
        })

        if (matchingGiftCards.length > 0){
            this.setState({isSeen:true})
        }
        if (first.length && second.length === 0) {
            this.setState({isEmpty:true})
        } else if (this.state.isSeen) {
            this.setState({isEmpty:false})
        } 
    }
    
    render() {
        let resultsbox; 
        let validText;
        let emptyText;
        let controlText;       
        if (this.state.isSeen) {
            resultsbox = <IsApplied cardno={this.state.first.replace(/\d{16}/, "**** **** **** **** ")}/>;
        } else {
            resultsbox = null;
        }

        if (!this.state.validate) {
            validText = <TextNotify>Please enter a valid giftcard</TextNotify>
        } else {
            validText = null;
        }

        if (!this.state.controlVal) {
            controlText = <TextControl>Please enter a valid control code</TextControl>
        } else {
            controlText = null;
        }
        
        if (!this.state.isEmpty) {
            emptyText = <TextEmpty>Fields must be filled with correct number</TextEmpty>
        } else {
            emptyText = null;
        }
        
        return (
            <NumberContainer>
                <Description/>
              {resultsbox}  
                <TextField
                style={{ margin: 8, width: 430 }}
                margin="normal"
                required
                variant="outlined"
                type="search"
                label="Gift Card Number"
                value={this.state.first}
                name="cardNomber"
                onChange={this.onHandleChange('first')}
                
                />
                <TextField
                style={{ margin: 8, width: 200}}
                margin="normal"
                required
                variant="outlined"
                type="search"
                label="Control Code"
                value={this.state.second}
                name="controlCoder"
                onChange={this.onHandleChange('second')}
                />
                <WarningTextCont>
                {validText}
                {emptyText}
                {controlText}
                </WarningTextCont>
                <ApplyButton handle={this.onClickHandler}/>
            </NumberContainer>
        )
    }
}

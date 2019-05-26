import React, { Component } from 'react';
import styled from 'styled-components';

const AppliedContainer = styled.div`
    background-color: lightgray;
    height: 70px;
    width: 95%;
    display:flex;
    margin-left: 20px;
    margin-bottom: 20px;

`;

const AppliedCardNumber = styled.p `
    position:absolute;
    margin-top: 35px;
    padding: 5px;
    font-weight: lighter;
`;

const TotalDiscount = styled.p`
    text-decoration: line-through;
    position:absolute;
    right: 25px;
    margin-top:22px;
    font-weight: bold;
   
`;

const GiftHead = styled.h4`
    margin-top:0px;
    padding: 8px;
    font-weight: normal;
    position: absolute;


`;

const MiddleSec = styled.div`

`;

export default class IsApplied extends Component {
    render() {
        return (
            <AppliedContainer>
                <GiftHead>Gift Card</GiftHead>
                <MiddleSec>
                <AppliedCardNumber>
                {this.props.cardno}
                </AppliedCardNumber>
                <TotalDiscount>-$20.00</TotalDiscount>
                </MiddleSec>
            </AppliedContainer>
        )
    }
}

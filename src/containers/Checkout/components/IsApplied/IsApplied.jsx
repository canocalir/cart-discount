import React, { Component } from 'react';
import styled from 'styled-components';

const AppliedContainer = styled.div`
    background-color: lightgray;
    height: 70px;
`;

export default class IsApplied extends Component {
    render() {
        return (
            <AppliedContainer>
                <h3>{this.props.cardno}</h3>
            </AppliedContainer>
        )
    }
}

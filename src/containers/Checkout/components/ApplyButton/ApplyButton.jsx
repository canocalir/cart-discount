import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    padding:0.5em;
`;

const Button = styled.button`
    background-color: #000;
    width: 170px;
    position: relative;
`;

const ButtonText = styled.h4`
    color:#fff;
`;

export default class ApplyButton extends Component {
    render() {
        return (
            <ButtonContainer>
              <Button onClick={this.props.handle}>
                  <ButtonText>Apply</ButtonText>
              </Button>
            </ButtonContainer>
        )
    }
}

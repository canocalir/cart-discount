import React from 'react';
import styled from 'styled-components';

const DescLabel = styled.label`
opacity: 0.5;
padding: 0em;
margin: 15px 5px 5px 12px;
`;

export default function Description() {
    return (
        <div>
            <DescLabel>
            Please enter the 19-digit number 
            and code from your gift card below.
            </DescLabel>
        </div>
    )
}

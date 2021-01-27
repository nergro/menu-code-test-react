import React from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/input/Input';
import { P } from '../Atoms/text/P';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    max-width: 300px;
    margin: 30px auto 0;
`;

const StyledInput = styled(Input)`
    margin-bottom: 8px;
`;

export const GuestForm = () => {
    return (
        <>
            <P>Welcome! Please enter your names</P>
            <Form>
                <StyledInput type="text" placeholder="Guest 1" />
                <StyledInput type="text" placeholder="Guest 2" />
            </Form>
        </>
    );
};

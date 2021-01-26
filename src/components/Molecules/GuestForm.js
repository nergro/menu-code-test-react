import React from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/input/Input';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const StyledInput = styled(Input)`
    margin-bottom: 8px;
`;

const StyledButton = styled(Button)`
    margin-top: 10px;
`;

export const GuestForm = () => {
    return (
        <Form>
            <StyledInput type="text" placeholder="Guest 1" />
            <StyledInput type="text" placeholder="Guest 2" />
            <StyledButton type="submit">Submit</StyledButton>
        </Form>
    );
};

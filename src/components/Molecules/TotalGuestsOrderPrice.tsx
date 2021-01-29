import React, { FC } from 'react';
import { P } from '../Atoms/text/P';
import { getArray } from '../../services/getArray';
import { Guests } from '../../types/guest';
import { useState as useGuestsState } from '../../store/guestsStore/hooks';

const getTotalGuestSum = (guests: Guests): number =>
    getArray(guests).reduce((sum, guest) => {
        return sum + guest.totalSum;
    }, 0);

interface Props {
    className?: string;
}

export const TotalGuestsOrderPrice: FC<Props> = ({ className }) => {
    const guestsState = useGuestsState();

    return (
        <P className={className}>
            <strong>Total price:</strong> {getTotalGuestSum(guestsState.guests)}€
        </P>
    );
};

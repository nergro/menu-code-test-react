import React, { FC } from 'react';
import { P } from '../Atoms/text/P';
import { getArray } from '../../services/getArray';
import { Guests } from '../../types/guest';

const getTotalGuestSum = (guests: Guests): number =>
    getArray(guests).reduce((sum, guest) => {
        return sum + guest.totalSum;
    }, 0);

interface Props {
    className?: string;
    guests: Guests;
}

export const TotalGuestsOrderPrice: FC<Props> = ({ className, guests }) => {
    return (
        <P className={className}>
            <strong>Total price:</strong> {getTotalGuestSum(guests)}€
        </P>
    );
};

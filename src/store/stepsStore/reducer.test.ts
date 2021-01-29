import { reducer } from './reducer';
import { initialState } from './provider';

test('should go to next step correctly', () => {
    expect(reducer('guestForm', { type: 'Step/Next' })).toBe('menu');

    expect(reducer('orderComplete', { type: 'Step/Next' })).toBe('orderComplete');
});

test('should go to previous step correctly', () => {
    expect(reducer('orderReview', { type: 'Step/Previous' })).toBe('menu');

    expect(reducer('guestForm', { type: 'Step/Previous' })).toBe('guestForm');
});

test('should reset state', () => {
    expect(reducer('orderComplete', { type: 'Step/Reset' })).toBe(initialState);
});

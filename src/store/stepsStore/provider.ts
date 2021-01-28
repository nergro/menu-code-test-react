import { storeFactory } from '../storeFactory';

import { reducer } from './reducer';
import { Action as GenericAction } from '../types';
import { steps } from '../../types/steps';

export type Action = GenericAction<'Step/Next'> | GenericAction<'Step/Previous'>;

export type State = string;

export const initialState = steps[0];

export const {
    dispatchContext: StepDispatchContext,
    stateContext: StepStateContext,
    provider: StepStoreProvider,
} = storeFactory(reducer, initialState);

import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice', () => {
    test('counter decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement)
        ).toEqual({ value: 9 });
    });

    test('counter increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment)
        ).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({
            value: 1,
        });
    });
});

import flashReducer, {
  flashState,
  increment,
  decrement,
  incrementByAmount,
} from './flashSlice';

describe('flash reducer', () => {
  const initialState: flashState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(flashReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = flashReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = flashReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = flashReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});

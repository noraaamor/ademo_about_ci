import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize with count = 0 and val = 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1); // count = 0 + val
  });

  it('should change increment value when setVal is called', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(5);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5); // count = 0 + new val
  });
});

import { SetStateAction, useCallback, useState } from 'react';

export const useTimeoutState = <T>(
  defaultState: T,
): [T, (action: SetStateAction<T>, opts?: { timeout: number }) => void] => {
  const [state, _setState] = useState<T>(defaultState);
  const [currentTimeoutId, setCurrentTimeoutId] = useState<NodeJS.Timeout | undefined>();

  const setState = useCallback(
    (action: SetStateAction<T>, opts?: { timeout: number }) => {
      if (currentTimeoutId != null) {
        clearTimeout(currentTimeoutId);
      }

      _setState(action);

      const id: NodeJS.Timeout = setTimeout(() => _setState(defaultState), opts?.timeout);
      setCurrentTimeoutId(id);
    },
    [currentTimeoutId, defaultState],
  );
  return [state, setState];
};

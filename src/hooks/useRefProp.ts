import {useEffect, useRef} from 'react';

const useRefProp = <T>(input: T) => {
  const ref = useRef<T>(input);
  ref.current = input;
  return ref;
};

export default useRefProp;

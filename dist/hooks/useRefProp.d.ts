/// <reference types="react" />
declare const useRefProp: <T>(input: T) => import("react").MutableRefObject<T>;
export default useRefProp;

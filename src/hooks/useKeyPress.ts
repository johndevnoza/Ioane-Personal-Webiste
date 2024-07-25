// import { useEffect, useRef } from "react";

// function useKeyPress(targetKey: string, handler: () => void): void {
//   const handlerRef = useRef(handler);

//   useEffect(() => {
//     handlerRef.current = handler;
//   }, [handler]);

//   useEffect(() => {
//     const handleKeyPress = (event: KeyboardEvent) => {
//       if (event.key === targetKey) {
//         handlerRef.current();
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//   }, [targetKey]);
// }
// export default useKeyPress;

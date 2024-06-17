import { useEffect, useRef } from "react";

export const useFocusElement = (elementId: number,scrollInside:boolean, length: number) => {
  const elementRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (elementRef.current[elementId - 1]) {
      elementRef.current[elementId - 1].focus();
    }
  }, [elementId, scrollInside]);

  const setElementRef = (index: number) => (el: HTMLDivElement | null) => {
    elementRef.current[index] = el!;
  };

  return { elementRef, setElementRef };
};

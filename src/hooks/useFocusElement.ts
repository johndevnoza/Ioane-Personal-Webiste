import { useEffect, useRef } from "react";

export const useFocusElement = (elementId: number, length: number) => {
  const elementRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (elementRef.current[elementId - 1]) {
      elementRef.current[elementId - 1].focus();
    }
  }, [elementId]);

  const setElementRef = (index: number) => (el: HTMLDivElement | null) => {
    elementRef.current[index] = el!;
  };

  return { elementRef, setElementRef };
};

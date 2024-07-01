import { useEffect, useRef } from "react";
import { scrollManagment } from "scrollManagment";

export const useFocusElement = (elementId: number, length: number) => {
  const elementRef = useRef<HTMLElement[]>([]);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const handleSectionsEnter = scrollManagment(
    (state) => state.handleSectionsEnter,
  );
  useEffect(() => {
    if (
      elementId >= 1 &&
      elementId <= length &&
      elementRef.current[elementId - 1]
    ) {
      elementRef.current[elementId - 1].focus();
    }
  }, [elementId, scrollInside, handleSectionsEnter, length]);

  const setElementRef = (index: number) => (el: HTMLElement | null) => {
    if (el) {
      elementRef.current[index] = el;
    }
  };
  const setParagraphRef = (index: number) => (el: HTMLDivElement | null) => {
    elementRef.current[index] = el!;
  };

  return { elementRef, setElementRef, setParagraphRef };
};

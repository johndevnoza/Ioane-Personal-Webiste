import { useEffect, useRef } from "react";
import { scrollManagment } from "scrollManagment";

export const useFocusElement = (elementId: number, length: number) => {
  const elementRef = useRef<HTMLDivElement[]>([]);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const handleSectionsEnter = scrollManagment((state) => state.handleSectionsEnter);

  useEffect(() => {
    if (elementRef.current[elementId - 1]) {
      elementRef.current[elementId - 1].focus();
    }
  }, [elementId, scrollInside, handleSectionsEnter]);

  const setElementRef = (index: number) => (el: HTMLDivElement | null) => {
    elementRef.current[index] = el!;
  };

  return { elementRef, setElementRef };
};

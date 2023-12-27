// animationUtils.ts
import { RefObject } from "react";

export interface AnimationPositions {
  [key: string]: { x: number; y: number };
}

export const createSpringAnimation = (
  ref: RefObject<HTMLElement>,
  icon: string
) => {
  const handleMouse = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): AnimationPositions | null => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      return { [icon]: { x: middleX, y: middleY } };
    }
    return null;
  };

  const reset = (): AnimationPositions => ({ [icon]: { x: 0, y: 0 } });

  return {
    handleMouse,
    reset,
  };
};

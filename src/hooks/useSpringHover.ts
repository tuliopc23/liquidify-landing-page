import { useMemo } from "react";
import { animated, useSpring } from "@react-spring/web";

export type SpringHoverOptions = {
  lift?: number;
  scale?: number;
  stiffness?: number;
  damping?: number;
};

export const useSpringHover = (opts: SpringHoverOptions = {}) => {
  const { lift = 3, scale = 1.01, stiffness = 180, damping = 18 } = opts;
  const [{ e }, api] = useSpring(() => ({ e: 0 }));

  const style = useMemo(() => {
    const transform = e.to((v) => {
      const ty = -lift * v;
      const sc = 1 + (scale - 1) * v;
      return `translateY(${ty}px) scale(${sc})`;
    });
    const boxShadow = e.to((v) => {
      const a1 = 0.04 + 0.04 * v;
      const a2 = 0.08 + 0.08 * v;
      return `inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 16px rgba(0,0,0,${a1}), 0 20px 32px rgba(0,0,0,${a2})`;
    });
    return { transform, boxShadow } as const;
  }, [e, lift, scale]);

  const bind = {
    onMouseEnter: () =>
      api.start({ e: 1, config: { tension: stiffness, friction: damping } }),
    onMouseLeave: () =>
      api.start({ e: 0, config: { tension: stiffness, friction: damping } }),
    onFocus: () => api.start({ e: 1 }),
    onBlur: () => api.start({ e: 0 }),
  } as const;

  return [style, bind, animated] as const;
};

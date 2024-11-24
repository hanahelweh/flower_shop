import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
interface lenisType {
  lerp?:number;
  wheelMultiplier?:number,
  infinite?:boolean,
  smoothWheel?:boolean,
  smoothTouch?:boolean
}
export function useSmoothScroll({
    lerp,
    wheelMultiplier,
    infinite,
    smoothWheel,
    smoothTouch,
    }:lenisType) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp,
            wheelMultiplier,
            infinite,
            smoothWheel,
            smoothTouch
        });
        function animate(time: number) {
          lenis.raf(time);
          requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
        return () => {
          lenis.destroy();
        };
    }, [lerp, wheelMultiplier, infinite, smoothWheel, smoothTouch]);
}

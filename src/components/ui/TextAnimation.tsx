import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { GiFlowerPot } from "react-icons/gi";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function TextAnimation() {
    // Text animation setup
    const gsapText = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.to(gsapText.current, {
            duration: 3,
            text: 'Floranza Flower Shop – creating moments of joy, one blossom at a time',
            ease: "power3.inOut",
            repeat: -1,
            repeatDelay: 5,
            delay: 1,
            yoyo: true,
            scrollTrigger: {
                trigger: gsapText.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });

    // Flower move animation on mouse move
    const xTo = useRef<(value: number) => void>();
    const yTo = useRef<(value: number) => void>();    
    const gsapFlower = useRef<HTMLDivElement>(null);

    const { contextSafe } =  useGSAP(() => {
        if(gsapFlower.current){
            xTo.current = gsap.quickTo(".flowerBox", "x", {duration: 0.8, ease: "power3"})
            yTo.current = gsap.quickTo(".flowerBox", "y", {duration: 0.8, ease: "power3"})
        }
    },{ scope: gsapFlower } );

      const handleFlowerMove = contextSafe((e:MouseEvent) => {
        if(gsapFlower.current){
            const rect = gsapFlower?.current?.getBoundingClientRect();
            const flowerWidth = rect.width;
            const flowerHeight = rect.height
            const offsetX = e.clientX - rect.left - flowerWidth/2;
            const offsetY = e.clientY - rect.top - flowerHeight/2;
            if(xTo.current && yTo.current){
                xTo.current(offsetX);
                yTo.current(offsetY);
            }
        }
    });

    return (
        <div ref={gsapFlower} onMouseMove={(e)=>handleFlowerMove(e)}>
            <div ref={gsapText} className='animatedText'>
                Looking to brighten someone’s day?
            </div>
            <div className='flowerBox'>
                <GiFlowerPot />
            </div>
        </div>
    );
}

export default TextAnimation;

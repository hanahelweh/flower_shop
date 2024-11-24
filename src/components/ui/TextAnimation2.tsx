import { useRef } from 'react';
import gsap from 'gsap';
import { PiFlowerFill } from 'react-icons/pi';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TextAnimationProps {
    text:string,
    flower:boolean
}

gsap.registerPlugin(ScrollTrigger);
function TextAnimation({text,flower=false} : TextAnimationProps) {
    const gsapText = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const letters = gsap.utils.toArray(".animated"); // Select all elements with class "animated"
        gsap.fromTo(
            letters,
            { opacity: 0, y: 10 }, // Initial state
            {
                opacity: 1,
                y: 0,
                stagger: {
                    each: 0.06,
                    from: "random",
                },
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gsapText.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            },
        );
    });

    return (
        <div className="animatedText" ref={gsapText}>
            {text.split("").map((char, index) => (
                <span key={index} className="animated">
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
            {flower && <span className="animated flower" style={{  }}>
                <PiFlowerFill />
            </span>}
        </div>
    );
}

export default TextAnimation;

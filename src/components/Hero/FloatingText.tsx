import React from "react";
import { useSpring, animated } from "react-spring";

interface FloatingTextProps {
    children: React.ReactNode;
    delay?: number;
    variant: string;
}

const FloatingText: React.FC<FloatingTextProps> = ({ children, delay = 0 }) => {
    const floatAnimation = useSpring({
        from: { transform: "translateY(0px)" },
        to: async (next) => {
             
            while (true) {
                await next({ transform: "translateY(-20px)" });
                await next({ transform: "translateY(0px)" });
            }
        },
        config: { duration: 2000 },
        delay: delay,
    });

    return (
        <animated.div style={{ ...floatAnimation, willChange: "transform" }}>
            {children}
        </animated.div>
    );
};

export default FloatingText;
import { useState, useRef, useEffect } from "react";

export default function useFollowPointer() {
    const ref = useRef(null); // Create a ref to store the element
    const [point, setPoint] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!ref.current) return; // Guard against unmounted components

        const handlePointerMove = (event) => {
            const { clientX, clientY } = event;
            const element = ref.current;

            if (!element) return; // Additional guard for safety

            const x = clientX - element.offsetLeft - element.offsetWidth / 2;
            const y = clientY - element.offsetTop - element.offsetHeight / 2;

            setPoint({ x, y });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref]); // Include ref in dependency array

    return { ref, point }; // Return both ref and point
}

import React, { useRef } from 'react'
import useFollowPointer from './useFollowPointer.js';
import { motion } from "framer-motion";

const FollowBall = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    console.log(x,"====>>> x")
    console.log(y,"====>>> y")
    return (
        <motion.div
            ref={ref}
            className="box w-[200px] h-[200px] bg-[#ffffff] mx-[80px] rounded-full"
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001
            }}
        />
    );
}

export default FollowBall
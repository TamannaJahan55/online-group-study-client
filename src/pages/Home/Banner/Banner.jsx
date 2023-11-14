import { motion } from "framer-motion"
import './Banner.css'

const Banner = () => {
    return (
        <div className="mb-5">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/K7PFwsv/Group-study-cover-2.jpg)' }}>
                <div className="hero-overlay bg-indigo-300 bg-opacity-90"></div>
                <div className="text-center text-neutral-content">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <motion.img animate={{ scale: 1, rotate: 355 }} src="https://i.ibb.co/9hmNr7V/online-group.jpg" className="max-w-sm mx-auto rounded-lg shadow-2xl" />
                        </div>
                        <div className="max-w-md">
                            <motion.h1 animate={{ fontSize: 50, color: '#ff2994', x: -20, y: -30 }} className="mb-5 text-5xl text-blue-700 font-extrabold">GroupLearnHub</motion.h1>
                            <motion.p initial={{y: -250}} animate={{y: -10}} transition={{delay: 0.2, type: 'spring', stiffness: 10}} className="mb-3 text-3xl text-purple-700 font-bold">Online Group Study</motion.p>
                            <p className="mb-3 mt-3 text-xl text-blue-700 font-medium">Join a Group of Learners, Where Knowledge Knows No Bounds</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { motion, useScroll } from "framer-motion"
import './Banner.css'

const Banner = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div className="mb-5">
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/K7PFwsv/Group-study-cover-2.jpg)' }}>
                <div className="hero-overlay bg-indigo-300 bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex">
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://i.ibb.co/9hmNr7V/online-group.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl text-blue-700 font-extrabold">GroupLearnHub</h1>
                                    <p className="mb-3 text-3xl text-purple-700 font-bold">Online Group Study</p>
                                    <p className="mb-3 mt-3 text-xl text-blue-700 font-medium">Join a Group of Learners, Where Knowledge Knows No Bounds</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { motion } from "framer-motion"

const FeatureCard = ({ feature }) => {

    const { id, topic_name, topic_img } = feature;

    return (
        <div>
            <motion.div animate={{
                scale: [1, 2, 2, 1, 1],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }} 
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                delay: 1
            }} 
            className="border-primary-content w-80 bg-slate-300">
                <figure>
                    <img src={topic_img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{topic_name}</h2>
                </div>
            </motion.div>
        </div>
    );
};

export default FeatureCard;
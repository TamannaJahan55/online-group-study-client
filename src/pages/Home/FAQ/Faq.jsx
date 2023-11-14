import { motion } from "framer-motion"

const Faq = () => {
    return (
        <div className="bg-cyan-400">
            <div className="lg:mx-60 my-5">
                <h2 className="text-5xl font-bold text-center text-blue-700 mb-5">FAQ</h2>
                <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <div>
                        <img className="items-center mx-auto" src="https://i.ibb.co/KD090tN/online-assign-6.png" alt="" />
                    </div>
                    <div className="collapse collapse-arrow bg-slate-300">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Q-1: How can you create a study group on the platform?
                        </div>
                        <div className="collapse-content">
                            <p>A: Creating a study group is simple! After logging into your account, navigate to the "Groups" section. Click on the "Create Group" button, and you will be prompted to provide a group name, description, and set privacy settings. Once your group is created, you can invite friends or fellow students to join by sharing the group link.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-slate-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q-2: Can you schedule virtual study sessions within your group?
                        </div>
                        <div className="collapse-content">
                            <p>A: Absolutely! The platform offers a scheduling feature for virtual study sessions. Inside your study group, go to the "Events" tab and click on "Schedule New Event". Set the date, time, and specify whether it is a virtual or physical meetup. Members of your group will receive notifications about the scheduled session.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-slate-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q-3: How can you collaborate on documents and share resources with your study group?
                        </div>
                        <div className="collapse-content">
                            <p>A: Collaborating on documents and sharing resources is a breeze. Within your study group, navigate to the "Files" section. Here, you can upload documents, presentations, and other study materials. The platform also supports real-time collaborative editing for documents, allowing group members to work together seamlessly.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Faq;
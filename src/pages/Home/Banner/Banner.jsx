

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/K7PFwsv/Group-study-cover-2.jpg)' }}>
                <div className="hero-overlay bg-blue-200 bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex-col">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-blue-700 font-extrabold">GroupLearnHub</h1>
                            <p className="mb-3 text-3xl text-purple-700 font-bold">Online Group Study</p>
                            <p className="mb-3 mt-3 text-2xl text-blue-700 font-medium">Join a Group of Learners, Where Knowledge Knows No Bounds</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
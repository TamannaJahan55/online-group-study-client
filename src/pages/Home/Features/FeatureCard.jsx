

const FeatureCard = ({ feature }) => {

    const { id, topic_name, topic_img } = feature;

    return (
        <div>
            <div className="border-primary-content w-96 bg-slate-300">
                <figure className="px-10 pt-10">
                    <img src={topic_img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{topic_name}</h2>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;


const AssignmentsCard = ({assignment}) => {

    const {title, imgURL, due_date} = assignment;
    return (
        <div className="card w-96 bg-gray-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={imgURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{due_date}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsCard;
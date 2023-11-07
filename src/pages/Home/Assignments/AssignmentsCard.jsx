import { Link } from "react-router-dom";
import { GrDocumentUpdate } from 'react-icons/gr';
import { FcViewDetails } from 'react-icons/fc';


const AssignmentsCard = ({assignment}) => {

    const {_id, title, imgURL, due_date, user_email} = assignment;
    return (
        <div className="card w-96 bg-gray-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={imgURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{due_date}</p>
                <p>{user_email}</p>
                <div className="card-actions justify-end">
                            <div className="join">
                                <Link to={`/assignmentDetails/${_id}`}>
                                    <button className="btn bg-blue-500 join-item"><span><FcViewDetails></FcViewDetails></span>View</button>
                                </Link>
                                <Link to=''>
                                    <button className="btn bg-lime-500 join-item"><span><GrDocumentUpdate></GrDocumentUpdate></span>Update</button>
                                </Link>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default AssignmentsCard;
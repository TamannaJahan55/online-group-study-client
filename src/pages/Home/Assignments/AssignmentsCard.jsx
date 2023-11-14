import { Link } from "react-router-dom";
import { GrDocumentUpdate } from 'react-icons/gr';
import { FcViewDetails } from 'react-icons/fc';
import { useContext} from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AssignmentsCard = ({ assignment }) => {

    const {user} = useContext(AuthContext);
    console.log(user);

    const { _id, title, imgURL, assignment_difficulty_level, user_email } = assignment;

    return (
        <div className="card w-80 h-96 bg-gray-300 shadow-xl shadow-purple-300 rounded-none">
            <figure className="px-10 pt-10">
                <img src={imgURL} alt="Shoes" className="h-40" />
            </figure>
            <div className="card-body h-56 items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{assignment_difficulty_level}</p>
                <p>{user_email}</p>
                <div className="card-actions justify-end">
                    <div className="join">
                        <Link to={`/assignmentDetails/${_id}`}>
                            <button className="btn bg-blue-500 join-item"><span><FcViewDetails></FcViewDetails></span>View</button>
                        </Link>
                       
                       <Link  to={`/updateAssignment/${_id}`}>
                            <button className="btn bg-lime-500 join-item"><span><GrDocumentUpdate></GrDocumentUpdate></span>Update</button>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsCard;
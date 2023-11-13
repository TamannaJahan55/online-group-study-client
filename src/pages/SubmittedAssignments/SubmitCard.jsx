import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiTwotoneDelete } from 'react-icons/ai';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SubmitCard = ({ submit, handleDelete, handleGivingMarks, handlePending, modalShow }) => {

    const { user } = useContext(AuthContext);

    const [startDate, setStartDate] = useState(new Date());


    const { _id, title, imgURL, pdf_link, note_text, marks, due_date, status, user_email, examinee_name } = submit;
    console.log(_id)


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn bg-orange-400 btn-sm"><span><AiTwotoneDelete className="text-white"></AiTwotoneDelete></span></button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-16 h-16">
                        <img src={imgURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>{title}</td>
            <td><a href={pdf_link}>Preview pdf</a></td>
            <td>{examinee_name}</td>
            <td>{user_email}</td>
            <td><DatePicker className="text-center" selected={startDate} onChange={(due_date) => setStartDate(due_date)} /></td>
            <td>{marks}</td>
            <td>
               {status==="completed" ? <span className="font-bold text-primary">Completed</span> :
                <button className="btn btn-ghost btn-sm normal-case">{status}</button>}
            </td>
            <th>
                <Link to={`/updateSubmit/${_id}`}>
                    <button className="btn btn-ghost btn-sm bg-purple-500 text-white normal-case">Give Marks</button>
                </Link>
            </th>
        </tr>
    );
};

export default SubmitCard;
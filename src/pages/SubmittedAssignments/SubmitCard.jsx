import { useContext, useState } from "react";
import { AiTwotoneDelete } from 'react-icons/ai';
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const SubmitCard = ({ submit, handleDelete}) => {

    const { user } = useContext(AuthContext);


    const { _id, title, imgURL, pdf_link, note_text, marks, due_date, status, user_email, examinee_name } = submit;
    console.log(_id)


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn bg-red-600 btn-sm"><span><AiTwotoneDelete className="text-white"></AiTwotoneDelete></span></button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-16 h-16">
                        <img src={imgURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>{title}</td>
            <td className="text-blue-800 font-bold link-hover"><a href={pdf_link}>Preview pdf</a></td>
            <td>{examinee_name}</td>
            <td>{user_email}</td>
            <td className="w-full">{due_date}</td>
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
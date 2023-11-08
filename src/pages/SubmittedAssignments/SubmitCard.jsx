import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SubmitCard = ({ submit }) => {

    const [startDate, setStartDate] = useState(new Date());

    const { title, imgURL, pdf_link, marks, due_date, user_email, examinee_name } = submit;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-16 h-16">
                        <img src={imgURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>{title}</td>
            <td>{pdf_link}</td>
            <td>{examinee_name}</td>
            <td>{user_email}</td>
            <p><DatePicker className="text-center w-[100%] p-1 mt-10" selected={startDate} onChange={(due_date) => setStartDate(due_date)} /></p>
            <td>{marks}</td>
            <th>
                <button className="btn btn-ghost btn-sm bg-purple-500 normal-case text-white">Give Marks</button>
            </th>
        </tr>
    );
};

export default SubmitCard;
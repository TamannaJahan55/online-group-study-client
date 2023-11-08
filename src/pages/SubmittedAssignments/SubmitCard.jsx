import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiTwotoneDelete } from 'react-icons/ai';
import { AuthContext } from "../../providers/AuthProvider";

const SubmitCard = ({ submit, handleDelete }) => {

    const { user } = useContext(AuthContext);

    const [startDate, setStartDate] = useState(new Date());
    const [modalShow, setModalShow] = useState(false);

    const { _id, title, imgURL, pdf_link, note_text, marks, due_date, user_email, examinee_name } = submit;

    useEffect(() => {
        setModalShow(true)
    }, [modalShow])


    const handleGivingMarks = event => {
        event.preventDefault();
        const form = event.target;
        const pdf_link = form.pdf_link.value;
        const note_text = form.note_text.value;
        const obtained_marks = form.obtained_marks.value;
        const user_email = user?.email;
        const user_name = user?.displayName;
        console.log(pdf_link, note_text);
        setModalShow(false);
        const submitMarks = {
            pdf_link,
            note_text,
            obtained_marks,
            user_email,
            examinee_name: user_name
        }
        console.log(submitMarks);
    }


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
            <td><a href={pdf_link}>View pdf</a></td>
            <td>{examinee_name}</td>
            <td>{user_email}</td>
            <p><DatePicker className="text-center w-[100%] p-1 mt-10" selected={startDate} onChange={(due_date) => setStartDate(due_date)} /></p>
            <td>{marks}</td>
            <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button disabled={user_email !== user?.email} className="btn btn-ghost btn-sm bg-purple-500 normal-case text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Give Marks</button>
                {
                    modalShow &&

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-gray-300">
                            <h3 className="font-bold text-lg">Submit Assignment</h3>
                            <form onSubmit={handleGivingMarks} method="dialog" className="mx-auto w-2/3 p-4 bg-white border rounded-md">
                                {/* if there is a button in form, it will close the modal */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PDF Link</span>
                                    </label>
                                    <input type=".pdf" name='pdf_link' placeholder="PDF Link" className="input input-bordered bg-blue-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Note Text</span>
                                    </label>
                                    <textarea name="note_text" className="textarea textarea-bordered bg-blue-200" placeholder="Note Text"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Obtained Marks</span>
                                    </label>
                                    <input type="text" name='obtained_marks' placeholder="Obtained Marks" className="input input-bordered bg-blue-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feedback</span>
                                    </label>
                                    <input type="text" name='feedback' placeholder="Feedback" className="input input-bordered bg-blue-200" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </dialog>}
            </th>
        </tr>
    );
};

export default SubmitCard;
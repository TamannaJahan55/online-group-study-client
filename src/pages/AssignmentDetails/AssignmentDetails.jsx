import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AssignmentDetails = () => {

    const { user } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);

    const assignmentDetails = useLoaderData();
    console.log(assignmentDetails);

    const { title, imgURL, description, thumbnail, assignment_difficulty_level, marks, due_date, user_email, user_name } = assignmentDetails;

    useEffect(() => {
        setModalShow(true)
    }, [modalShow])


    const handleSubmitAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const pdf_link = form.pdf_link.value;
        const note_text = form.note_text.value;
        const status = form.status.value;
        setModalShow(false);
        const submitAssignment = {
            pdf_link,
            note_text,
            status,
            title,
            imgURL,
            marks,
            due_date,
            user_email,
            examinee_name: user_name
        }
        console.log(submitAssignment);

        if(user_email !== user?.email){
            return  Swal.fire({
                title: 'Error!',
                text: 'You are unauthorized',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }

        fetch('https://online-group-study-server-swart.vercel.app/submittedAssignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId && user_email === user?.email) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment submitted successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });



    }


    return (
        <div className="bg-gray-400">
            <div className="md:p-14 lg:p-24">
                <h2 className="text-3xl text-center text-blue-700 font-extrabold mb-4">Assignment Details</h2>
                <div>
                    <img className="items-center mx-auto" src="https://i.ibb.co/Khtz6XF/online-assign.jpg" alt="" />
                </div>
                <div className="p-10 bg-blue-200 bg-opacity-40 border border-blue-700 rounded">
                    <div className="max-w-6xl mx-10 md:mx-40 lg:mx-40 ">
                        <div className="box-content rounded-lg w-full bg-blue-300 shadow-xl shadow-violet-300">
                            <figure className="px-20 pt-10">
                                <img src={imgURL} alt="Shoes" className="w-full rounded-xl border border-blue-700" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
                                <img className="rounded-full" src={thumbnail} alt="" />
                                <p className="text-base font-normal">Short Description: {description}</p>
                                <p className="text-xl font-medium text-lime-800">Marks: {marks}</p>
                                <p className="text-xl font-medium text-blue-600">Due Date: {due_date}</p>
                                <p className="text-xl font-medium text-amber-600">Assignment Difficulty Level: {assignment_difficulty_level}</p>
                                <p className="text-lg font-medium">User: {user_email}</p>
                                <div className="card-actions">

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button  className="btn btn-primary text-white normal-case" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
                                    {
                                        modalShow &&

                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box bg-gray-300">
                                                <h3 className="font-bold text-lg">Submit Assignment</h3>
                                                <form onSubmit={handleSubmitAssignment} method="dialog" className="mx-auto w-2/3 p-4 bg-white border rounded-md">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">PDF Link</span>
                                                        </label>
                                                        <input type="file" name='pdf_link' placeholder="PDF Link" className="input input-bordered bg-blue-200" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Note Text</span>
                                                        </label>
                                                        <textarea name="note_text" className="textarea textarea-bordered bg-blue-200" placeholder="Note Text"></textarea>
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Status</span>
                                                        </label>
                                                        <input type="text" name='status' placeholder="Status" className="input input-bordered bg-blue-200" />

                                                    </div>
                                                    <div className="form-control mt-6">
                                                        <input className="btn btn-primary" type="submit" value="Submit" />
                                                    </div>
                                                </form>
                                            </div>
                                        </dialog>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;
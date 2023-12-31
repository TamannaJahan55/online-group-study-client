import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdateAssignments = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const [startDate, setStartDate] = useState(new Date());

    const assignmentDetails = useLoaderData();
    console.log(assignmentDetails);

    const { _id, title, imgURL, description, thumbnail, assignment_difficulty_level, marks, due_date, user_email, user_name } = assignmentDetails;

    const handleUpdateAssignment = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const imgURL = form.imgURL.value;
        const description = form.description.value;
        const assignment_difficulty_level = form.assignment_difficulty_level.value;
        const thumbnail = form.thumbnail.value;
        const marks = form.marks.value;
        const due_date = form.due_date.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;

        const newAssignment = { title, imgURL, description, assignment_difficulty_level, thumbnail, marks, due_date, user_email, user_name }
        console.log(newAssignment);

        if(user_email !== user?.email){
            return  Swal.fire({
                title: 'Error!',
                text: 'You are unauthorized',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }


        // send data to the server
        fetch(`https://online-group-study-server-swart.vercel.app/assignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0 && user_email === user?.email) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <div className="p-24 bg-blue-100">
                <h2 className="text-5xl text-center text-primary font-extrabold mb-4">Update an Assignment</h2>
                <div>
                    <img className="items-center mx-auto" src="https://i.ibb.co/Jdq0qBk/online-assign-4.png" alt="" />
                </div>
                <div className="p-10 text-white bg-gray-400 bg-opacity-40 border border-blue-700 rounded">
                    <form onSubmit={handleUpdateAssignment}>
                        {/* title row */}
                        <div className="md:flex mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="title" defaultValue={title} className="input input-bordered w-full text-white bg-blue-400" />
                                </label>
                            </div>
                        </div>
                        {/* assignment img url */}
                        <div className="md:flex mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="imgURL" defaultValue={imgURL} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                        </div>
                        {/* description row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="description" defaultValue={description} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                        </div>
                        {/* assignment difficulty row*/}
                        <div className="md:flex mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Assignment Difficulty Level</span>
                                </label>
                                <div className="form-control">
                                    <div className="input-group">
                                        <select defaultValue={assignment_difficulty_level} name="assignment_difficulty_level" className="select select-bordered w-full bg-blue-400">
                                            <option disabled selected>Pick Level</option>
                                            <option defaultValue="easy">easy</option>
                                            <option defaultValue="medium">medium</option>
                                            <option defaultValue="hard">hard</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* thumbnail url */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Thumbnail URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="thumbnail" defaultValue={thumbnail} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                        </div>
                        {/* marks and due date row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="marks" defaultValue={marks} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <label className="input-group">
                                    <DatePicker type="date" name="due_date" defaultValue={due_date} className="text-center input input-bordered w-full bg-blue-400" selected={startDate} onChange={(due_date) => setStartDate(due_date)} />
                                </label>
                            </div>
                        </div>
                        {/* user email row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="user_email" defaultValue={user_email} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="user_name" defaultValue={user_name} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Update Assignment" className="btn btn-block bg-primary text-white normal-case" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignments;
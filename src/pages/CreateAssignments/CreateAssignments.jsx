import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAssignments = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    const [startDate, setStartDate] = useState(new Date());

    const handleCreateAssignment = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const imgURL = form.imgURL.value;
        const description = form.description.value;
        const assignment_difficulty_level = form.assignment_difficulty_level.value;
        const thumbnail = form.thumbnail.value;
        const marks = form.marks.value;
        const due_date = form.due_date.value;
        const user_email = user?.email;
        const user_name = user?.displayName;

        const newAssignment = { title, imgURL, description, assignment_difficulty_level, thumbnail, marks, due_date, user_email, user_name }
        console.log(newAssignment);

        // validation
        if(title.trim().length < 10){
            toast.error('Title should be at least 10 characters')
            return
        }else if (!/[A-Z]/.test(title)) {
            toast.error('Title should have at least one upper case character')
            return
        }else if(marks !== 100 ){
            toast.error('Assignment Marks should be calculated by 100')
            return
        }

        // send data to the server
        fetch('https://online-group-study-server-swart.vercel.app/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment created successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Fill up required fields',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div>
            <div className="p-24 bg-blue-100">
                <h2 className="text-5xl text-center text-primary font-extrabold mb-4">Create an Assignment</h2>
                <div>
                    <img className="items-center mx-auto" src="https://i.ibb.co/KD090tN/online-assign-6.png" alt="" />
                </div>
                <div className="p-10 text-white bg-gray-400 bg-opacity-40 border border-blue-700 rounded">
                    <form onSubmit={handleCreateAssignment}>
                        {/* title row */}
                        <div className="md:flex mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="title" required placeholder="Title" className="input input-bordered w-full text-white bg-blue-400" />
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
                                    <input type="text" name="imgURL" required placeholder="Image URL" className="input input-bordered w-full bg-blue-400" />
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
                                    <input type="text" name="description" required placeholder="Description" className="input input-bordered w-full bg-blue-400" />
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
                                        <select name="assignment_difficulty_level" required className="select select-bordered w-full bg-blue-400">
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
                                    <input type="text" name="thumbnail" required placeholder="Thumbnail URL" className="input input-bordered w-full bg-blue-400" />
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
                                    <input type="text" name="marks" required placeholder="Marks" className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <label className="input-group">
                                    <DatePicker type="date" name="due_date" required placeholder="Due Date" className="text-center input input-bordered w-full bg-blue-400" selected={startDate} onChange={(due_date) => setStartDate(due_date)} />
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
                                    <input type="text" name="user_email" required defaultValue={user?.email} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="user_name" required defaultValue={user?.displayName} className="input input-bordered w-full bg-blue-400" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Create Assignment" className="btn btn-block bg-primary text-white normal-case" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;
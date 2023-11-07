import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {

    const assignmentDetails = useLoaderData();
    console.log(assignmentDetails);

    const {title, imgURL, description, thumbnail, assignment_difficulty_level, marks, due_date, user_email} = assignmentDetails;

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

                                    <button  className="btn text-white normal-case bg-primary">Take Assignment</button>

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
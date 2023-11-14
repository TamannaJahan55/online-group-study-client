import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SubmitCard from "./SubmitCard";
import Swal from "sweetalert2";


const SubmittedAssignments = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [submitAssignments, setSubmitAssignments] = useState([]);

    useEffect(() => {
        fetch('https://online-group-study-server-swart.vercel.app/submittedAssignments')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSubmitAssignments(data)
            })
    }, [])

   const { _id, title, imgURL, pdf_link, note_text, marks, due_date, status, user_email, examinee_name } = submitAssignments;


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://online-group-study-server-swart.vercel.app/submittedAssignments/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0 && user_email === user?.email) {
                            Swal.fire(
                                'Deleted!',
                                'Your submitted assignment has been deleted successfully.',
                                'success'
                            )
                            const remaining = submitAssignments.filter(submit => submit._id !== id);
                            setSubmitAssignments(remaining);
                        }else {
                            Swal.fire({
                                title: 'Error!',
                                text: 'You are unauthorized',
                                icon: 'error',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            }
        })
    }


    return (
        <div className="p-10 bg-gray-200">
            <h2 className="text-5xl text-center text-primary font-extrabold mb-4">Submitted Assignments</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-blue-600 text-white text-center">
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>PDF Link</th>
                            <th>Examinee Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Assignment Marks</th>
                            <th>Status</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            submitAssignments.map(submit => <SubmitCard
                                key={submit._id}
                                submit={submit}
                                handleDelete={handleDelete}
                            ></SubmitCard>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default SubmittedAssignments;
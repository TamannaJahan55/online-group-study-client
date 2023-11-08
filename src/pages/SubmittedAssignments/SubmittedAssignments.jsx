import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SubmitCard from "./SubmitCard";


const SubmittedAssignments = () => {
    const { user } = useContext(AuthContext);
    const [submitAssignments, setSubmitAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/submittedAssignments')
            .then(res => res.json())
            .then(data => setSubmitAssignments(data))
    }, [])
    return (
        <div className="p-10 bg-gray-200">
            <h2 className="text-5xl text-center text-primary font-extrabold mb-4">Submitted Assignments</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-blue-600 text-white text-center">
                            <th>
                                
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>PDF Link</th>
                            <th>Examinee Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Assignment Marks</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            submitAssignments.map(submit => <SubmitCard
                            key={submit._id}
                            submit={submit}
                            ></SubmitCard>)
                        }
                        
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default SubmittedAssignments;
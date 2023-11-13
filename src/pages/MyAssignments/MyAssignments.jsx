import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyCard from "./MyCard";


const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [myAssignments, setMyAssignments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/submittedAssignment/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyAssignments(data)})
    }, [user?.email])

    return (
        <div className="p-10 bg-violet-200">
            <h2 className="text-5xl text-center text-primary font-extrabold mb-4">My Assignments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full items-center mx-auto">
                    {/* head */}
                    <thead>
                        <tr className="bg-blue-600 text-white text-center">
                           
                            <th>Image</th>
                            <th>Title</th>
                            <th>PDF Link</th>
                            <th>Examinee Name</th>
                            <th>Email</th>
                            <th>Assignment Marks</th>
                            <th>Status</th>
                            <th>Obtained Marks</th>
                            <th>Feedback</th>
                           
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            myAssignments.map(card => <MyCard
                            key={card._id}
                            card={card}
                            ></MyCard>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAssignments;
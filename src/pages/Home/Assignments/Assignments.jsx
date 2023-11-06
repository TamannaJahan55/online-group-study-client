import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('assignments.json')
        .then(res => res.json())
        .then(data => setAssignments(data))
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-5xl text-center font-bold text-blue-700 mb-4">Assignments</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    assignments.map(assignment => <AssignmentsCard key={assignment.id} assignment={assignment}></AssignmentsCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;
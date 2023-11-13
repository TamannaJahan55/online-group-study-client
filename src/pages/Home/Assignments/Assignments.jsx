import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";


const Assignments = ({ assignment_difficulty_level }) => {

    const [assignments, setAssignments] = useState([]);
    // const [selectedDifficulty, setSelectedDifficulty] = useState(assignments);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/assignments/difficulty/${assignment_difficulty_level}`)
    //         .then(res => res.json())
    //         .then(data => setSelectedDifficulty(data))
    // }, [assignment_difficulty_level])


    const filteredAssignments = filter === 'all' ? assignments : assignments.filter(assignment => assignment.assignment_difficulty_level === filter);
    const handleAllAssignments = filter => {
        setFilter(filter)
        // if (filter === 'all') {
        //     setSelectedDifficulty(assignments);
        // }
        // else if (filter === 'hard') {
        //     const hardAssignments = assignments.filter(assignment => assignment.assignment_difficulty_level === 'hard');
        //     setSelectedDifficulty(hardAssignments);
        // }
        // else if (filter === 'medium') {
        //     const mediumAssignments = assignments.filter(assignment => assignment.assignment_difficulty_level === 'medium');
        //     setSelectedDifficulty(mediumAssignments);
        // }
        // else if (filter === 'easy') {
        //     const easyAssignments = assignments.filter(assignment => assignment.assignment_difficulty_level === 'easy');
        //     setSelectedDifficulty(easyAssignments);
        // }

    }

    return (
        <div className="bg-cyan-200">
            <div className="mx-10 my-5">
                <div>
                    <h3 className="text-5xl text-center font-extrabold text-primary mb-4">Assignments</h3>
                </div>
                <details className="dropdown mb-5">
                    <summary className="m-1 btn normal-case bg-blue-700 text-white text-center">Filter by Assignment Difficulty Level</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleAllAssignments('all')}><a>All</a></li>
                        <li onClick={() => handleAllAssignments('hard')}><a>Hard</a></li>
                        <li onClick={() => handleAllAssignments('medium')}><a>Medium</a></li>
                        <li onClick={() => handleAllAssignments('easy')}><a>Easy</a></li>
                    </ul>
                </details>

                <ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                        {
                            filteredAssignments?.map(assignment => <li key={assignment._id}> <span>
                                <AssignmentsCard
                                    assignment={assignment}
                                ></AssignmentsCard>
                            </span> </li>)
                        }


                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Assignments;
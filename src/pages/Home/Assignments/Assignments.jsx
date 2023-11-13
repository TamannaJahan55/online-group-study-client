import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";
import { useLoaderData } from "react-router-dom";
import './AssignmentPage.css'
import {motion} from 'framer-motion';


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const { count } = useLoaderData();
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/assignments?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [currentPage, itemsPerPage]);

    const filteredAssignments = filter === 'all' ? assignments : assignments.filter(assignment => assignment.assignment_difficulty_level === filter);
    const handleAllAssignments = filter => {
        setFilter(filter)
    }

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value)
        console.log(val)
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1);
        }
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
                <div className="mt-5">
                    <div className="pagination">
                        <p>Current Page: {currentPage}</p>
                        <button onClick={handlePrevPage}>Prev</button>
                        {
                            pages.map(page => <button 
                                onClick={() => setCurrentPage(page)}
                                key={page} 
                                className={currentPage === page ? 'selected' : undefined}
                                >{page}</button>)
                        }
                        <button onClick={handleNextPage}>Next</button>
                        <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignments;
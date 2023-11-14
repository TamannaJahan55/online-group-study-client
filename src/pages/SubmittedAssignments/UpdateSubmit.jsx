import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Document, Page, pdfjs } from 'react-pdf';
import Swal from "sweetalert2";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const UpdateSubmit = () => {

    const { user } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);

    const updateSubmitAssignments = useLoaderData();
    console.log(updateSubmitAssignments);

    const { _id, title, imgURL, pdf_link, note_text, marks, due_date, status, user_email, examinee_name } = updateSubmitAssignments;

    useEffect(() => {
        setModalShow(true)
    }, [modalShow])

    const handleGivingMarks = (e, id) => {
        console.log(id)
        e.preventDefault();

        const form = e.target;

        const obtained_marks = form.obtained_marks.value;
        const feedback = form.feedback.value;
        setModalShow(false);
        const completedAssignment = {

            obtained_marks,
            feedback,
        }
        console.log(completedAssignment);

        fetch(`http://localhost:5000/submittedAssignments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(completedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Giving Marks to assignment successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }

    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setPageNumber(1); // Reset page number
    };

    return (
        <div>
            <form onSubmit={(e) => handleGivingMarks(e, _id)} method="dialog" className="mx-auto w-2/3 p-4 bg-white border rounded-md">
                {/* if there is a button in form, it will close the modal */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PDF Link</span>
                    </label>
                    <input type="file" name='pdf_link' accept=".pdf" onChange={handleFileChange} placeholder={pdf_link} className="input input-bordered bg-blue-200" />

                    {file && (
                        <div>
                            <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                            <p>
                                Page {pageNumber} of {numPages}
                            </p>
                            <button onClick={() => setPageNumber(pageNumber - 1)}>Previous Page</button>
                            <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
                        </div>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Note Text</span>
                    </label>
                    <textarea name="note_text" className="textarea textarea-bordered bg-blue-200" defaultValue={note_text}></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Obtained Marks</span>
                    </label>
                    <input type="text" name='obtained_marks' placeholder="Obtained Marks" className="input input-bordered bg-blue-200" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback</span>
                    </label>
                    <input type="text" name='feedback' placeholder="Feedback" className="input input-bordered bg-blue-200" />

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateSubmit;
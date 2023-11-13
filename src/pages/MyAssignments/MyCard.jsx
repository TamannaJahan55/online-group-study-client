

const MyCard = ({ card }) => {

    const { title, imgURL, pdf_link, examinee_name, user_email, status, marks, obtained_marks, feedback } = card;
    return (
      
            <tr>
                <td>
               
                    <div className="avatar">
                        <div className="rounded w-16 h-16">
                             <img src={imgURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </td>
                <td>{title}</td>
                <td><a href={pdf_link}>View pdf</a></td>
                <td>{examinee_name}</td>
                <td>{user_email}</td>
                <td>{marks}</td>
                <td>{obtained_marks}</td>
                <td> {status==="completed" ? <span className="font-bold text-primary">Completed</span> :
                <button className="btn btn-ghost btn-sm normal-case">{status}</button>}</td>
                <td>{feedback}</td>
            </tr>
        
    );
};

export default MyCard;
import errorPhoto from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div>
             <div>
                <img className='w-auto m-auto text-center' src={errorPhoto} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;
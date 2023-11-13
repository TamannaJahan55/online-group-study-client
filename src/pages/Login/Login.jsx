import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link,  useLocation,  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {

    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // create new user
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // const user = {email}
                toast.success('User logged in successfully', {
                    position: "top-center",
                    theme: "colored"
                });
                form.reset();
                navigate(location?.state? location?.state : '/')
                // get access token
                 

            })
            .catch(error => {
                toast.error('Verify your email and password', error.message);
            })
    }

    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success('User logged in successfully', {
                    position: "top-center",
                    theme: "colored"
                });
                navigate('/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-gray-300">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src='https://i.ibb.co/7vtwcPB/login.jpg' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
                    <div className="card-body">
                        <h1 className="text-3xl text-center text-blue-600 font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="w-auto m-auto text-center my-6">
                            <button onClick={() => handleSocialLogin(googleLogin)} className="btn text-white normal-case bg-primary mr-4"><span><FaGoogle></FaGoogle></span>Google</button>
                            <button onClick={() => handleSocialLogin(githubLogin)} className="btn text-white normal-case bg-primary ml-4"><span><FaGithub></FaGithub></span>Github</button>
                        </div>
                    </div>
                    <p className='my-4 text-center'>New to GroupLearnHub <Link className='text-blue-600 font-bold' to="/register">Register</Link> </p>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;
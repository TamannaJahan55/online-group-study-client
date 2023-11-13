import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Register = () => {

    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const accepted = e.currentTarget.terms.checked
        console.log(name, photo, email, password, accepted);

        // validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password should have at least one upper case character')
        }
        else if (!/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/.test(password)) {
            toast.error('Password should have at least one special character')
            return
        }
        else if (!accepted) {
            toast.error('Please accept our terms and conditions')
            return
        }


        // creating a new user
        createUser(email, password)
            .then(result => {
                console.log(result)
                handleUpdateProfile(name, photo)
                    .then(result => {
                        console.log(result)
                        toast.success('User created successfully', {
                            position: "top-center",
                            theme: "colored"
                        })
                        navigate('/')
                    })
            })
            .catch(error => {
                toast.error(error.message)
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
                        <h1 className="text-3xl text-center text-blue-600 font-bold">Register</h1>
                        <form onSubmit={handleRegister} className="card-body w-full mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        required
                                        placeholder="Password"
                                        className="input input-bordered w-full" />
                                    <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }

                                    </span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-lg font-bold text-white normal-case bg-primary">Register</button>
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    let errorText;
    if (error) {
        errorText = <p className='text-danger'>{error?.message}</p>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
    };
    const navigateRegister = () => {
        navigate("/register");
    };
    const resetPassword = async (event) => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else {
            toast('Please Enter Your Email');
        }
    };


    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center'>Please Login Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success w-50 mx-auto d-block mb-2 fs-5" type="submit">
                    Login
                </Button>
            </Form>
            {errorText}
            <p className='my-3'>New to <span className='text-success fs-5'>Autos Mart</span> ? <Link to="/register" onClick={navigateRegister} className='text-primary text-decoration-none'>Please Register</Link> </p>
            <p className='my-3'>Forget password? <button onClick={resetPassword} className='btn btn-link text-primary text-decoration-none'>Reset password</button> </p>
            {/* <SocialLogin></SocialLogin> */}


        </div>
    );
};

export default Login;
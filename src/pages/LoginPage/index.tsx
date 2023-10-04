import React, {useState, useRef, useEffect, useCallback} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Components/common-components/Input';
import Button from '../../Components/common-components/Button';
import './LoginPage.css';
import loginRequest from '../../api/authApi';
import Header from '../../Components/common-components/Header';
import Footer from '../../Components/common-components/Footer';

interface IFormValues {
    email: string;
    password: string;
}

const initialFormValue = {
    email: '',
    password: '',
}

const LoginPage = () => {
    const [formValues, setFormValues] = useState(initialFormValue);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const navigate = useNavigate();

    

    const onChangeFormValues = useCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevState => ({ ...prevState, [e.target.id]: e.target.value}))
    }, []);

    useEffect( () => {
        emailRef.current?.focus();
    }, []);

    const onFormSubmit = useCallback ( async (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if(e.key === 'Enter'){
            try{
                const response = await loginRequest(formValues);
                navigate('/home');
            } catch (e){
                console.error(e);
            } finally{
                setFormValues(initialFormValue);
                emailRef.current?.focus();
            }
        }
    }, [formValues]);

    const onEmailEnter = useCallback ((e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            passwordRef.current?.focus();
        }
    }, []);

    const onPasswordEnter = useCallback ((e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            buttonRef.current?.focus();
        }
    }, []);

    const onClickSubmit = () => {
        navigate('/home');
    }

    return (
        <>
            <div className="container">
                <Header/>
                <div className="login-wrap">
                    <div className="login-navigation">
                        sign in sign up
                    </div>
                    <div className="login">
                        <form >
                        <Input onChange={onChangeFormValues} value={formValues.email} fieldName='email' ref={emailRef} onKeyDown={onEmailEnter} />
                        <Input onChange={onChangeFormValues} value={formValues.password} fieldName='password' ref={passwordRef} onKeyDown={onPasswordEnter} />
                        </form>
                        <Link to='/home'>Home page</Link>
                    </div>
                    <Button className='btn-sign-in' ref={buttonRef} onKeyDown={onFormSubmit} onClick={onClickSubmit}>SIGN IN</Button>
                </div>
                <Footer/>
            </div>
        </>
    )
};

export default LoginPage;
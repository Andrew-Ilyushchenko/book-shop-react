import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Components/common-components/Input';
import Button from '../../Components/common-components/Button';

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

    

    const onChangeFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevState => ({ ...prevState, [e.target.id]: e.target.value}))
    };

    useEffect( () => {
        emailRef.current?.focus();
    }, [])

    const onFormSubmit = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if(e.key === 'Enter'){
            setFormValues(initialFormValue);
            emailRef.current?.focus();
        }
    }

    const onEmailEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            passwordRef.current?.focus();
        }
    }

    const onPasswordEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            buttonRef.current?.focus();
        }
    }

    return (
        <>
            <div>LoginPage</div>
            <form >
                <Input onChange={onChangeFormValues} value={formValues.email} fieldName='email' ref={emailRef} onKeyDown={onEmailEnter} />
                <Input onChange={onChangeFormValues} value={formValues.password} fieldName='password' ref={passwordRef} onKeyDown={onPasswordEnter} />
                <Button ref={buttonRef} onKeyDown={onFormSubmit} >Login</Button>
            </form>
            <Link to='/home'>Home page</Link>
        </>
    )
};

export default LoginPage;
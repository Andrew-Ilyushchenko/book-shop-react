import React, { useCallback, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import './InputSubscribe.css'

const initialFormValue = {
    subscribe: '',
}

const InputSubscribe = () => {
    const [formValues, setFormValues] = useState(initialFormValue);

    const onChangeFormValues = useCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevState => ({ ...prevState, [e.target.id]: e.target.value}))
    }, []);

    const onFormSubmit = useCallback ( async (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if(e.key === 'Enter'){
            setFormValues(initialFormValue);
        }
    }, [formValues]);

    const clearInput = () => {
        setFormValues(initialFormValue);
    }

    return(
        <>
            <div className="subscribe">
                <div className="subscribe-wrapper">
                        
                    <h2 className="subscribe-main-title">
                        Subscribe to Newsletter
                    </h2>

                    <p className="subtitle subtitle-subscribe">Be the first to 
                        know about new IT books, upcoming releases, 
                        exclusive offers and more.
                    </p>

                    <div className="input-btn-wrap">
                        <Input onChange={onChangeFormValues} value={formValues.subscribe} fieldName='subscribe' className='input-subscribe'/>
                        <Button onKeyDown={onFormSubmit} onClick={clearInput} className='btn-subscribe'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputSubscribe;
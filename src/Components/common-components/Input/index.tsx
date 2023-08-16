import React from 'react';

interface IInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fieldName: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ( {value, onChange, fieldName, onKeyDown} : IInputProps, ref: React.Ref<HTMLInputElement> ) => {
    return (
        <input ref={ref} value={value} onChange={onChange} id={fieldName} onKeyDown={onKeyDown} />
    )
};

export default React.forwardRef(Input);
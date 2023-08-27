import React, {memo} from 'react';

interface IInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fieldName: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input = ( {value, onChange, fieldName, onKeyDown, className} : IInputProps, ref: React.Ref<HTMLInputElement> ) => {
    return (
        <input ref={ref} value={value} onChange={onChange} id={fieldName} onKeyDown={onKeyDown} className={className} />
    )
};

export default memo(React.forwardRef(Input));
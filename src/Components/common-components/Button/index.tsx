import React from 'react'

interface IButtonProps{
    children: React.ReactNode;
    onClick?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, onKeyDown }: IButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick?.();
    }
    return (
        <button ref={ref} onClick={onButtonClick} onKeyDown={onKeyDown} >{children}</button>
    )
};

export default React.forwardRef(Button);
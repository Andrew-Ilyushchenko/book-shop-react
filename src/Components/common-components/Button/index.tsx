import React from 'react'

interface IButtonProps{
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: IButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick();
    }
    return (
        <button ref={ref} onClick={onButtonClick}>{children}</button>
    )
};

export default React.forwardRef(Button);
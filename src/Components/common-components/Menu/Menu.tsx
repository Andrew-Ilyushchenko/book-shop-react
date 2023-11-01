import React from "react";

interface IMenuProps {
    header: string;
    items: [];
}

const Menu = ({ header, items }: IMenuProps)  => {
    return (
        <div className="menu">
            <div className="blur" />
            <div className="menu-content">
            
            </div>

            </div>
    )
}

export default Menu;
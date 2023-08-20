import React from 'react'

interface IListItemProps {
    children: React.ReactNode;
}

const ListItem = ({ children }: IListItemProps) => {
    return(
        <li>{children}</li>
    )
}

export default ListItem;
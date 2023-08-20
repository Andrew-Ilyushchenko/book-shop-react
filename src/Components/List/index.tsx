import React from 'react';
import ListItem from './ListItem';
import { title } from 'process';

interface IListProps{
    list: any[];
}

interface IListItemProps{
  title?: string;
  image?: string;

}

const List = ({ list } : IListProps) => (
  <ul>
    {list.map((book) => (
      <>
      <ListItem1 key={book.isbn} title={book.title} image={book.image}/>
      </>
    ))}
  </ul>
);

const ListItem1 = ({ title, image } : IListItemProps) => 
    <li key={title}>
      <h3>{title}</h3>
      <img src={image} alt="#" />    
    </li>
;

export default List;
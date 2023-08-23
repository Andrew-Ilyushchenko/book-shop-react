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
  <ul className='book-list'>
    {list.map((book) => (
      <>
      <ListItem1 key={book.isbn} title={book.title} image={book.image}/>
      </>
    ))}
  </ul>
);

const ListItem1 = ({ title, image } : IListItemProps) => 
    <li className='book-list-item' key={title}>
      <div className="book-wrap-img">
        <img className='book-img' src={image} alt="#" />   
      </div>
      <h3 className='book-name'>{title}</h3> 
    </li>
;

export default List;
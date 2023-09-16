import React from 'react';
import ListItem from './ListItem';
import { title } from 'process';
import Button from '../common-components/Button';

interface IListProps{
    list: any[];
}

interface IListItemProps{
  title?: string;
  image?: string;
  subtitle?: string;
}

const List = ({ list } : IListProps) => (
  <ul className='book-list'>
    {list.map((book) => (
      <>
      <ListItem1 key={book.isbn} title={book.title} image={book.image} subtitle={book.subtitle}/>
      </>
    ))}
  </ul>
);

const ListItem1 = ({ title, image, subtitle } : IListItemProps) => 
    <li className='book-list-item' key={title}>
      <div className="book-wrap-img">
        <img className='book-img' src={image} alt="#" />   
      </div>
      <h3 className='book-name'>{title}</h3>
      <h4 className="book_subtitle">{subtitle}</h4> 
      <Button className='btn_add'>ADD TO CART</Button>
    </li>
;

export default List;
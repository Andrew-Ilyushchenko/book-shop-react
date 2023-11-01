import React, { useState } from 'react';
import ListItem from './ListItem';
import { title } from 'process';
import Button from '../common-components/Button';
import { useAppDispatch } from '../../redux/hooks';
import { addCart } from '../../redux/actions/cartActionCreators';
import { useSelector } from 'react-redux';

interface IListProps{
    list: any[];
}

interface IListItemProps{
  title?: string;
  image?: string;
  subtitle?: string;
  price?: number;
  id?:number | undefined;
}

const List = ({ list } : IListProps) => {
  const [counts, setCounts] = useState();
  
  const dispatch = useAppDispatch();

  const cart = useSelector((state: any) => state.cart);

  const onAdd = (id: number) => {
    dispatch(addCart(id));
  }
  return (
    <ul className='book-list'>
    {list.map((book) => (
      <>
        <ListItem1 
          key={book.isbn}
          title={book.title} 
          image={book.image} 
          subtitle={book.subtitle} 
          price={book.price} 
          id={book.isbn13} 
          onAdd={onAdd}
        />
      </>
    ))}
  </ul>
  )
};

const ListItem1 = ({ title, image, subtitle, price, id, onAdd } : IListItemProps & {onAdd:(id:number) => void}) => 
    <li className='book-list-item' key={title}>
      <div className="book-wrap-img">
        <img className='book-img' src={image} alt="#" />   
      </div>
      <h3 className='book-name'>{title}</h3>
      <h4 className="book_subtitle">{subtitle}</h4>
      <h3 className="price">{price}</h3>
      <Button className='btn_add' onClick={() => onAdd(id)}>ADD TO CART</Button>
    </li>
;

export default List;
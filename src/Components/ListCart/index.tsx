import React from 'react';
import ListItem from '../List/ListItem/index';
import { title } from 'process';
import Button from '../common-components/Button';
import { useAppDispatch } from '../../redux/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../redux/actions/cartActionCreators';

interface IListProps{
    list: any[];
}

interface IListItemProps{
  title?: string;
  image?: string;
  subtitle?: string;
  id?: number | undefined;
  price?: number;
  count?: number;
}

const ListCart = ({ list } : IListProps) => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: any) => state.cart);

  const onRemove = (id: number) => {
    dispatch(removeCart(id));
  }

  const checkId = () => {
    const items: JSX.Element[] = [];
    for (let key in list) {
      for (let key1 in cart) {
        if (list[key].isbn13 === cart[key1].id) {
          items.push(
            <ListItem1
              title={list[key].title}
              image={list[key].image}
              subtitle={list[key].subtitle}
              price={list[key].price}
              id={list[key].id}
              count={cart[key1].counts?.[cart[key1].id]}
              onRemove={() => onRemove(list[key].isbn13)}
            />
          );
        }
      }
    }
    return items;
  };
  
  return (
    <ul className="cart-list">
      {checkId()}
    </ul>
  );
};

const ListItem1 = ({ title, image, subtitle, onRemove, id, price, count} : IListItemProps & {onRemove:(id:number) => void}) => 
  <li className='cart-list-items' key={title}>
    <div className="cart-list-item">
      <div className='cart-wrap-img'>
      <img className='cart-img' src={image} alt="#" />   
    </div>
    <div className="cart-wrap-info">
      <div className="cart-text">
        <h3 className='cart-name'>{title}</h3>
        <h4 className='cart_subtitle'>{subtitle}</h4> 
      </div>
      <div className="cart-price">{price}</div>
      <div className="cart-count">{count}</div>
      <div className="btn-delete-wrap">
        { id !== undefined && <Button className='btn_delete' onClick={() => onRemove(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6569 16.2429L13.4142 12.0002L17.6569 7.75759C18.0472 7.36727 18.0472 6.7337 17.6569 6.34338C17.2665 5.95305 16.633 5.95305 16.2426 6.34338L12 10.586L7.75736 6.34338C7.36704 5.95305 6.73347 5.95305 6.34315 6.34338C5.95282 6.7337 5.95282 7.36727 6.34315 7.75759L10.5858 12.0002L6.34315 16.2429C5.95212 16.6339 5.95282 17.2668 6.34315 17.6571C6.73347 18.0474 7.36633 18.0481 7.75736 17.6571L12 13.4144L16.2426 17.6571C16.6337 18.0481 17.2665 18.0474 17.6569 17.6571C18.0472 17.2668 18.0479 16.6339 17.6569 16.2429Z" fill="#313037"/>
          </svg>
        </Button>}
      </div>
    </div>
    </div>
  </li>
  ;

export default ListCart;
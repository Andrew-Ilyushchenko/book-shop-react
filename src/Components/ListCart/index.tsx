import React from 'react';
import ListItem from '../List/ListItem/index';
import { title } from 'process';
import Button from '../common-components/Button';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';
import { removeCart } from '../../redux/actions/cartActionCreators';

interface IListProps{
    list: any[];
}

interface IListItemProps{
  title?: string;
  image?: string;
  subtitle?: string;
  id?: number;
}

const ListCart = ({ list } : IListProps) => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: any) => state.cart);

  const onRemove = (id: number) => {
    dispatch(removeCart(id));
  }
  return(
    <ul className='cart-list'>
    {list.map((cart) => (
      <>
        <ListItem1 
          key={cart.isbn} 
          title={cart.title} 
          image={cart.image} 
          subtitle={cart.subtitle} 
          onRemove={onRemove}
        />
      </>
    ))}
    </ul>
  )
};

const ListItem1 = ({ title, image, subtitle, onRemove} : IListItemProps & {onRemove:(id:number) => void}) => 
  <li className='cart-list-item' key={title}>
  <div className='cart-wrap-img'>
    <img className='cart-img' src={image} alt="#" />   
  </div>
  <h3 className='cart-name'>{title}</h3>
  <h4 className='cart_subtitle'>{subtitle}</h4> 
  <Button className='btn_delete' onClick={() => onRemove(id)}>REMOVE FROM CART</Button>
  </li>
  ;

export default ListCart;
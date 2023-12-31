import React, { useEffect, useState } from 'react';
import Header from '../../Components/common-components/Header';
import Footer from '../../Components/common-components/Footer';
import './CartPage.css';
import { Link } from 'react-router-dom';
import ListCart from '../../Components/ListCart';
import { useSelector } from 'react-redux';
import { getBooks } from '../../api/bookApi';

const CartPage = () => {
    const [Books, setBooks] = useState([]);
    
    useEffect(() => {
        const fetchBooks = async () => {
            try{
                const response = await getBooks();
                setBooks(response.books);
            } catch (e){
                console.error(e);
            } 
        } 
        fetchBooks();
    }, []);
    return(
        <>
                <Header />
                <div className="container">
                    <Link to='/home'>
                        <div className="arrow-wrap">
                            <div className="arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="24" viewBox="0 0 46 24" fill="none">
                                    <rect width="24" height="24" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0012 5.99897C11.0012 6.25897 10.9012 6.50897 10.7112 6.70897L6.41116 10.999L44.0012 10.999C44.5512 10.999 45.0012 11.449 45.0012 11.999C45.0012 12.549 44.5512 12.999 44.0012 12.999L6.41116 12.999L10.7112 17.289C11.1012 17.679 11.1012 18.319 10.7112 18.709C10.3212 19.099 9.68116 19.099 9.29116 18.709L3.29116 12.709C3.20116 12.619 3.13116 12.509 3.08116 12.389C3.06116 12.339 3.04116 12.299 3.04116 12.249C2.99116 12.089 2.99116 11.909 3.04116 11.749C3.04116 11.699 3.06116 11.659 3.08116 11.609C3.13116 11.489 3.20116 11.379 3.29116 11.289L9.29116 5.28897C9.68116 4.89896 10.3212 4.89896 10.7112 5.28897C10.9012 5.48897 11.0012 5.73897 11.0012 5.99897Z" fill="#313037"/>
                                </svg>
                            </div>
                        </div>
                    </Link>
                    <h1 className='main-title'>YOUR CART</h1>
                    <ListCart list={Books}/>
                    <Footer />
                </div>
        </>
    )
}

export default CartPage;
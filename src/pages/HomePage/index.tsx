import React, {useEffect, useState} from 'react'
import { getBooks } from '../../api/bookApi';
import List from '../../Components/List';
import './HomePage.css';
import InputSubscribe from '../../Components/common-components/InputSubscribe';
import useWindowSize from '../../hooks/useWindowSize';
import Header from '../../Components/common-components/Header';
import Footer from '../../Components/common-components/Footer';
import { useAppDispatch } from '../../redux/hooks';

const HomePage = () => {
    const size = useWindowSize();

    console.log({size});

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

    return (
        <>
            <div className="home-page-wrap">
                <div className="container">
                    <Header />
                    <h1 className="main-title">NEW RELEASES BOOKS</h1>
                    <List list={Books} />
                    <InputSubscribe />
                    <Footer />
                </div>
            </div>
        </>
    )
};

export default HomePage;
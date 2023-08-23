import React, {useEffect, useState} from 'react'
import { getBooks } from '../../api/bookApi';
import List from '../../Components/List';
import './HomePage.css';

const HomePage = () => {
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
    console.log(Books)

    return (
        <>
            <div className="container">
                <div>Home Page</div>
                <List list={Books} />
            </div>
        </>
    )
};

export default HomePage;
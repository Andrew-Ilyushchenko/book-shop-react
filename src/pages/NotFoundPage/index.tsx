import React from 'react';
import Header from '../../Components/common-components/Header';
import Footer from '../../Components/common-components/Footer';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return(
        <>
            <div className="container">
                <Header />
                <div className="not-found">
                    <div className="not-found-wrap">
                        <div className="number-err">404</div>
                        <div className="title-err">
                            Sorry, the page not found
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};

export default NotFoundPage;
import { defaultMaxListeners } from 'events';
import React, { useCallback, useState } from 'react';
import './Header.css'
import Input from '../Input';
import { Link } from 'react-router-dom';

const initialSearchValue = {
    search: 'Search',
}

const Header = () => {
    const [searchValue, setSearchValue] = useState (initialSearchValue);

    const onChangeSearchValue = useCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue (prevState => ({ ...prevState, [e.target.id]: e.target.value}));
    }, []);

    return(
        <>
            <header className="header">
                    <div className="header-wrap">
                        
                        <Link to='/home'>
                            <div className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="138" height="29" viewBox="0 0 138 29" fill="none">
                                    <path d="M6.64 0.319998C8.90667 0.319998 10.56 0.853331 11.6 1.92C12.64 2.96 13.16 4.57333 13.16 6.76V7.76C13.16 10.64 12.2133 12.52 10.32 13.4C12.5067 14.2533 13.6 16.2533 13.6 19.4V21.68C13.6 23.84 13.0267 25.4933 11.88 26.64C10.76 27.76 9.10667 28.32 6.92 28.32H0V0.319998H6.64ZM6.36 15.72H4.4V24.32H6.92C7.69333 24.32 8.26667 24.12 8.64 23.72C9.01333 23.2933 9.2 22.5733 9.2 21.56V19.12C9.2 17.84 8.97333 16.96 8.52 16.48C8.09333 15.9733 7.37333 15.72 6.36 15.72ZM6.52 4.32H4.4V11.72H6.12C7 11.72 7.65333 11.4933 8.08 11.04C8.53333 10.5867 8.76 9.82666 8.76 8.76V7.2C8.76 5.28 8.01333 4.32 6.52 4.32Z" fill="#313037"/>
                                    <path d="M20.29 6.76V21.88C20.29 23.72 21.05 24.64 22.57 24.64C24.09 24.64 24.85 23.72 24.85 21.88V6.76C24.85 4.92 24.09 4 22.57 4C21.05 4 20.29 4.92 20.29 6.76ZM15.89 21.6V7.04C15.89 4.8 16.4633 3.06666 17.61 1.84C18.7567 0.613332 20.41 0 22.57 0C24.73 0 26.3833 0.613332 27.53 1.84C28.6767 3.06666 29.25 4.8 29.25 7.04V21.6C29.25 23.84 28.6767 25.5733 27.53 26.8C26.3833 28.0267 24.73 28.64 22.57 28.64C20.41 28.64 18.7567 28.0267 17.61 26.8C16.4633 25.5733 15.89 23.84 15.89 21.6Z" fill="#313037"/>
                                    <path d="M36.1494 6.76V21.88C36.1494 23.72 36.9094 24.64 38.4294 24.64C39.9494 24.64 40.7094 23.72 40.7094 21.88V6.76C40.7094 4.92 39.9494 4 38.4294 4C36.9094 4 36.1494 4.92 36.1494 6.76ZM31.7494 21.6V7.04C31.7494 4.8 32.3227 3.06666 33.4694 1.84C34.616 0.613332 36.2694 0 38.4294 0C40.5894 0 42.2427 0.613332 43.3894 1.84C44.536 3.06666 45.1094 4.8 45.1094 7.04V21.6C45.1094 23.84 44.536 25.5733 43.3894 26.8C42.2427 28.0267 40.5894 28.64 38.4294 28.64C36.2694 28.64 34.616 28.0267 33.4694 26.8C32.3227 25.5733 31.7494 23.84 31.7494 21.6Z" fill="#313037"/>
                                    <path d="M58.0088 28.32L53.7288 17.16L52.3688 19.72V28.32H47.9688V0.319998H52.3688V12.52L58.1287 0.319998H62.5288L56.4088 12.8L62.5288 28.32H58.0088Z" fill="#313037"/>
                                    <path d="M63.7759 7.04C63.7759 4.77333 64.3226 3.04 65.4159 1.84C66.5093 0.613332 68.1226 0 70.2559 0C72.3893 0 74.0026 0.613332 75.0959 1.84C76.1893 3.04 76.7359 4.77333 76.7359 7.04V7.92H72.5759V6.76C72.5759 4.92 71.8426 4 70.3759 4C68.9093 4 68.1759 4.92 68.1759 6.76C68.1759 7.53333 68.3359 8.26667 68.6559 8.96C68.9759 9.65333 69.3893 10.28 69.8959 10.84C70.4026 11.4 70.9626 11.96 71.5759 12.52C72.1893 13.0533 72.7893 13.6267 73.3759 14.24C73.9893 14.8267 74.5493 15.4667 75.0559 16.16C75.5626 16.8267 75.9759 17.6267 76.2959 18.56C76.6159 19.4933 76.7759 20.5067 76.7759 21.6C76.7759 23.8667 76.2159 25.6133 75.0959 26.84C73.9759 28.04 72.3493 28.64 70.2159 28.64C68.0826 28.64 66.4559 28.04 65.3359 26.84C64.2159 25.6133 63.6559 23.8667 63.6559 21.6V19.88H67.8159V21.88C67.8159 23.6933 68.5759 24.6 70.0959 24.6C71.6159 24.6 72.3759 23.6933 72.3759 21.88C72.3759 20.84 72.0826 19.8667 71.4959 18.96C70.9093 18.0267 70.1893 17.1867 69.3359 16.44C68.5093 15.6933 67.6693 14.92 66.8159 14.12C65.9626 13.2933 65.2426 12.28 64.6559 11.08C64.0693 9.85333 63.7759 8.50667 63.7759 7.04Z" fill="#313037"/>
                                    <path d="M78.0169 4.32V0.319998H91.6169V4.32H87.0169V28.32H82.6169V4.32H78.0169Z" fill="#313037"/>
                                    <path d="M97.5947 6.76V21.88C97.5947 23.72 98.3547 24.64 99.8747 24.64C101.395 24.64 102.155 23.72 102.155 21.88V6.76C102.155 4.92 101.395 4 99.8747 4C98.3547 4 97.5947 4.92 97.5947 6.76ZM93.1947 21.6V7.04C93.1947 4.8 93.768 3.06666 94.9147 1.84C96.0614 0.613332 97.7147 0 99.8747 0C102.035 0 103.688 0.613332 104.835 1.84C105.981 3.06666 106.555 4.8 106.555 7.04V21.6C106.555 23.84 105.981 25.5733 104.835 26.8C103.688 28.0267 102.035 28.64 99.8747 28.64C97.7147 28.64 96.0614 28.0267 94.9147 26.8C93.768 25.5733 93.1947 23.84 93.1947 21.6Z" fill="#313037"/>
                                    <path d="M123.094 28.32H118.614C118.347 27.52 118.214 26.3733 118.214 24.88V20.48C118.214 19.2 117.987 18.2933 117.534 17.76C117.081 17.2 116.347 16.92 115.334 16.92H113.814V28.32H109.414V0.319998H116.054C118.321 0.319998 119.974 0.853331 121.014 1.92C122.054 2.96 122.574 4.57333 122.574 6.76V8.96C122.574 11.84 121.614 13.7333 119.694 14.64C121.641 15.4667 122.614 17.4533 122.614 20.6V24.92C122.614 26.44 122.774 27.5733 123.094 28.32ZM115.934 4.32H113.814V12.92H115.534C116.414 12.92 117.067 12.6933 117.494 12.24C117.947 11.7867 118.174 11.0267 118.174 9.96V7.2C118.174 5.28 117.427 4.32 115.934 4.32Z" fill="#313037"/>
                                    <path d="M129.908 4.32V12.12H135.948V16.12H129.908V24.32H137.508V28.32H125.508V0.319998H137.508V4.32H129.908Z" fill="#313037"/>
                                </svg>
                            </div>
                        </Link>

                        <Input value={searchValue.search} onChange={onChangeSearchValue} className='search-input' fieldName='search'/>
                        
                        <div className="header-navigation">
                            
                            <div className="navigation-heart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='header-svg'>
                                    <path d="M19.612 5.41452C19.1722 4.96607 18.65 4.61034 18.0752 4.36763C17.5005 4.12492 16.8844 4 16.2623 4C15.6401 4 15.0241 4.12492 14.4493 4.36763C13.8746 4.61034 13.3524 4.96607 12.9126 5.41452L11.9998 6.34476L11.087 5.41452C10.1986 4.50912 8.99364 4.00047 7.73725 4.00047C6.48085 4.00047 5.27591 4.50912 4.38751 5.41452C3.4991 6.31992 3 7.5479 3 8.82833C3 10.1088 3.4991 11.3367 4.38751 12.2421L5.30029 13.1724L11.9998 20L18.6992 13.1724L19.612 12.2421C20.0521 11.7939 20.4011 11.2617 20.6393 10.676C20.8774 10.0902 21 9.46237 21 8.82833C21 8.19428 20.8774 7.56645 20.6393 6.9807C20.4011 6.39494 20.0521 5.86275 19.612 5.41452V5.41452Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            
                            <Link to='/cart'>
                                <div className="navigation-shopping-bag">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='header-svg'>
                                        <path d="M5.1 3L3 19.3929C3 19.8191 3.15979 20.2279 3.44422 20.5293C3.72865 20.8307 4.11442 21 4.51667 21H19.4833C19.8856 21 20.2713 20.8307 20.5558 20.5293C20.8402 20.2279 21 19.8191 21 19.3929L18.9 3H5.1Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15 9C15 9.53043 14.6839 10.0391 14.1213 10.4142C13.5587 10.7893 12.7956 11 12 11C11.2044 11 10.4413 10.7893 9.87868 10.4142C9.31607 10.0391 9 9.53043 9 9" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                            
                            <Link to='/login'>
                                <div className="navigation-user">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='header-svg'>
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                        
                        </div>
                    
                    </div>
                    <div className="line"></div>
            </header>
        </>
    )
}

export default Header;
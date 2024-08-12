import React from 'react';
import './Pagination.css';

const Pagination = ({ totalPosts, postsPerPage, currentPage,setCurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => (
                <button 
                    className={page == currentPage ? 'active' : ''}
                    key={index}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;

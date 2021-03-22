import React from 'react';


import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className="app-list d-flex justify-content-between">
            <span className="app-list-label">
                Hello World
            </span>
            <div className="d-flex justify-content-center alight-items-center">
                <button tupe="button" className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button tupe="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;
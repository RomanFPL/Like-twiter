import React from 'react';

const PostListItem = () => {
    return (
        <li className="app-list d-flex justify-content-between">
            <span className="app-list-label">
                Hello World
            </span>
            <div className="d-flex justify-content-center alight-items-center">
                <button className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    )
}
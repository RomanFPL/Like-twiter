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
                <button className="btn-trash-o btn-sm">
                    <i className="fa fa-trash-all"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;
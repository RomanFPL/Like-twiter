import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Start to learn React', important: true, id: 'dkbld'}, 
        {label: 'Start to learn Spain', important: false, id: 'dmblkjbld'}, 
        {label: 'Start to learn Franch', important: false, id: 'dkbld3316'}, 
        {label: 'Start to learn Huiniu', important: false, id: 'dkbld66d'} 
    ]

    return (
       <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data} />
            <PostAddForm/>
       </div>
    )
}

export default App;
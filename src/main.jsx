import React from 'react';
import ReactDOM from 'react-dom/client'
import { ClubApp } from './ClubApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClubApp/>
        <FirstApp/>
    </React.StrictMode>
)


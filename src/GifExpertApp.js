import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ value = 10 }) => {

    const [categories, setCategories] = useState(['Emma Watson']);

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <button >Agregar</button>
        <ol>
            {
                categories.map(category =>
                    (<GifGrid key={category} category={category} />)
                )
            }
        </ol>
    </>);
}

export default GifExpertApp;



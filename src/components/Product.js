import React from 'react';
import bag1 from "../assets/bag_1.png";

function Product({spanText, name, imgName, price}) {
    return (
        <>
            <article>
                <span>{spanText}</span>
                <img src={imgName} alt={name}/>
                <p>{name}</p>
                <h4>€{price},-</h4>
            </article>
        </>
    );
}

export default Product;
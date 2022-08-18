import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>A Book</li>
                <li>A Carpet</li>
                <li>An Online Course</li>
            </ul>
        </section>
    );
};

export default Products;

// list를 클릭할 때 마다 다른 정보가 필요.
// params를 사용하여 동적 경로를 추가해야 함.


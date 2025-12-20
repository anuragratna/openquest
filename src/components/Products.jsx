import React from 'react';
import { productsContent } from '../data/content';
import './Products.css';

const Products = () => {
    return (
        <section id="products" className="products-section">
            <div className="container products-container">
                <h2 className="section-title">Our Products</h2>
                <div className="products-grid">
                    {productsContent.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-content">
                                <span className="product-category">Product</span>
                                <h3 className="product-title">{product.title}</h3>
                                <h4 className="product-subtitle">{product.subtitle}</h4>
                                <p className="product-description">{product.description}</p>
                                <ul className="product-features">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <a href={product.link} className="product-link">Book a Demo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;

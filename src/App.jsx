import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = [
    'all',
    ...new Set(products.map((item) => item.category))
  ];

  const filteredProducts =
    filterCategory === 'all'
      ? products
      : products.filter((item) => item.category === filterCategory);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Fake Store</h1>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
          gap: '20px'
        }}
      >
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'contain'
              }}
            />

            <h3 style={{ fontSize: '16px', marginTop: '10px' }}>
              {item.title}
            </h3>

            <p>
              <strong>Category:</strong> {item.category}
            </p>

            <h2>${item.price}</h2>

            <button
              style={{
                padding: '10px 15px',
                border: 'none',
                background: 'black',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
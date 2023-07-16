import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { tshirtsData } from './tshirts';

const App = () => {
  const [tshirts, setTShirts] = useState(tshirtsData);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleBuy = (id) => {
    const selectedQuantity = selectedQuantities[id] || 1;
    setTShirts(prevTShirts =>
      prevTShirts.map(tshirt => {
        if (tshirt.id === id) {
          return {
            ...tshirt,
            stock: tshirt.stock - selectedQuantity,
          };
        }
        return tshirt;
      })
    );
  };

  const handleQuantityChange = (id, quantity) => {
    setSelectedQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  return (
    <div>
      <h1>T-Shirt Storefront</h1>
      <div className='container'>
        {tshirts.map(tshirt => (
          <div key={tshirt.id}>
            <img src={tshirt.image} alt={tshirt.title} />
            <h2>{tshirt.title}</h2>
          <b>  <h4><p>Price: ${tshirt.price}</p></h4> </b>
            <p>Stock: {tshirt.stock === 0 ? 'Out of Stock' : tshirt.stock}</p>
            {tshirt.stock > 0 && (
              <div>
                <select
                  value={selectedQuantities[tshirt.id] || 1}
                  onChange={(e) => handleQuantityChange(tshirt.id, parseInt(e.target.value))}
                >
                  {Array.from({ length: tshirt.stock }, (_, i) => i + 1).map(
                    num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    )
                  )}
                </select>
                <button onClick={() => handleBuy(tshirt.id)}>Buy</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

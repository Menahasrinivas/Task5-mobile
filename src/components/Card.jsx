import React, { useContext, useState } from 'react';
import { ProductContext } from '../Utils/DataContextComponents';

function Card() {
  const { user, setUser } = useContext(ProductContext);

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      updateProductQuantity(id, quantity - 1);
    }
  };

  const handleIncrease = (id, quantity) => {
    if (quantity < 10) {
      updateProductQuantity(id, quantity + 1);
    }
  };

  const handleDelete = (id) => {
    setUser((prevUser) => ({
      ...prevUser,
      products: prevUser.products.filter((product) => product.id !== id),
    }));
  };

  const updateProductQuantity = (id, newQuantity) => {
    setUser((prevUser) => ({
      ...prevUser,
      products: prevUser.products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      ),
    }));
  };

  return (
    <>
      {user.products.map((product) => {
        // const carouselId = `carouselExample${product.id}`;
        const total = product.price * (product.quantity || 1);

        return (
          <div key={product.id} className="col-11 col-lg-4 mb-4 mx-auto my-5">
            <div className="card bg-light-subtle rounded-1">
           
                
              
               <img src="{product.images[0]}" class="card-img-top" alt="product.title"></img>
              <div className="card-body">
             
                <h5 className="card-title text-center" style={{ fontSize: '1.5em' }}>
                  <b>{product.title}</b>
                </h5>
                <hr></hr>
                <p className="card-text text-center" style={{ fontWeight: 'bold' }}>
                  {product.description}
                </p>
                <p className="card-text text-center" style={{ color: 'red',fontWeight: 'bold' }}>
                  {`${product.discountPercentage} % Discount`}
                </p>
                <p className="card-text" style={{ fontWeight: 'bold' }}>
                  {`Brand: ${product.brand}`}
                </p>
                <p className="card-text" style={{ fontWeight: 'bold' }}>
                  {`Category: ${product.category}`}
                </p>

                <hr></hr>
                <div className="row">
                  <div className="col-6">
                    <label className="mb-3">
                      <b>Quantity:</b>
                    </label>
                  </div>
                  <div className="col-6">
                    <div className="input-group rounded-2" style={{ outline: '2px solid grey' }}>
                      <button type="button" className="input-group-text" onClick={() => handleDecrease(product.id, product.quantity || 1)}>
                        <b>-</b>
                      </button>
                      <div className="form-control text-center" style={{ outline: '2px solid grey' }}>
                        <b>{product.quantity || 1}</b>
                      </div>
                      <button type="button" className="input-group-text" onClick={() => handleIncrease(product.id, product.quantity || 1)}>
                        <b>+</b>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <b>Total Price:</b>
                  </div>
                  <div className="col-6 text-center">
                    <b>${total}</b>
                  </div>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-danger" onClick={() => { handleDelete(product.id) }}>
                    <b>Remove Cart</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
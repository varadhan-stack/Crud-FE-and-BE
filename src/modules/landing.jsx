import React from 'react';
import { Link } from 'react-router-dom';


const Landing = (props) => {
    const {products} = props;
  return (
    <div className="row mt-3">
      {products.map((product,index) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card">
            <div className="card-body">
              {/* <div className='img'><img src={product.imgLocation} alt={product.alt} /></div> */}
              <img src={product.imgLocation} alt={`Product ${index + 1}`} className="card-img-top" />
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const objPass=()=>{
    const products = [
        { id: 1, name: 'Electronics', price: 150,imgLocation:'/images/electronics.jpg', alt:'cloths' },
        { id: 2, name: 'Cloths', price: 200,imgLocation:'/images/clothes.jpg', alt:'elect' },
        { id: 3, name: 'Foot wears', price: 300,imgLocation: '/images/footwears.jpg', alt:'sleeper' }
      ];
   return <Landing products = { products }/>
}

export default objPass;
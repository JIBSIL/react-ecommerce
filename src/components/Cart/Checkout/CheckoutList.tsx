import React from 'react';
import CheckoutItem from './CheckoutItem';
import { Product } from '../../../actions';
import { CartContext } from '../../../contexts';
import './CheckoutList.less';

interface CheckoutListProps {
  products: Product[];
}

const CheckoutList: React.FC<CheckoutListProps> = ({ products }) => {
  const { totalPrice } = React.useContext(CartContext);

  return (
    <div className="checkout-list">
      <div className="table-heading">
        <div>Products Ordered</div>
        <div>Amount</div>
        <div>Item Subtotal</div>
      </div>
      {products.map((product) => {
        return <CheckoutItem product={product} key={product.id} />;
      })}
      <div className="overall-total-price">
        <div>
          Write this down on a piece of paper! You are not able to check out online. TOTAL: <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;

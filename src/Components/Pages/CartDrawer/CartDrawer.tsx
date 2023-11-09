
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import CartList from './CartList';
const CartDrawer = () => {
    return (
        <Button className="drawer drawer-end z-50 bg-none">
        <input id="ShopingCart" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="ShopingCart" className="btn bg-none">
            <ShoppingCartIcon className='bg-none'/>
          </label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="ShopingCart" className="drawer-overlay"></label>
          <ul className="menu p-1 w-[550px] h-auto bg-base-100 text-base-content">
            <CartList />
          </ul>
        </div>
      </Button>
    );
};

export default CartDrawer;
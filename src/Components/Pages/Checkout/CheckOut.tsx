// Checkout.tsx





const CheckOut = () => {
const order = {name: "Kutub", email: "kutub@gmail.com", address: "Kalauzan"}
  

  return (
    <div>
      <h2>Checkout Page</h2>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email"/>
      </div>
      <div>
        <label>Address</label>
        <input type="text"/>
      </div>
      <button>Place Order</button>

      {order && (
        <div>
          <h3>Order Summary</h3>
          <p>Name: {order.name}</p>
          <p>Email: {order.email}</p>
          <p>Address: {order.address}</p>

        </div>
      )}
    </div>
  );
};

export default CheckOut;

const products = [
  { name: "Wheat", price: 2400, img: "farm1.jpg" },
  { name: "Paddy", price: 2300, img: "farm2.jpg" },
  { name: "Maize", price: 2200, img: "farm3.jpg" },
  { name: "Potato", price: 2400, img: "farm4.jpg" },
  { name: "Cabbage", price: 2300, img: "farm5.jpg" },
  { name: "Musturd", price: 2200, img: "farm6.jpg" },
  { name: "Barley", price: 2400, img: "farm7.jpg" },
  { name: "Cucumber", price: 2300, img: "farm8.jpg" }
];

function AgriProducts() {
  return (
    <section className="Farmers">
      {products.map((p) => (
        <div className="sell" key={p.name}>
          <div className="selling_details">
            <h2>{p.name}</h2>
            <div
              className="selling_img"
              style={{
                backgroundImage: `url(/assets/images/Agri_Products/${p.img})`,
              }}
            />
            <p>Rate : Rs.{p.price}/quintal</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AgriProducts;

const fertilisers = [
  { name: "Nitrogen", img: "f1.jpg" },
  { name: "Urea", img: "f2.jpg" },
  { name: "Potassium", img: "f3.jpg" },
  { name: "Zinc", img: "f4.jpg" },
  { name: "Calcium Nitrate", img: "f5.jpg" },
  { name: "Phosphorus", img: "f7.jpg" },
  { name: "Ammonium Sulphate", img: "f6.jpg" },
  { name: "Rock Phosphate", img: "f8.jpg" },
];

function Fertilisers() {
  return (
    <section className="shop-section">
      {fertilisers.map((item) => (
        <div className="box" key={item.name}>
          <div className="box-content">
            <h2>{item.name}</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(/assets/images/Fertilisers/${item.img})`,
              }}
            />
            <p>See more</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Fertilisers;

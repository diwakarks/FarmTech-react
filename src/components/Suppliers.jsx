const suppliers = [
  { name: "Ram Prasad", img: "farmer1.jpg" },
  { name: "Balram Chaudhary", img: "farmer2.jpg" },
  { name: "Bharat Sahu", img: "farmer3.jpg" },
  { name: "Kamaljeet Singh", img: "farmer4.jpg" },
  { name: "Mohan Yadav", img: "farmer5.jpg" },
  { name: "Bhanu Chaudhary", img: "farmer6.jpg" },
  { name: "Nutan Sahu", img: "farmer7.jpg" },
  { name: "Kushal Saini", img: "farmer8.jpg" },
];

function Suppliers() {
  return (
    <section className="suppliers">
      {suppliers.map((s) => (
        <div className="supply" key={s.name}>
          <div className="supply_details">
            <h2>{s.name}</h2>
            <div
              className="supply_img"
              style={{
                backgroundImage: `url(/assets/images/Farmers/${s.img})`,
              }}
            />
            <p>Fertilisers available</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Suppliers;

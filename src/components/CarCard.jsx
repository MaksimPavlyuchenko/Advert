export const CarCard = ({ dataCar }) => {
  const {
    accessories,
    id,
    address,
    type,
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
  } = dataCar;
  return (
    <li>
      <img src={img} alt={description} width={400} />
      <p>
        {make}, {year}
        {rentalPrice}
      </p>
      <ul>
        <li> {address.split(' ')[3]}</li>
        <li>{address.split(' ')[4]}</li>
        <li>{rentalCompany}</li>
        <li> {model}</li>
        <li>{type}</li>
        <li>{id}</li>
        <li>{accessories[2]} </li>
      </ul>
    </li>
  );
};

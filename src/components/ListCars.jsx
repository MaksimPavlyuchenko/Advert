export const ListCars = ({ data }) => {
  return (
    <ul>
      {data.map(({ mileage, img, description, make, model }) => {
        return (
          <li key={mileage}>
            <img src={img} alt={description} width={400} />
            <p>
              {make}
              {model}
            </p>
            <ul>
              <li></li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

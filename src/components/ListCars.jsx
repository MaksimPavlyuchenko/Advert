import { CarCard } from './CarCard';

export const ListCars = ({ data }) => {
  return (
    <ul>
      {data.map(item => {
        return <CarCard key={item.mileage} dataCar={item} />;
      })}
    </ul>
  );
};

import { LoadMore } from 'components/LoadMore';
import { ListCars } from '../components';

import { useGetCarsQuery } from '../redux';
import { useEffect, useState } from 'react';

const CatalogPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [cars, setCars] = useState([]);
  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
  } = useGetCarsQuery(pageNumber);
  console.log(cars);
  useEffect(() => {
    if (isSuccess & (cars.length === 0)) {
      setCars([...data]);
    }
  }, [cars.length, data, isSuccess]);
  console.log(data);

  const handlerClick = () => {
    if (cars.length % 8 === 0) {
      setCars([...cars, ...data]);
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <>
      {isLoading && <h1>...LOADING</h1>}
      {isError && <h1>...OOPS!!!</h1>}
      {isSuccess && (
        <>
          {' '}
          <ListCars data={cars} />
          <LoadMore onClick={handlerClick} />
        </>
      )}
    </>
  );
};

export default CatalogPage;

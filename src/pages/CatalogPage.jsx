import { LoadMore } from 'components/LoadMore';
import { ListCars } from '../components';

import { useGetCarsQuery } from '../redux';
import { useState } from 'react';

const CatalogPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data = [], isLoading } = useGetCarsQuery(pageNumber);
  if (isLoading) {
    return <h1>...Loading</h1>;
  }
  const handlerClick = () => {
    if (pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };
  console.log(pageNumber);
  return (
    <>
      <ListCars data={data} />
      <LoadMore onClick={handlerClick} />
    </>
  );
};

export default CatalogPage;

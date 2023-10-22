import imgNotFound from 'images/img-not-found.jpg';

export const CatalogItem = ({
  car: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    accessories,
  },
}) => {
  return (
    <li>
      <img src={img || imgNotFound} alt={`Car ${make}`} />
      <span>{make}</span>
      <span>{model}</span>
      <span>{year}</span>
      <span>{rentalPrice}</span>
      <span>{address}</span>
      <span>{rentalCompany}</span>
      <span>{type}</span>
      <span>{id}</span>
      <span>{accessories}</span>
    </li>
  );
};

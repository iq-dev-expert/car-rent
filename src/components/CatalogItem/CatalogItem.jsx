import imgNotFound from 'images/img-not-found.jpg';
import { useEffect, useState } from 'react';

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
  const [validImage, setValidImage] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = img;

    image.onload = () => {
      setValidImage(true);
    };

    image.onerror = () => {
      setValidImage(false);
    };
  }, [img]);

  return (
    <li>
      {validImage ? (
        <img src={img} alt={`Car ${make}`} />
      ) : (
        <img src={imgNotFound} alt={`Car ${make}`} />
      )}
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

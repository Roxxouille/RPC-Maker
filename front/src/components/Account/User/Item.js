import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';

const Item = ({ item }) => {
  return (
    <div className="pc__accordion__card__body__category__list__item">
      <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
      <h5 className="pc__accordion__card__body__category__list__item__model">{item.name}</h5>
      <p className="pc__accordion__card__body__category__list__item__category">{item.category.name}</p>
    </div>
  );
};

export default Item;

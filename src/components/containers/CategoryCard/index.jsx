import PropTypes from 'prop-types';
import React, { useId } from 'react';
import ProductCard from '../ProductCard';
import * as S from './styles';

export default function CategoryCard({ products, category: { name } }) {
  return (
    <S.CategoryCardContainer>
      {products?.length > 0 && (
        <>
          <h2>{name}</h2>
          <S.Category>
            {products?.map(product => (
              <ProductCard key={useId()} product={product} />
            ))}
          </S.Category>
        </>
      )}
    </S.CategoryCardContainer>
  );
}

CategoryCard.propTypes = {
  children: PropTypes.func,
}.isRequired;

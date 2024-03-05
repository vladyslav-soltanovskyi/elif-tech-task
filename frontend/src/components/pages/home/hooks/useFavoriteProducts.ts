import { getFavoriteProducts, toggleFavoriteStatusForProduct } from '@services/products/products';
import { FavoriteProducts } from '@types-app/product';
import { useState } from 'react';

export const useFavoriteProducts = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<FavoriteProducts>(getFavoriteProducts());

  const handleToggleStatus = (productId: string) => () => {
    toggleFavoriteStatusForProduct(productId);

    setFavoriteProducts((prevState) => {
      return prevState.includes(productId)
        ? prevState.filter((it) => it !== productId)
        : prevState.concat(productId);
    });
  };

  return {
    handleToggleStatus,
    favoriteProducts,
  };
};
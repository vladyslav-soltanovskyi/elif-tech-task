import { FavoriteProducts, ProductDto } from "@types-app/product";
import { TOrderBy, TSortType } from "@types-app/sort";

export const getSortedProducts = (
  products: ProductDto[],
  favoriteIds: FavoriteProducts,
  orderBy: TOrderBy,
  sortType: TSortType
) => {
  let copyProducts = products?.slice();
  const favoriteProducts: ProductDto[] = [];

  switch (sortType) {
    case "date":
      copyProducts.sort((prev, next) => {
        const prevData = new Date(prev.createdAt).getTime();
        const nextData = new Date(next.createdAt).getTime();
        if (orderBy === "asc") {
          return prevData - nextData;
        }
        return nextData - prevData;
      });
      break;
    case "price":
      copyProducts.sort((prev, next) => {
        if (orderBy === "asc") {
          return prev.price - next.price;
        }
        return next.price - prev.price;
      });
      break;
    case "name":
      copyProducts.sort((prev, next) => {
        const prevTitle = prev.title.charCodeAt(0);
        const nextTitle = next.title.charCodeAt(0);
        if (orderBy === "asc") {
          return prevTitle - nextTitle;
        }
        return nextTitle - prevTitle;
      });
      break;
  }

  copyProducts = copyProducts.filter((product) => {
    const isFavorite = favoriteIds.includes(product.id);
    isFavorite && favoriteProducts.push(product);
    return !isFavorite;
  });

  return [...favoriteProducts, ...copyProducts];
};

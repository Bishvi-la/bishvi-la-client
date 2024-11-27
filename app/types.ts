export type MyListStackParamList = {
  index: undefined;
  newList: {
    listName: string;
  };
  subcategory: {
    categoryName: string;
    listName: string;
  };
  products: {
    subcategoryName: string;
    listName: string;
  };
  'product-details': {
    productName: string;
    listName: string;
  };
};

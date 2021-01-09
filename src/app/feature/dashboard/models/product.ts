export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  kcal: number;
  imageUrl: number;
  weight: string;
  category: ProductCategory;
}

export enum ProductCategory {
  CZARNA = 'Czarna',
  ZIELONA = 'Zielona',
  BIAŁA = 'Biała',
  JAPOŃSKA = 'Japońska',
}

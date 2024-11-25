export interface ContactItem {
  icon: string;
  title: string;
  url: string;
}

export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface RPGBenefit {
  title: string;
  description: string;
}

export interface ClotheItem {
  id: string;
  title: string;
  materials: Array<ItemMaterial>;
  sizes: Array<ItemSize>;
  price: number;
  images: Array<string>;
  imagesUrl: Array<ImageUrl>;
  colors: Array<ItemColor>;
  category: Array<ItemCategory>;
  discount: number;
}

export type ItemMaterial = {
  id: string;
  name: string;
};

export type ItemCategory = {
  id: string;
  name: string;
};

export type ItemColor = {
  code: string;
  id: string;
  name: string;
};

export type ItemImage = {
  id: string;
  order: number;
  url?: string;
};

export interface ImageUrl {
  id: string;
  url: string;
  order: number;
}

export type ItemSize = {
  id: string;
  name: string;
};

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}
export type Store = {
  id: number;
  name: string;
  address: string;
  district: string;
  schedule: string;
  instagram: string;
  locationUrl: string;
};


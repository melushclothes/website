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
  id: number;
  title: string;
  materials: Array<string>;
  size: string;
  price: number;
  images: Array<string>;
  colors: Array<string>;
  category: string;
  discount: number;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

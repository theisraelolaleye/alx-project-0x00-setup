export interface PillProps {
  title: string;
}

export interface CardProps {
  imageSrc: string;
  title: string;
  location: string;
  rating: number;
  pricePerNight: number;
  features: string[];
}

// export interface ButtonProps {
//   size: 'small' | 'medium' | 'large';
//   shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
// }

export interface ButtonProps {
  title: string;
  styles?: string;
}
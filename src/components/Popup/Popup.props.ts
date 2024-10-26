import { ProductCardProps } from "../Card/ProductCard.props";

export interface PopupProps {
  isOpen: boolean;
  productInfo: ProductCardProps;
  closePopup: () => void;
}

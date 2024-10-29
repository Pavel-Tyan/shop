import { ProductCardProps } from "../ProductCard/ProductCard.props";

export interface PopupProps {
  isOpen: boolean;
  productInfo: ProductCardProps;
  closePopup: () => void;
}

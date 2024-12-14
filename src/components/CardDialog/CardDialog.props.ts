import { ProductCardProps } from "../ProductCard/ProductCard.props";

export interface CardDialogProps {
  isOpen: boolean;
  productInfo: ProductCardProps;
  closeDialog: () => void;
}

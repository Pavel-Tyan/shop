import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";
import { CardDialogProps } from "./CardDialog.props";
import CloseIcon from "@mui/icons-material/Close";

export const CardDialog = ({
  isOpen,
  productInfo,
  closeDialog,
}: CardDialogProps) => {
  const { name, description, category, count, measure, img } = productInfo;

  const dialogContentStyles = {
    width: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    background: "var(--gray)",
  };

  const dialogImageStyles = {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const closeButtonStyles = {
    position: "absolute",
    right: "8%",
    top: "5.5%",
    background: "var(--gray-dark)",
    color: "var(--secondary-color)",
    transition: "background 0.6s",
  };

  const closeButtonHoverStyles = {
    background: "var(--blue)",
    transition: "background 0.6s",
  };

  const cardTitleStyles = {
    fontSize: "19px",
    fontWeight: 800,
    color: "var(--secondary-color)",
  };

  const cardTextStyles = {
    maxHeight: "185px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "var(--secondary-color)",
  };

  const dividerStyles = {
    width: "100%",
    background: "var(--secondary-color)",
  };

  const dialogContentTextStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogContent sx={dialogContentStyles}>
        {img && (
          <CardMedia
            component="img"
            image={img}
            alt={"Изображение " + name}
            sx={dialogImageStyles}
          />
        )}
        {!img && (
          <CardMedia
            component="img"
            image="./no-image.png"
            alt={"Изображение " + name}
            sx={dialogImageStyles}
          />
        )}
        <DialogContentText sx={dialogContentTextStyles}>
          <Typography sx={cardTitleStyles} variant="h1">
            {name}
          </Typography>
          <Divider sx={dividerStyles} />
          <Typography sx={cardTitleStyles} variant="h1">
            {"Категория: " + category}
          </Typography>
          <Divider sx={dividerStyles} />
          <Typography sx={cardTitleStyles} variant="h1">
            Описание
          </Typography>
          <Typography sx={cardTextStyles}>{description}</Typography>
          <Divider sx={dividerStyles} />
          <Typography sx={cardTitleStyles} variant="h1">
            {"Категория: " + category}
          </Typography>
          <Divider sx={dividerStyles} />
          <Typography sx={cardTitleStyles} variant="h1">
            {"Доступное количество: " + count + " " + measure}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={[closeButtonStyles, { "&:hover": closeButtonHoverStyles }]}
          onClick={closeDialog}
        >
          <CloseIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

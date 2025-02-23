import { MUIStyles } from "@/@types";
import { HorizontalDivider } from "@/components/HorizontalDivider/HorizontalDivider";
import { EMPTY_INPUT_ERROR_MESSAGE } from "@/constants";
import { Layout } from "@/layouts/Layout";
import {
  useGetCategoriesQuery,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/api/api";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductInfo = () => {
  const containerStyles: MUIStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };

  const cardStyles: MUIStyles = {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    background: "var(--gray)",
    width: "1100px",
    height: "430px",
    borderRadius: "7px",
    border: "none",
    color: "var(--secondary-color)",
    transition: "background 0.6s, width 0.6s, height 0.6s",
  };

  const imageStyles: MUIStyles = {
    width: "30%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const contentStyles: MUIStyles = {
    width: "100%",
  };

  const titleStyles: MUIStyles = {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: 800,
  };

  const textStyles: MUIStyles = {
    width: "100%",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "200px",
    textWrap: "balance",
  };

  const buttonContainerStyles: MUIStyles = {
    display: "flex",
    gap: "20px",
  };

  const loadingSpinnerStyles: MUIStyles = {
    margin: "20px",
  };

  const errorMessageStyles: MUIStyles = {
    margin: "20px",
    color: "var(--secondary-color)",
    fontSize: "20px",
  };

  const { id } = useParams();

  const {
    data: currentProduct,
    isLoading,
    error,
  } = useGetProductByIdQuery(+id!);
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const navigate = useNavigate();
  const deleteCurrentProduct = () => {
    if (currentProduct && currentProduct?.id) {
      deleteProduct(currentProduct?.id);
    }
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [name, setName] = useState<string>(currentProduct?.name || "");

  const { data: categories = [] } = useGetCategoriesQuery();

  const [category, setCategory] = useState<string>(
    currentProduct?.category || ""
  );
  const [description, setDescription] = useState<string>(
    currentProduct?.description || ""
  );
  const [measure, setMeasure] = useState<string>(currentProduct?.measure || "");
  const [count, setCount] = useState<number>(currentProduct?.count || 0);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeCategory = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  const onChangeMeasure = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeasure(event.target.value);
  };

  const handleSubmit = () => {
    updateProduct({
      id: currentProduct!.id,
      body: {
        img: currentProduct!.img,
        name,
        category,
        description,
        measure,
        count,
      },
    });

    setIsOpen(false);
  };

  if (error) {
    return (
      <Typography sx={errorMessageStyles}>
        Произошла ошибка. Попробуйте перезагрузить страницу
      </Typography>
    );
  }

  if (isLoading) {
    return <CircularProgress sx={loadingSpinnerStyles} />;
  }

  return (
    <Layout hasDrawer={false}>
      <Box sx={containerStyles}>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogContent>
            <DialogTitle>Изменить информацию о продукте</DialogTitle>
            <TextField
              required
              margin="dense"
              id="name"
              name="name"
              label="Имя"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={onChangeName}
              error={!name}
              helperText={!name && EMPTY_INPUT_ERROR_MESSAGE}
            />
            <InputLabel id="category">Категория</InputLabel>
            <Select
              labelId="category"
              id="category"
              value={category}
              label="Age"
              onChange={onChangeCategory}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              required
              margin="dense"
              id="description"
              name="description"
              label="Описание"
              type="text"
              fullWidth
              variant="standard"
              value={description}
              onChange={onChangeDescription}
              error={!description}
              helperText={!description && EMPTY_INPUT_ERROR_MESSAGE}
            />
            <TextField
              required
              margin="dense"
              id="measure"
              name="measure"
              label="Единица количества"
              type="text"
              fullWidth
              variant="standard"
              value={measure}
              onChange={onChangeMeasure}
              error={!measure}
              helperText={!measure && EMPTY_INPUT_ERROR_MESSAGE}
            />
            <TextField
              required
              margin="dense"
              id="count"
              name="count"
              label="Количество"
              type="number"
              fullWidth
              variant="standard"
              value={count}
              onChange={onChangeCount}
              error={!count}
              helperText={!count && EMPTY_INPUT_ERROR_MESSAGE}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={handleSubmit}>
              Подтвердить
            </Button>
          </DialogActions>
        </Dialog>
        <Card sx={cardStyles}>
          {currentProduct?.img && (
            <CardMedia
              component="img"
              image={currentProduct.img}
              alt={"Изображение " + currentProduct.name}
              sx={imageStyles}
            />
          )}
          {!currentProduct?.img && (
            <CardMedia
              component="img"
              image="/no-image.png"
              alt={"Изображение " + currentProduct?.name}
              sx={imageStyles}
            />
          )}
          <Box sx={contentStyles}>
            <Typography sx={titleStyles} variant="h1">
              {currentProduct?.name}
            </Typography>
            <HorizontalDivider />
            <Typography sx={titleStyles} variant="h1">
              {"Категория: " + currentProduct?.category}
            </Typography>
            <HorizontalDivider />
            <Typography sx={titleStyles} variant="h1">
              Описание
            </Typography>
            <Typography sx={textStyles}>
              {currentProduct?.description}
            </Typography>
            <HorizontalDivider />
            <Typography sx={titleStyles} variant="h1">
              {"Единица количества: " + currentProduct?.measure}
            </Typography>
            <HorizontalDivider />
            <Typography sx={titleStyles} variant="h1">
              {"Доступное количество: " +
                currentProduct?.count +
                " " +
                currentProduct?.measure}
            </Typography>
          </Box>
        </Card>
        <Box sx={buttonContainerStyles}>
          <Button onClick={() => setIsOpen(true)}>
            Редактировать информацию
          </Button>
          <Button onClick={deleteCurrentProduct}>Удалить продукт</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductInfo;

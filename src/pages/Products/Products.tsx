import { useState } from "react";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { ProductList } from "@components/ProductList/ProductList";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { MUIStyles } from "@/@types";
import { Layout } from "@layouts/Layout";
import { useAppSelector } from "@/redux/hooks";
import {
  CARDS_PER_PAGE,
  EMPTY_INPUT_ERROR_MESSAGE,
  PRODUCT_LIMIT,
} from "@/constants";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
  usePostProductMutation,
} from "@/redux/api/api";

const Products = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);

  const changeCurrentPage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };

  const filterCategory = useAppSelector(
    (state) => state.searchParams.categoryFilter
  );

  const searchValue = useAppSelector((state) => state.searchParams.searchValue);

  const {
    data: products = [],
    isLoading,
    error,
  } = useGetProductsQuery({
    limit: PRODUCT_LIMIT,
    offset: 0,
  });

  const searchedProducts = products.filter((product) => {
    // Проверяем, что продукт соответствует категории
    if (filterCategory && product.category !== filterCategory) {
      return false;
    }
    // Проверяем на соответствие значения в поле поиска
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const pageCount = Math.ceil(searchedProducts.length / CARDS_PER_PAGE);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [name, setName] = useState<string>("");

  const { data: categories } = useGetCategoriesQuery();
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [measure, setMeasure] = useState<string>("");
  const [count, setCount] = useState<number>(0);

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

  const [postProduct] = usePostProductMutation();

  const handleSubmit = () => {
    postProduct({
      name,
      category,
      description,
      measure,
      count,
      img: "",
    });

    setIsDialogOpen(false);
  };

  const paginationWrapperStyles: MUIStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  };

  const paginationStyles: MUIStyles = {
    margin: "15px",
  };

  const paginationItemStyles: MUIStyles = {
    "& .MuiPaginationItem-root": {
      color: "var(--secondary-color)",
      transition: "background 0.6s",
    },
  };

  const paginationItemHoverStyles: MUIStyles = {
    "& .MuiPaginationItem-root:hover": {
      background: "var(--blue)",
      transition: "background 0.6s",
    },
  };

  const buttonStyles: MUIStyles = {
    marginTop: "30px",
  };

  const loadingSpinnerStyles: MUIStyles = {
    margin: "20px",
  };

  const errorMessageStyles: MUIStyles = {
    margin: "20px",
    color: "var(--secondary-color)",
    fontSize: "20px",
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
    <Layout hasDrawer={true} toggleDrawer={toggleDrawer}>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <Sidebar toggleDrawer={toggleDrawer} />
      </Drawer>
      <ProductList currentPage={currentPage} products={searchedProducts} />
      <Button sx={buttonStyles} onClick={() => setIsDialogOpen(true)}>
        Добавить новый продукт
      </Button>
      <Box sx={paginationWrapperStyles}>
        {pageCount && (
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={changeCurrentPage}
            variant="outlined"
            sx={[
              paginationStyles,
              paginationItemStyles,
              paginationItemHoverStyles,
            ]}
          />
        )}
      </Box>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
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
            {categories?.map((category) => (
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
    </Layout>
  );
};

export default Products;

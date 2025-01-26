import { MUIStyles } from "@/@types";
import { CategoryCardButton } from "@/components/CategoryCardButton/CategoryCardButton";
import { useCategories } from "@/hooks/useCategories";
import { Layout } from "@/layouts/Layout";
import { Category } from "@/redux/slices/categorySlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Categories = () => {
  const { categories, addCategory, deleteCategory, updateCategory } =
    useCategories();

  const wrapperStyles: MUIStyles = {
    display: "grid",
    gap: "20px 30px",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "30px",
  };

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  const openDialog = (category: Category) => {
    setIsDialogOpen(true);
    setCurrentCategory(category);
    setNewCategoryName(category.name);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(event.target.value);
  };

  const submitNewCategoryName = () => {
    if (newCategoryName === "") {
      return;
    }

    updateCategory(currentCategory!, newCategoryName);
    closeDialog();
  };

  const deleteCurrentCategory = () => {
    deleteCategory(currentCategory!.name);
    closeDialog();
  };

  const changeNameError = "Поле не может быть пустым";

  return (
    <Layout hasDrawer={false}>
      <Box sx={wrapperStyles}>
        {categories.map((category) => (
          <CategoryCardButton
            key={category.name}
            onClick={() => openDialog(category)}
          >
            {category.name}
          </CategoryCardButton>
        ))}
        <Dialog open={isDialogOpen} onClose={closeDialog}>
          <DialogContent>
            <DialogTitle>Изменить/Удалить категорию</DialogTitle>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="categoryName"
              label="Новое имя категории"
              type="text"
              fullWidth
              variant="standard"
              value={newCategoryName}
              onChange={onChange}
              error={!newCategoryName}
              helperText={!newCategoryName && changeNameError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={deleteCurrentCategory}>Удалить</Button>
            <Button type="submit" onClick={submitNewCategoryName}>
              Изменить имя
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box>
        <Button>Добавить категорию</Button>
      </Box>
    </Layout>
  );
};

export default Categories;

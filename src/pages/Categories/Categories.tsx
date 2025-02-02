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

  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [currentEditCategory, setCurrentEditCategory] =
    useState<Category | null>(null);
  const [editCategoryName, setEditCategoryName] = useState<string>("");

  const openEditDialog = (category: Category) => {
    setIsEditDialogOpen(true);
    setCurrentEditCategory(category);
    setEditCategoryName(category.name);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
  };

  const onChangeEditCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditCategoryName(event.target.value);
  };

  const submitEditCategoryName = () => {
    if (editCategoryName === "") {
      return;
    }

    updateCategory(currentEditCategory!, editCategoryName);
    closeEditDialog();
  };

  const deleteCurrentCategory = () => {
    deleteCategory(currentEditCategory!.name);
    closeEditDialog();
  };

  const changeNameError = "Поле не может быть пустым";

  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const onChangeNewCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(event.target.value);
  };

  const closeAddDialog = () => {
    setIsAddDialogOpen(false);
  };

  const openAddDialog = () => {
    setIsAddDialogOpen(true);
    setNewCategoryName("");
  };

  const submitNewCategoryName = () => {
    if (newCategoryName === "") {
      return;
    }

    addCategory(newCategoryName);
    closeAddDialog();
  };

  return (
    <Layout hasDrawer={false}>
      <Box sx={wrapperStyles}>
        {categories.map((category) => (
          <CategoryCardButton
            key={category.name}
            onClick={() => openEditDialog(category)}
          >
            {category.name}
          </CategoryCardButton>
        ))}
        <Dialog open={isEditDialogOpen} onClose={closeEditDialog}>
          <DialogContent>
            <DialogTitle>Изменить/Удалить категорию</DialogTitle>
            <TextField
              autoFocus
              required
              margin="dense"
              id="editCategoryName"
              name="editCategoryName"
              label="Новое имя категории"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryName}
              onChange={onChangeEditCategory}
              error={!editCategoryName}
              helperText={!editCategoryName && changeNameError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={deleteCurrentCategory}>Удалить</Button>
            <Button type="submit" onClick={submitEditCategoryName}>
              Изменить имя
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box>
        <Button onClick={openAddDialog}>Добавить категорию</Button>
        <Dialog open={isAddDialogOpen} onClose={closeAddDialog}>
          <DialogContent>
            <DialogTitle>Новая категория</DialogTitle>
            <TextField
              autoFocus
              required
              margin="dense"
              id="newCategoryName"
              name="newCategoryName"
              label="Имя новой категории"
              type="text"
              fullWidth
              variant="standard"
              value={newCategoryName}
              onChange={onChangeNewCategory}
              error={!newCategoryName}
              helperText={!newCategoryName && changeNameError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={submitNewCategoryName}>Добавить категорию</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Categories;

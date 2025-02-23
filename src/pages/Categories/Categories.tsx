import { MUIStyles } from "@/@types";
import { Category } from "@/api/@types/api";
import { CategoryCardButton } from "@/components/CategoryCardButton/CategoryCardButton";
import { EMPTY_INPUT_ERROR_MESSAGE } from "@/constants";
import { Layout } from "@/layouts/Layout";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  usePostCategoryMutation,
  useUpdateCategoryMutation,
} from "@/redux/api/api";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Categories = () => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [postCategory] = usePostCategoryMutation();

  const wrapperStyles: MUIStyles = {
    display: "grid",
    gap: "20px 30px",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "30px",
  };

  const buttonStyles: MUIStyles = {
    marginBottom: "20px",
  };

  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [currentEditCategoryId, setCurrentEditCategoryId] = useState<
    number | null
  >(null);
  const [editCategoryName, setEditCategoryName] = useState<string>("");

  const openEditDialog = (category: Category) => {
    setIsEditDialogOpen(true);
    setCurrentEditCategoryId(category.id);
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

    updateCategory({
      id: currentEditCategoryId!,
      body: { id: currentEditCategoryId!, name: editCategoryName },
    });
    closeEditDialog();
  };

  const deleteCurrentCategory = () => {
    deleteCategory(currentEditCategoryId!);
    closeEditDialog();
  };

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

    postCategory({ name: newCategoryName });
    closeAddDialog();
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
    <Layout hasDrawer={false}>
      <Box sx={wrapperStyles}>
        {categories?.map((category) => (
          <CategoryCardButton
            key={category.id}
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
              helperText={!editCategoryName && EMPTY_INPUT_ERROR_MESSAGE}
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
        <Button sx={buttonStyles} onClick={openAddDialog}>
          Добавить категорию
        </Button>
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
              helperText={!newCategoryName && EMPTY_INPUT_ERROR_MESSAGE}
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

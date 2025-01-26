import { MUIStyles } from "@/@types";
import Typography from "@mui/material/Typography/Typography";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Card from "@mui/material/Card/Card";
import { Layout } from "@layouts/Layout";
import Box from "@mui/material/Box/Box";

const Profile = () => {
  const profileCardStyles: MUIStyles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    background: "var(--gray)",
    width: "240px",
    height: "300px",
    borderRadius: "7px",
    border: "none",
    color: "var(--secondary-color)",
    transition: "background 0.6s, width 0.6s, height 0.6s",
  };

  const titleStyles: MUIStyles = {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: 800,
    color: "var(--secondary-color)",
  };

  const avatarStyles: MUIStyles = {
    marginTop: "10px",
    height: "160px",
    width: "90%",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const containerStyles = {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Layout hasDrawer={false}>
      <Box sx={containerStyles}>
        <Card sx={profileCardStyles}>
          <CardMedia
            component="img"
            image="./no-image.png"
            alt={"Изображение " + name}
            sx={avatarStyles}
          />
          <Typography variant="h1" sx={titleStyles}>
            {"Имя: ..."}
          </Typography>
          <Typography variant="h1" sx={titleStyles}>
            {"Email: ..."}
          </Typography>
          <Typography variant="h1" sx={titleStyles}>
            {"Группа: ..."}
          </Typography>
        </Card>
      </Box>
    </Layout>
  );
};

export default Profile;

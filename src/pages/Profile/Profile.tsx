import Box from "@mui/material/Box/Box";
import { MUIStyles } from "../../@types";
import { Header } from "@components/Header/Header";
import Typography from "@mui/material/Typography/Typography";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Card from "@mui/material/Card/Card";

const Profile = () => {
  const containerStyles: MUIStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "100px",
    width: "100%",
    height: "100svh",
    position: "relative",
  };

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

  return (
    <Box sx={containerStyles}>
      <Header hasDrawer={false} />
      <Card sx={profileCardStyles}>
        <CardMedia
          component="img"
          image="./no-image.png"
          alt={"Изображение " + name}
          sx={avatarStyles}
        />
        <Typography variant="h1" sx={titleStyles}>
          {"Имя"}
        </Typography>
        <Typography variant="h1" sx={titleStyles}>
          {"Email"}
        </Typography>
        <Typography variant="h1" sx={titleStyles}>
          {"Группа"}
        </Typography>
      </Card>
    </Box>
  );
};

export default Profile;

import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

function App() {
  const Products = lazy(() => import("@pages/Products/Products"));
  const Profile = lazy(() => import("@pages/Profile/Profile"));

  const loadingSpinnerStyles = {
    margin: "20px",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<CircularProgress sx={loadingSpinnerStyles} />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<CircularProgress sx={loadingSpinnerStyles} />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/categories"
          element={
            <Suspense fallback={<CircularProgress sx={loadingSpinnerStyles} />}>
              <CircularProgress sx={loadingSpinnerStyles} />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

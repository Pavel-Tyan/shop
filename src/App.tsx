import { useState } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  // Не забудь про Main
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles["wrapper"]}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <ProductList />
    </div>
  );
}

export default App;

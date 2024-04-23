import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsBoard from "./Components/News board/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;

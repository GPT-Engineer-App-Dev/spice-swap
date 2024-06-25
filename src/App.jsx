import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Box
        bgImage="url('/images/recipe-background.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minHeight="100vh"
      >
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
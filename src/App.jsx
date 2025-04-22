import { Box, Typography, Link, Stack } from "@mui/material";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Navigation */}
      <Box
        sx={{
          width: "200px",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "2rem 1rem",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
          Vipin Portfolio
        </Typography>
        <nav>
          <Stack spacing={2}>
            <Link href="#about" underline="hover">About</Link>
            <Link href="#skills" underline="hover">Skills</Link>
            <Link href="#projects" underline="hover">Projects</Link>
            <Link href="#contact" underline="hover">Contact</Link>
          </Stack>
        </nav>
      </Box>

      {/* Main Content */}
      <Box sx={{ marginLeft: "200px", width: "100%" }}>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </Box>
    </Box>
  );
}

export default App;

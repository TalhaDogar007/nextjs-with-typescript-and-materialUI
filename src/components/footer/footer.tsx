import * as React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "lavender", py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;

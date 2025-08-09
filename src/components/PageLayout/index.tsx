import type { PropsWithChildren } from "react";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

function PageLayout({ children }: PropsWithChildren) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}

export default PageLayout;

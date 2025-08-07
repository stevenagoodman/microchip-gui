import type { PropsWithChildren } from "react";
import Navbar from "./components/Navbar";

function PageLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default PageLayout;

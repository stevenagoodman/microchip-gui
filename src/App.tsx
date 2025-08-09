// import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageLayout from "@/components/PageLayout";
import Workspace from "@/pages/Workspace";
import ComponentView from "@/pages/Components";
import Settings from "@/pages/Settings";
import About from "@/pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Workspace />} />
            <Route path="/components" element={<ComponentView />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </>
  );
}

export default App;

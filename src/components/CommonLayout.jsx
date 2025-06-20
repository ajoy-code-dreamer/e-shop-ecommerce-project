import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";

const CommonLayout = () => {
  return (
    <>
      <Container>
        <div>navbar</div>
        <Outlet />
        <div>footer</div>
      </Container>
    </>
  );
};

export default CommonLayout;

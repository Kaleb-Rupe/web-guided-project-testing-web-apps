import React from "react";
import App from "./App";

import { render, screen } from "@testing-library/react";

test("Render without errors", () => {
  render(<App />);
});

test("When app mounts, Add New Animal header exists on the screen.", () => {
  //Arrange
  render(<App />);

  //Act
  const header = screen.getByText("Add New Animal");

  //Assert
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(/add new animal/i);
});

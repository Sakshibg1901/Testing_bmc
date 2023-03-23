
import React from "react";
import { render,screen } from "@testing-library/react";
import Login from "./components/Login";

test("test1 mail",()=>{
  render(<Login/>)
  // const buttonelement=screen.getByText("button",{name:'Login'})
  const buttonelement=screen.getByText("Username")
   screen.debug(buttonelement)
  expect(buttonelement).toBeInTheDocument()
}
)
test("test2",()=>{
  render(<Login/>)
  // const buttonelement=screen.getByText("button",{name:'Login'})
  const buttonelement=screen.getByText("Password")
   screen.debug(buttonelement)
  expect(buttonelement).toBeInTheDocument()
}
)
test("test3",()=>{
  render(<Login/>)
  // const buttonelement=screen.getByText("button",{name:'Login'})
  const buttonelement=screen.getByText("Create an Account?")
   screen.debug(buttonelement)
  expect(buttonelement).toBeInTheDocument()
}
)

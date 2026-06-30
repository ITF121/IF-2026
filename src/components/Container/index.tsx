import React from "react";
import { PageContainer } from "./styles";

interface Props {
  children: JSX.Element;
}

const Container = ({ children }: Props) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Container;

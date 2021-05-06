import React from "react";
import Header from "../Header";
import "./PageTemplate.scss";

interface IPageTemplate {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: IPageTemplate) => {
  return (
    <>
      <Header />
      <article
        style={{
          maxHeight: "80vh",
        }}
      >
        {children}
      </article>
      <footer>푸터</footer>
    </>
  );
};

export default PageTemplate;

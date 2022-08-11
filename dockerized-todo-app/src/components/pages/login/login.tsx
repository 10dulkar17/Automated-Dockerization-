/* eslint-disable no-unused-vars */
import React from "react";
import IPage from "../../../interfaces/page";

import { Container, LeftBox, RightBox, Wrapper } from "./login.styles";

import TextHeading from "../../atoms/text-heading/text-heading";
import TextDescription from "../../atoms/text-description/text-description";
import InputWithLabel from "../../atoms/input-with-label/input-with-label";
import CustomButton from "../../atoms/custom-button";
import CustomCheckbox from "../../atoms/custom-checkbox/custom-checkbox";

const LoginPage: React.FC<IPage> = () => {
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <TextHeading>My Todo App</TextHeading>
          <TextDescription>
            Welcome back! Please enter your details.
          </TextDescription>

          <form>
            <InputWithLabel
              label="Email"
              placeholder="Enter your email"
              type="email"
            />

            <InputWithLabel
              label="Password"
              placeholder="********"
              type="password"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              <CustomCheckbox label="Remember-me" checked />
              <CustomButton>Sign In</CustomButton>
            </div>
          </form>
        </LeftBox>
        <RightBox src={BOX_IMAGE_SRC} />
      </Wrapper>
    </Container>
  );
};

const BOX_IMAGE_SRC =
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80";
export default LoginPage;

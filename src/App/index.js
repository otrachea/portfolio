import { Section, Wrapper, Title, Button, Toggle } from "./style";
import Theme from "./Theme";

import { useState } from "react";

import styled from "styled-components";
import Header from "./Header/";

import useDarkMode from "../hooks/useDarkMode";

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <Theme mode={themeMode}>
      <Header />
      <Wrapper>
        <Title>bruhfdsfsf</Title>
      </Wrapper>
      <Button>Normal</Button>
      <Section></Section>
      <Paragraph>fdsfds</Paragraph>
      <Toggle toggleThemeMode={toggleThemeMode} />
    </Theme>
  );
}

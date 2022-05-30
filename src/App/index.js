import { Section, Wrapper, Title, Button, Toggle } from "./style";
import { ThemeProvider } from "styled-components";

import styled from "styled-components";
import Header from "./Header/";

import { lightTheme, darkTheme } from "../shared/theme/";

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export default function App() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Header />
      <Wrapper>
        <Title>bruhfdsfsf</Title>
      </Wrapper>
      <Button>Normal</Button>
      <Section></Section>
      <Paragraph>fdsfds</Paragraph>
      <Toggle theme={theme} toggleTheme={themeToggle} />
    </ThemeProvider>
  );
}

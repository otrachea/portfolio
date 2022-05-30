import { Section, Wrapper, Title, Button, Toggle } from "./style";

import Theme from "./Theme";
import Header from "./Header/";

import useDarkMode from "../hooks/useDarkMode";

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
      <Toggle toggleThemeMode={toggleThemeMode} />
    </Theme>
  );
}

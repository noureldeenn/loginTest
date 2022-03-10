import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from "./configs/AppConfig";
import LoginOne from "views/auth-views/authentication/login-1";

const themes = {
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={THEME_CONFIG.currentTheme}
      >
        <LoginOne allowRedirect={true} />
      </ThemeSwitcherProvider>
    </div>
  );
}

export default App;

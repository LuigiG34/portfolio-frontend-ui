import { useState, useEffect } from "react";

// Read initial theme from localStorage or system preference
function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("tp-theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Apply theme to <html>
function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  if (theme === "dark") {
    root.classList.add("dark-mode");
    root.classList.remove("light-mode");
  } else {
    root.classList.add("light-mode");
    root.classList.remove("dark-mode");
  }
  localStorage.setItem("tp-theme", theme);
}

const ThemeSetting = () => {
  const [theme, setThemeState] = useState<"light" | "dark">(getInitialTheme);
  const [settingOpen, setSettingOpen] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (value: "light" | "dark") => {
    setThemeState(value);
  };

  // Only the slider toggle (checkbox) toggles between modes
  const handleSliderToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`tp-theme-settings-area transition-3 ${settingOpen ? "settings-opened" : ""}`}
    >
      <div className="tp-theme-wrapper">
        <div className="tp-theme-header text-center">
          <h4 className="tp-theme-header-title">Paramètres</h4>
        </div>

        <div className="tp-theme-dir mb-20">
          {/* Use a plain div instead of label to avoid checkbox toggle on span click */}
          <div className="tp-theme-dir-main">
            <span
              onClick={() => setTheme("dark")}
              style={{ cursor: "pointer" }}
              className={`tp-theme-dir-rtl ${theme === "dark" ? "active" : ""}`}
            >
              Dark
            </span>

            {/* Checkbox + slider — clicking this toggles between dark/light */}
            <span
              onClick={handleSliderToggle}
              style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
            >
              <input
                type="checkbox"
                id="tp-dir-toggler"
                checked={theme === "dark"}
                onChange={handleSliderToggle}
                style={{ display: "none" }}
              />
              <i className="tp-theme-dir-slide"></i>
            </span>

            <span
              onClick={() => setTheme("light")}
              style={{ cursor: "pointer" }}
              className={`tp-theme-dir-ltr ${theme === "light" ? "active" : ""}`}
            >
              Light
            </span>
          </div>
        </div>

        <div className="tp-theme-settings">
          <div className="tp-theme-settings-wrapper">
            <div className="tp-theme-settings-open">
              <button
                className="tp-theme-settings-open-btn"
                onClick={() => setSettingOpen(!settingOpen)}
              >
                <span className="tp-theme-settings-gear">
                  <i className="fa-light fa-gear"></i>
                </span>
                <span className="tp-theme-settings-close">
                  <i className="fa-regular fa-xmark"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
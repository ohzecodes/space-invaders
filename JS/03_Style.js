// Start of File: 03_Style.js

const setLight = (lightsOn) => {
  const setStyle = (Colors) => {
    const { color, backgroundColor, nextLevel } = Colors;
    document.querySelectorAll("header").forEach((e) =>
      Object.assign(e.style, {
        backgroundColor: color,
        color: backgroundColor
      })
    );

    document
      .querySelectorAll("body")
      .forEach((e) => Object.assign(e.style, Colors));

    document.querySelectorAll("a").forEach((e) => (e.style.color = color));

    document.querySelectorAll("details").forEach((e) =>
      Object.assign(e.style, {
        color: color,
        backgroundColor: nextLevel
      })
    );
    document.querySelectorAll("#sign a").forEach((e) =>
      Object.assign(e.style, {
        backgroundColor: nextLevel,
        color: color
      })
    );
  };
  const h2 = document.querySelector("#lights > h2");
  if (lightsOn) {
    const LightColors = {
      backgroundColor: "#f0f0f0",
      color: "#333",
      nextLevel: "#fff"
    };
    setStyle(LightColors);
    h2.textContent = "Dark Mode: Off";
    return;
  }

  const DarkColors = {
    backgroundColor: "#333",
    color: "#f0f0f0",
    nextLevel: "#000"
  };
  setStyle(DarkColors);

  h2.textContent = "Dark Mode: On";
};

const autoDetectTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    lightCheckBox.checked = true;
  } else {
    lightCheckBox.checked = false;
  }
  setLight(!lightCheckBox.checked);
};

autoDetectTheme();
lightCheckBox.addEventListener("change", () =>
  setLight(!lightCheckBox.checked)
);

//End of File: 03_Style.js

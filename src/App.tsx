import { useState } from "react";
import "./App.css";
import ColorSliders from "./components/ColorSliders";
import { type ColorType } from "./types";

const isDarkMode = (): boolean =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function App() {
  const [fontColor, setFontColor] = useState<ColorType>(
    isDarkMode() ? { R: 255, G: 255, B: 255 } : { R: 0, G: 0, B: 0 },
  );

  return (
    <>
      <h1
        style={{ color: `rgb(${fontColor.R}, ${fontColor.G}, ${fontColor.B})` }}
      >
        Color Sliders
      </h1>
      <ColorSliders
        defaultColor={{ R: 96, G: 128, B: 160 }}
        changeColor={setFontColor}
      />
    </>
  );
}

export default App;

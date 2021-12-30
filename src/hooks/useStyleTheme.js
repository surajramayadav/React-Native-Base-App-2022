import Colors from "constant/Colors";
import useThemeColors from "hooks/useThemeColors";
import React from "react";

export default function UseStyleTheme() {
  const theme = useThemeColors();
  // console.log(theme);
  const ThemeTxtColors = theme.txt;
  const ThemeBgColors = theme.bg;
  return { ThemeTxtColors, ThemeBgColors };
}

// hooks/UseHoverStyle.js

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const UseHoverStyle = (hoverColor) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    color: isHovered ? hoverColor : theme.textColor,
  };

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return { hoverStyle, onMouseEnter, onMouseLeave };
};

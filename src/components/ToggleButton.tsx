import styled from 'styled-components';
import { useTheme } from '../context/ThemeChanger';
import { useEffect, useState } from 'react';

const Switch = () => {
  // Theme context
  const { theme, toggleTheme } = useTheme();

  // State for checkbox status
  const [isChecked, setIsChecked] = useState(theme === 'blue');

  // Update checkbox status when theme changes
  useEffect(() => {
    setIsChecked(theme === 'blue');
  }, [theme]);

  // Handle checkbox change
  const handleChange = () => {
    toggleTheme();
    setIsChecked(!isChecked);
  };

  return (
    <StyledWrapper>
      <input
        onChange={handleChange}
        type="checkbox"
        className="theme-checkbox"
        checked={isChecked}
      />
    </StyledWrapper>
  );
}

// Styled component for the switch
const StyledWrapper = styled.div`
  .theme-checkbox {
    margin-top: 0.5em;
    --toggle-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 2.5em;
    height: 1.2em;
    background: linear-gradient(to right,#2a2a2a 50%, #014AAC 50%) no-repeat;
    background-size: 205%;
    background-position: 0;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
    font-size: var(--toggle-size);
  }

  .theme-checkbox::before {
    content: "";
    width: 0.7em;
    height: 0.7em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.3em;
    background:  #efa32c;
    border-radius: 50%;
    transition: 0.4s;
  }

  .theme-checkbox:checked::before {
    left: calc(100% - 0em - 1em);
    background: white;
  }

  .theme-checkbox:checked {
    background-position: 100%;
  }
`;

export default Switch;

import styled from 'styled-components';
import { lighten } from 'polished';
import { themes } from 'styles';

export const SwitchToggle = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span {
    background-color: ${themes.main.colors.lighGrey};
  }

  input:focus + span {
    box-shadow: 0 0 1px ${themes.main.colors.lightGrey};
  }

  input:checked + span:before {
    box-shadow: 0 0 5px ${themes.main.colors.red};
    transform: translateX(26px);
  }
`;

export const SliderToggle = styled.span`
  background-color: ${lighten(.2, themes.main.colors.lightGrey)};
  border-radius: 34px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;

  &::before {
    background-color: ${themes.main.colors.red};
    border-radius: 50%;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }
`;


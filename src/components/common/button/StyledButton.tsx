import styled, { css } from 'styled-components';

export const BUTTON_STYLE = {
  default: css`
    --background-color: #171e71;
    --color: #ffffff;
    --padding: 8px 0;
    --width: 100%;
    --hover: .8;
  `,
  cancel: css`
  --background-color: #cb5917;
  --color: #ffffff;
  --padding: 8px 0;
  --width: 100%;
  --hover: .8;
`,
  link: css`
    --background-color: transparent;
    --color: black;
    --padding: 4px;
    --hover: underline;
  `,
};
export const StyledBtn = styled.button<{buttonStyle: string}>`
  ${props => props.buttonStyle}
  width: var(--width);
  border: none;
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--color);
  padding: var(--padding);
  cursor: pointer;

  &:hover {
    opacity: var(--hover);
    text-decoration: var(--hover);
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
    background: #dc3545 #025ce2;
  }
`;
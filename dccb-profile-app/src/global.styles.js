import { createGlobalStyle } from "styled-components";

const DccbGlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

`
export default DccbGlobalStyles;
import { css } from '@emotion/react';

const reset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: blanchedalmond;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const myGlobalStyles = css`
  ${reset}

  button {
    background-color: #f9caca;
    padding: 0.5em;
    border-radius: 32px;
    border-color: pink;
    color: darkorchid;
    font-size: 1em;
    width: 25em;
    max-width: 80vw;
    cursor: pointer;
    align-self: center;
    &:active {
      transform: scale(1.05);
    }
    &:hover {
      opacity: 0.6;
    }
  }
  .h2 {
    color: darkmagenta;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .link {
    display: flex;
    justify-content: space-between;
    color: darkmagenta;
    align-items: center;
    padding: 2rem;
    height: 10px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    color: darkmagenta;
    align-items: center;
    padding: 2rem;
    height: 10px;
  }
  .img {
    width: 150vh;
    height: 150wh;
    border-radius: 50%50%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px;
    width: 180px;
    align-self: center;
  }
  .box {
    display: flex;
    flex-direction: row;
  }
  .li {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

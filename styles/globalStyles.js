import { css } from '@emotion/react';

const reset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background: #281f62;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: 100vh;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 10;
    padding: 0;
    font-weight: normal;
  }
  ol,
  ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const mainColor = 'black';
const secondaryColor = '#15c6d3';

export const myGlobalStyles = css`
  ${reset}

  body {
    font-family: 'UpLeveled body', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-size: 20px;
    font-style: normal;
    color: #444;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }
  span {
    font-family: 'UpLeveled span', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    color: #1a1a1a;
    font-style: bold;
  }
  h1 {
    font-family: 'UpLeveled heading font', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-size: 2em;
    color: ${mainColor};
  }
  header {
    display: flex;
    align-items: flex-end;
    padding: 40px;
    overflow: auto;
    img {
      width: 100vh;
      height: auto;
      align-items: center;
      justify-content: center;

      margin-top: 20px;
      padding: 40px;
    }
  }

  img {
    border-radius: 5px;
    box-shadow: 3px 3px #707070;
    width: 15vw;
    @media (max-width: 1100px) {
      width: 40vw;
    }
  }
  #__next > div {
    width: 90vw;
    min-height: 80vh;
    margin: 0 auto;
    /* display: flex; */
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    div {
      background-color: #e2bf36;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      min-height: 55vh;
      padding: 20px 40px;
      p {
        text-align: center;
      }
      div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0;
        min-height: auto;
        border: none;
        text-align: center;
        justify-items: center;
        img {
          margin-bottom: 10px;
          grid-column: span 3;
          background-color: white;
        }
        span {
          margin: 0;
        }
        button {
          width: 2em;
          align-self: center;
        }
      }
      h1 {
        align-self: start;
      }
    }
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #150796;
    width: 80vw;
    margin: 0 auto;
    min-height: 70vh;
    border-radius: 5px;
    h1 {
      color: #32a354;
      text-align: center;
    }
    h1,
    a {
      align-self: center;
    }
    div {
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10vw;
    }
  }

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
    &:active {
      transform: scale(1.05);
    }
    &:hover {
      opacity: 0.6;
    }
  }
  .error {
    h1 {
      color: #da0e46;
      text-align: center;
    }
    background-color: #f9caca;
  }
`;

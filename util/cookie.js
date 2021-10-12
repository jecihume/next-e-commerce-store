import Cookies from 'js-cookie';

// creates a cookie:
export function setCookie(name, value) {
  Cookies.set(name, JSON.stringify(value));
}

export function getCookie(name) {
  try {
    return JSON.parse(Cookies.get(name));
  } catch (err) {
    return undefined;
  }
}

import Cookies from 'js-cookies';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}
// creates a cookie:
export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

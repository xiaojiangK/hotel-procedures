
export function getStorage(token:string) {
  return localStorage.getItem(token)
}

export function setStorage(token:string, value:any) {
  return localStorage.setItem(token, value)
}

export function removeStorage(token:string) {
  return localStorage.removeItem(token)
}

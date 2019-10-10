export function getStorage(token:string) {
  return localStorage.getItem(token)
}

export function setStorage(token:string, value:any) {
  return localStorage.setItem(token, value)
}

export function removeStorage(token:string) {
  return localStorage.removeItem(token)
}

// 日期
export function formatDate(time:any) {
  const date = new Date(time);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${date.getFullYear()}-${m < 10 ? '0'+m : m}-${d < 10 ? '0'+d : d}`;
}

// 时间
export function formatTime(time:any) {
  const date = new Date(time);
  const h = date.getHours();
  const n = date.getMinutes();
  const s = date.getSeconds();
  return `${h < 10 ? '0'+h : h}:${n < 10 ? '0'+n : n}:${s < 10 ? '0'+s : s}`;
}

// 日期时间
export function formatDateTime(time:any) {
  const date = new Date(time);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const n = date.getMinutes();
  const s = date.getSeconds();
  return `${date.getFullYear()}-${m < 10 ? '0'+m : m}-${d < 10 ? '0'+d : d} ${h < 10 ? '0'+h : h}:${n < 10 ? '0'+n : n}:${s < 10 ? '0'+s : s}`;
}

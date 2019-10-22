export function getStorage(key:string) {
  return JSON.parse(localStorage.getItem(key) as string)
}

export function setStorage(key:string, val:any) {
  if (typeof val == 'object') {
    val = JSON.stringify(val)
  }
  return localStorage.setItem(key, val)
}

export function removeStorage(key:string) {
  return localStorage.removeItem(key)
}

// 日期
export function formatDate(time:any) {
  const date = new Date(time);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${date.getFullYear()}-${m < 10 ? '0'+m : m}-${d < 10 ? '0'+d : d}`;
}

// 月日
export function formatMonth(time:any) {
  const date = new Date(time);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${m < 10 ? '0'+m : m}-${d < 10 ? '0'+d : d}`;
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


export function format(type:string, n:number, d:number = 0) {
  if (type == 'week') {
    if (n == 0) {
      return 'Sunday'
    } else if (n == 1) {
      return 'Monday'
    } else if (n == 2) {
      return 'Tuesday'
    } else if (n == 3) {
      return 'Wednesday'
    } else if (n == 4) {
      return 'Thursday'
    } else if (n == 5) {
      return 'Friday'
    } else if (n == 6) {
      return 'Saturday'
    }
  } else {
    if (n == 1) {
      return `January ${d}`
    } else if (n == 2) {
      return `February ${d}`
    } else if (n == 3) {
      return `March ${d}`
    } else if (n == 4) {
      return `April ${d}`
    } else if (n == 5) {
      return `May ${d}`
    } else if (n == 6) {
      return `June ${d}`
    } else if (n == 7) {
      return `July ${d}`
    } else if (n == 8) {
      return `August ${d}`
    } else if (n == 9) {
      return `September ${d}`
    } else if (n == 10) {
      return `October ${d}`
    } else if (n == 11) {
      return `November ${d}`
    } else if (n == 12) {
      return `December ${d}`
    }
  }
}

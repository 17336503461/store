const key = 'pmsdata'
export const setToken = (token) => {
  localStorage.setItem(key, token)
}
export const getToken = () => {
  return localStorage.getItem(key)
}
export const removeToken = () => {
  localStorage.removeItem(key)
}
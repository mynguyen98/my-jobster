// add user
export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

// remove user
export const RemoveUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

// get user
export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

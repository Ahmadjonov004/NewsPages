export const auth = (): string | null => {
    return localStorage.getItem('access')
}

export const logout = () => {
    localStorage.removeItem('access')
    window.location.href = 'login'
    
}
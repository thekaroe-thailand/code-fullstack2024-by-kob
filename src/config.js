const config = {
    apiPath: 'http://localhost:3001',
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }
}

export default config;
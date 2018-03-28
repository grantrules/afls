class loginProvider {
    
    users = [
        {
            email: 'test@test.com',
            password: "test"
        }
    ]

    login(credentials, callback) {
        const { email, password } = credentials;

        var user = this.users.find(e => e.email === email && e.password === password)

        callback(user || false)
    }

}

export default loginProvider
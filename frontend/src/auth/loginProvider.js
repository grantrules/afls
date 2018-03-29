class loginProvider {
    
    users = [
        {
            email: 'test@test.com',
            password: "test"
        }
    ]

    login(credentials, cb) {
        const { email, password } = credentials;

        var user = this.users.find(e => e.email === email && e.password === password)

        this.callback(user || false, cb)
    }

    logout(cb) {

        this.logoutCallback(cb)
    }

}

export default loginProvider
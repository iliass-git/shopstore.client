import Api from './services/api'

export default {
    login (user) {
        return Api().post('api/token', user, {

            userName: user.username,
            password: user.password,
            email: user.email

        }, 
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        }, error => {
            console.log(error);
        });
    },
    register (user) {
        return Api().post('register', user, {

            userName: user.username,
            password: user.password

        }); 
    },
    authHeader() {
        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.accessToken) {
          return { Authorization: 'Bearer ' + user.accessToken };
        } else {
          return {};
        }

    },
    logout() {
        localStorage.removeItem('user');
    }
};


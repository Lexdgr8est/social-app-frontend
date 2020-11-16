import axios from 'axios'

export const checkPassword = (password, password1) => {
    if (password !== password1) {
        return [false, 'Password does not match']
        // setSignUpError('Password does not match')
    } else if (password.length < 8) {
        return [false, "Password needs a minimum of eight characters"]
        // setSignUpError("Password needs a minimum of eight characters")
    } else if (password.search(/[a-z]/) < 0 || password.search(/[A-Z]/) < 0 || password.search(/[0-9]/) < 0) {
        return [false, "Password must have a lower case letter, upper case letter and  a digit"]
        // setSignUpError("Password must have a lower case letter, upper case letter and  a digit")
    } else {
        return [true]
        // console.log('successful');
        // axios.post('', signUp)
    }
}



export const postRequest = (url, data) => {
    return axios({ method: 'POST', url, data, withCredentials: true })
}

export const getRequest = (url) => {
    return axios({ method: 'GET', url, withCredentials: true })
}

export const deleteRequest = (url) => {
    return axios({ method: 'DELETE', url, withCredentials: true })
}

export const putRequest = (url, data) => {
    return axios({ method: 'POST', url, data, withCredentials: true })
}

export const serverURL = 'http://localhost:5000'
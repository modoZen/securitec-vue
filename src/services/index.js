import Axios from 'axios'
import userService from './UserService'

//Axios configuracion
Axios.defaults.headers.common.Accept="application/json"

export default{
    userService: new userService(Axios)
}
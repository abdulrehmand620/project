import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {

        
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            // alert(res.data.message)
            Swal.fire({
                title: res.data.message,
                imageUrl: './images/user.png',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Custom image',
              })
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="wrapper">
            
        <div className="logo"> <img src="./images/user.png" alt="" /> </div>
        <div className="text-center mt-4 name"> Login Here.. </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" required></input>
            </div>
            <div className="form-field d-flex align-items-center">
                <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" required ></input>
            </div>

            <div className="btn mt-3" onClick={login}>Login</div>
            <div id="btn1">OR</div>
            <div className="btn mt-3" onClick={() => history.push("/register")}>SignUp</div>
           
        </form>

    </div>

    )
}

export default Login
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import axios from "axios";
import {
    useHistory
} from 'react-router-dom';
import Swal from 'sweetalert2'

function Register() {
    // const navigate = useNavigate();
    const history = useHistory()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    Swal.fire({
                        title: res.data.message,
                        imageUrl: './images/user.png',
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: 'Custom image',
                      })
                    history.push("/login")
                })

        } else {
            Swal.fire({
                title: 'Invalid Inputs',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }

    }


    return (


        <div className="wrapper">
            {console.log("User", user)}
            <div class="logo"> <img src="./images/user.png" alt="" /> </div>
            <div class="text-center mt-4 name"> Signup Here.. </div>
            <form class="p-3 mt-3">
                <div class="form-field d-flex align-items-center">
                    <span class="far fa-user"></span> <input type="text" name="name" value={user.name} placeholder="Username" id="userName" onChange={handleChange} />
                </div>

                <div class="form-field d-flex align-items-center">
                    <span class="far fa-user"></span> <input type="email" name="email" value={user.email} placeholder="UserEmail" id="userName" onChange={handleChange} />
                </div>

                <div class="form-field d-flex align-items-center">
                    <span class="fas fa-key"></span> <input type="password" name="password" value={user.password} placeholder="Password" id="pwd" onChange={handleChange} />
                </div>

                <div class="form-field d-flex align-items-center">
                    <span class="fas fa-key"></span> <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter-Password" id="pwd" onChange={handleChange} />
                </div>
                <div class="btn mt-3" onClick={register}>SignUp</div>
                <div id="btn1">OR</div>
                <div class="btn mt-3" onClick={() => history.push("/login")}>login</div>

            </form>
        </div>

    );
}
export default Register;
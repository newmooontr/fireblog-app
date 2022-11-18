import React from 'react'
import { ImgDiv,LoginCon,LoginBloc,LoginInput } from '../styled/LoginStayled';


const Login = () => {
  return (
    <LoginCon>
      <LoginBloc>
        <ImgDiv>
          <img src="images/blok.png" alt="" />
        </ImgDiv>
        <h3>Login</h3>
        <LoginInput>
          <label htmlFor='email'>Email</label>
          <input id="email" type="text" />
          <label htmlFor="password">Password</label>
          <input id="password" type="text" />
          <button>LOGİN</button>
          <button id='google'>
            {"WITH"}
            <img src="" alt="" />
          </button>
        </LoginInput>
      </LoginBloc>
    </LoginCon>
  )
}

export default Login;
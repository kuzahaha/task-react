import React from 'react'
import {Redirect} from 'react-router-dom'
import './style2.css'
import Img from './assets/images/key-icon.png';

function handleOauth (){
  if((document.getElementById('email').value === "admin") && (document.getElementById('password').value ==='1234')){
    return <Redirect to = "/App" />
}
}
function Oauth(){
    return(
    <section id="oauth">
		<header class="oauth-top">
			<img src={Img} alt="key"/>
			<h2>Авторизация</h2>
		</header>
        <div className="oauth-middle">
        	<form >
        		<input id="email" type="login"/>
        		<input id="password"  type="password"/>
        		<input type="submit" onClick={() =>handleOauth()} name="submit" value="Войти"/>
        	</form>
        </div>
        <div className="oauth-bottom"></div>
	</section>
    )
}
export default Oauth;
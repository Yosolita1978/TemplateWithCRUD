

const Login = ({user}) =>{

    
    return (
        <nav>
        <ul>
            {!user ? (<li><a href="http://localhost:3001/login">LOGIN</a></li>)
            : (<li> Hello, {user.nickname}<a href="http://localhost:3001/logout">LOGOUT</a></li>)
            }
        </ul>
      </nav>

    )

}

export default Login;
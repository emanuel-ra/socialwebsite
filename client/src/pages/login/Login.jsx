import "./login.css";
import bg from "../../assets/login/bg.jpg"

function Login() {
  return (
    <main className="login">
      <section className="card">
        <div style={{background:`linear-gradient(to bottom, rgba(141, 110, 99,0.5), rgba(109, 76, 65,0.5)),url(${bg}) no-repeat`,backgroundSize:"cover"}} className={`left`} >
        
          <h1 className="text-8xl	">Hello World.</h1>
          
          <blockquote className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim odit nulla eum, tenetur quae obcaecati hic reiciendis cum optio quod esse pariatur cupiditate veniam? Amet quos eius ipsam odio?
          </blockquote>

          <span className="text-lg">Don't you have an account?</span>
          <button className="btn-register">Register</button>
        </div>

        <div className="right">
          <h2 className="text-6xl">Login</h2>
          <form action="">
            <input type="text" className="input-register" name="" id="" placeholder="Username" />
            <input type="password" className="input-register" name="" id="" placeholder="Password" />
            <button className="btn-login" >Login</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
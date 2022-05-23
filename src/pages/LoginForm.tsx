import React, { useState } from "react";
import Header from "../components/common/navigation/Header";
function LoginForm(props: any) {
  const [details, setDetails] = useState({ userName: "", password: "" });
  const manager = {
    userName: "admin",
    password: "admin",
  };
  const employee = {
    userName: "employee",
    password: "employee",
  };
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const loginListener = (details: any) => {
    console.log(details);

    if (userName == manager.userName || userName == employee.userName) {
      console.log("Logged In");
      props.setUserName(userName);
    } else console.log("Details do not match!");
  };

  return (
    <div>
      {/* <Header /> */}

      <div className="login">
        <h1>SCAD Login</h1>

        <input
                type="userName"
                name="userName"
                id="userName/"
                autoComplete="off"
                onChange={(e: any) => setUserName(e.target.value)}
                value={userName}
              ></input>
          <input
                type="password"
                name="password"
                id="password/"
                autoComplete="off"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
              ></input>
          <button  onClick={loginListener} className="btn btn-primary btn-block btn-large">
            Let me in.
          </button>

      </div>

      {/* <div className="login-wrapper">
        <form>
          <div className="form-inner ">
            <h2>Login</h2>
            <div className="form=group">
              <label htmlFor="userName">User Name:</label>
              <input
                type="userName"
                name="userName"
                id="userName/"
                autoComplete="off"
                onChange={(e: any) => setUserName(e.target.value)}
                value={userName}
              ></input>
            </div>
            <div className="form=group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password/"
                autoComplete="off"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>
            <button value="LOGIN" onClick={loginListener}>
              {" "}
              LOGIN{" "}
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default LoginForm;

import React from 'react'
import './Login.css'

export default function Login() {
    return (
       
                         <div className="container-fluid">
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Bertelsmann Challenge Cloud</h3>
              <form>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                  <label for="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input type="text" id="inputPassword" className="form-control" placeholder="Password" required/>
               
               <div className="32"><div className="30000000000"></div></div>   <label for="inputPassword">Slack Name</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                   
    )
}



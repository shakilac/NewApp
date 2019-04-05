import React, { Component } from "react";
import { render } from "react-dom";


export class Login extends Component {
  render() {
    return (
      <div className="container">
        <fieldset class="col-sm-6 border p-2">
          <legend class="w-auto">LOGIN</legend>
          <form>
            <div class="form-group">
              <label for="inputUserName" class="col-sm-2 col-form-label">Username</label>
              <input
                placeholder="Enter Username"
                type="text"
                id="inputUserName"
              />
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <input
                placeholder="Enter Password"
                type="password"
                id="inputPassword"
              />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </fieldset>
      </div>
    );
  }
}

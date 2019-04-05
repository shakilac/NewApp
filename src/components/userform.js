import React, { Component } from 'react';
import { render } from 'react-dom';

export class Register extends Component {
    render() {
        return (
            <div className="container">
                <fieldset class="col-sm-6 border p-2">
                    <legend class="w-auto">RegisterUser</legend>
                    <form>
                    <div class="form-group">
                            <label for="input" class="col-sm-3 col-form-label">First Name</label>
                            <input
                                placeholder="Enter First Name"
                                type="text"
                                id="inputFirstName"
                            />
                        </div>
                        <div class="form-group">
                            <label for="input" class="col-sm-3 col-form-label">Last Name</label>
                            <input
                                placeholder="Enter Last Name"
                                type="text"
                                id="inputLasttName"
                            />
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="col-sm-3 col-form-label">User Name</label>
                            <input
                                placeholder="Enter Username"
                                type="text"
                                id="inputUserName"
                            />
                        </div>
                        <div class="form-group">
                            <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
                            <input
                                placeholder="Enter Email"
                                type="text"
                                id="inputEmail"
                            />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                            <input
                                placeholder="Enter Password"
                                type="password"
                                id="inputPassword"
                            />
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                </fieldset>
                </div>
        );
    }
}
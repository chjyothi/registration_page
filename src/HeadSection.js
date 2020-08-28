import React from 'react'
import './HeadSection.css'
import { users } from './data'

export default function HeadSection() {
    
     function displayUsers() {
        
    }
    
    return (
        <div class="login">
          <form>
              <label>
                  Username:
                  <input type="text" name="username" />
              </label>
              <br />
              <label>
                  Password:
                  <input type="password" name="password" />
              </label>
              <br />
              <button type="submit" name="submit">Log In</button>
              <br />
              <a href="">Forgotten Account?</a>
              <br />
              <button>Create New Account</button>
          </form>
          <br/>
        <button name="displayUsers" onClick="display">Display all users</button>
        </div>
    )
}

import * as React from 'react';
import "../styles/style.scss";

export default class Login extends React.Component<IProps, IState> {
   constructor(props: IProps) {
      super(props);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.doLogin = this.doLogin.bind(this);
      this.state = {
         currentuserName: "",
         currentPassword: ""
      }
   }
   handleUsernameChange(text: string) {
      this.setState({currentuserName: text});
   }
   handlePasswordChange(password: string) {
      this.setState({currentPassword: password});
   }
   doLogin() {

   }
   render() : JSX.Element { return (
      <div className="login-form">
         <input type="text" value={this.state.currentuserName} onChange={(e) => this.handleUsernameChange(e.target.value)} />
         <input type="password" value={this.state.currentPassword} onChange={(e) => this.handlePasswordChange(e.target.value)} />
         <button onClick={() => this.doLogin()}>login</button>
      </div>
   )}
}

interface IState {
   currentuserName: string,
   currentPassword: string
}

interface IProps {
}
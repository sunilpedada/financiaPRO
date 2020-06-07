import React  from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import "./Login.css"

export default class RegisterLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            first_name:'',
            last_name:'',
            user_Type:0,
            phoneNumber:'',
            address:'',

        }
        this.singUpSubmit=this.singUpSubmit.bind(this);
        this.singInSubmit=this.singInSubmit.bind(this);
    }
    usernameHandler=(event) =>{
        this.setState({username:event.target.value});
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    phoneNoHandler=(event)=>{
        this.setState({phoneNumber:event.target.value})
    }
    addressHandler=(event)=>{
        this.setState({address:event.target.value})
    }
    singUpSubmit(){
        axios.defaults.xsrfCookieName='csrftoken';
        axios.defaults.xsrfHeaderName="X-CSRFToken";
        var csrftoken = Cookies.get('csrftoken');
        var userData={
            "username":this.state.username,
            "email": this.state.email,
            "password": this.state.password,
            "first_name": "",
            "last_name": "",
            "additional": {
                "user_type": this.state.user_Type,
                "phone_number":this.state.phoneNumber,
                "address": this.state.address
            }
        }
        const conf = {
            method: "post",
            url: 'user/',
            eaders:{"X-CSRFToken":csrftoken,"Content-Type":"application/json"},
            data:userData
          };
          axios(conf).then(response=>{
              if(response.status===201){
                  alert("you are registered please sing in");
                  location.href='/momo/';
              }
          }).catch(error=>{
            const singUpError=error.response["data"];
           var field,errorText="This field are requier :";
            for(field in singUpError){
                if(field.toLowerCase()==='additional'){
                    errorText+="phone number , address ";
                    break;
                };
                errorText+=field+" ";
            };
            alert(errorText);
            location.href='/momo/';
            console.log(singUpError);
          });
    }
    singInSubmit(){
    axios.defaults.xsrfCookieName='csrftoken'
    axios.defaults.xsrfHeaderName="X-CSRFToken"
    var csrftoken = Cookies.get('csrftoken');
        var data={
            "username":this.state.username,
            "email" :this.state.email,
            "password":this.state.password

        }
        const conf={
            method:"POST",
            url:"auth/login/",
            headers:{"X-CSRFToken":csrftoken,"Content-Type":"application/json"},
            data:data
        }
        axios(conf).then(response=>{
            this.props.history.push({pathname:"/view",state:this.state});
        }).catch(error=>{
            const singUpError=error.response["data"];
            console.log(singUpError);
           var field,errorText="This field are requier :";
            for(field in singUpError){
                if(field.toLowerCase()==='additional'){
                    errorText+="phone number , address ";
                    break;
                };
                errorText+=field+" ";
            };
            alert(errorText);
            location.href='/momo/';
            console.log(singUpError);
          });
        }
    render(){
        console.log("in login");
        return(
            <div className="SingUp-SingIn">
                <div className="row">
    <div className="col-md-6 mx-auto p-0">
        <div className="card">
            <div className="login-box">
                <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-space">
                        <div className="login">
                            <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="user" type="text" className="input" placeholder="Enter your username" onChange={this.usernameHandler} value={this.state.username}/> </div>
                            <div className="group"> <label htmlFor="email" className="label">Username</label> <input id="email" type="email" className="input" placeholder="Enter your Email" onChange={this.emailHandler} value={this.state.email}/> </div>
                            <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password"onChange={this.passwordHandler} value={this.state.password}/> </div>
                            <div className="group"> <input id="check" type="checkbox" className="check" defaultChecked/> <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label> </div>
                            <div className="group"> <input type="submit" className="button" value="Sign In" onClick={this.singInSubmit} /> </div>
                            <div className="hr"></div>
                            <div className="foot"> <a href="#">Forgot Password?</a> </div>
                        </div>
                        <div className="sign-up-form">
                            <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="user" type="text" className="input" placeholder="Create your Username" onChange={this.usernameHandler} value={this.username}/> </div>
                            <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" onChange={this.passwordHandler} value={this.password}/> </div>
                            <div className="group"> <label htmlFor="pass" className="label">Repeat Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password"/> </div>
                            <div className="group"> <label htmlFor="email" className="label">Email Address</label> <input id="email" type="email" className="input" placeholder="Enter your email address" onChange={this.emailHandler} value={this.email}/> </div>
                            <div className="group"> <label htmlFor="number" className="label">Phone Number</label> <input id="number" type="text" className="input" placeholder="Enter your phone number" onChange={this.phoneNoHandler} value={this.phoneNumber}/> </div>
                            <div className="group"> <label htmlFor="address" className="label">Address</label> <input id="address" type="text" className="input" placeholder="Enter your address" onChange={this.addressHandler} value={this.address}/> </div>
                            <div className="group"> <input type="submit" className="button" onClick={this.singUpSubmit} value="Sign Up"/> </div>
                            <div className="hr"></div>
                            <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}
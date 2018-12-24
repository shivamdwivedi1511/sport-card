import React,{Component} from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Viewer from '../components/Viewer';

firebase.initializeApp({
    apiKey: "AIzaSyBoDcEWgGfIXsYXYDGJZUGUTGmf7iZ5LSo",
    authDomain: "sport-card-generator.firebaseapp.com"
  })

class Login extends Component{

    state={
        isSignedIn:false ,
        userName:'',
        photoURL:'',
     }


     uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
      }



      componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user,
        
     })
          console.log("user", user)
        })
      }



     render(){
        
         return (this.state.isSignedIn?<span><div>
            <button className='btn waves-effect waves-light ' id='logout' onClick={() => firebase.auth().signOut()}>Logout</button>
               
               <Viewer name={firebase.auth().currentUser.displayName} photoURL={firebase.auth().currentUser.photoURL}/>
               </div></span>:(
             <StyledFirebaseAuth id='social'
               uiConfig={this.uiConfig}
               firebaseAuth={firebase.auth()}
             />
           ))
         
         
     }

}

export default Login;
import  AppBar  from './components/AppBar'
import './App.css'
import SignupPage from './components/Signup/SignupPage'

function App({type}) {

  return (
    
    <div>
      <AppBar/>
      <SignupPage type={type}/>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'

const App = () => {

  const [isLogin, setIsLogin] = useState(true)    

  return (
    <div className="bg-orange-100 flex justify-center items-center min-h-screen">
      {isLogin === true ? <Login setIsLogin={setIsLogin} isLogin={isLogin} /> : <Signup setIsLogin={setIsLogin} isLogin={isLogin} />}
    </div>
  )
}

export default App

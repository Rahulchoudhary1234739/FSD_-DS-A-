import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  })

  useEffect(()=>{
    console.log("form data update", formData)
  },[formData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });//Spread operator is used to copy the existing formData object and then update the specific field based on the input's name attribute. This way, we can handle multiple input fields with a single change handler.
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData)
  }

  return (
    <div>
      <form action="">                   
        <input type='text' name='name' placeholder='enter name' value={formData.name} onChange={handleChange}/>
        <br/>
        <input type='email' name='email' placeholder='enter your email' value={formData.email} onChange={handleChange}/>
        <br/>
        <input type='password' name='password' placeholder='enter your password' value={formData.password} onChange={handleChange}/>
        <br/>
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default App
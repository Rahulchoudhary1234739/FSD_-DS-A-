
import React from 'react'
const Student = () => {
  return (
    <div style={{ backgroundColor: 'lightgray', border: '2px solid black', height: '300px', width: '300px' }}>
      <h2 style={{ color: 'blue' }}>Student Info</h2>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/031/610/037/small/a-of-a-3d-cartoon-little-boy-in-class-world-students-day-images-ai-generative-photo.jpg" alt="Student" style={{ width: '100px', height: '100px' }} />
      <h3 style={{ color: 'green' }}>Name: John Doe</h3>
      <h3 style={{ color: 'green' }}>Age: 20</h3>
      <h3 style={{ color: 'green' }}>Grade: A</h3>
    </div>
  )
}

export default Student
import { useEffect } from 'react'
import AppBar from './AppBar'

const Dashboard = () => {
    useEffect(() => {
        const fetchData = async() => {
            // const response = await fetch('http://localhost:3000/admin/courses', {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer '+localStorage.getitem('token')
            //     }
            // })
        }

        fetchData()
    })
  return (
    <div>
      <AppBar/>
      <div>
        <h1>welocme to the dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard

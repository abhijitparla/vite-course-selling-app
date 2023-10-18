import { useEffect, useState } from 'react'
import ResponsiveAppBar from './ResposniveAppBar'
import { Box, Card, Typography } from '@mui/material'
import CourseCard from './CourseCard'

const Dashboard = () => {
    const [courses, setCourses] = useState({})
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch('http://localhost:3000/admin/courses', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+localStorage.getItem('token')
                    }
                })
                const data = await response.json();
                console.log(data)
                setCourses(data)
            } catch(error) {
                console.error("error fetching data", error)
            }
            

        }

        fetchData()
    }, [])
  return (
    <div >
    <ResponsiveAppBar/>
      <div>
        <h1>All Courses</h1>
      </div>
      <Box>
        
        {
            courses && courses.courses ? (
                <div>
                    {courses.courses.map((item) => {
                        return <CourseCard key={item.id} val={item}/>
                    })}
                </div>
                        
            ): (
                 <p>No courses available!</p>
            )
        }
        
      </Box>
      
    </div>
  )
}

export default Dashboard

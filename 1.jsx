import React from 'react'

const App = () => {
  const empData = [
  { id: 101, name: "Alice Smith", department: "Engineering", salary: 85000 },
  { id: 102, name: "Bob Jones", department: "HR", salary: 60000 },
  { id: 103, name: "Charlie Brown", department: "Engineering", salary: 95000 }
];
  return (
    <div>
      {
        empData.map((emp)=>(
          <>
          <h2>{emp.name}</h2>
          <h2>{emp.salary}</h2>
          <h2>{emp.department}</h2>
          </>
        ))
      }
    </div>
  )
}

export default App
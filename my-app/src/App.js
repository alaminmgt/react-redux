import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello this is testing for git</h1>
      <Routes>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  )
}

export default App

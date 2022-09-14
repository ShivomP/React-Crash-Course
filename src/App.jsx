import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Users from './pages/Users'


function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users/:id" element={<Users/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;








// import Todo from './components/Todo'
// import Title from './components/Title';
// import Modal from './components/Modal';
// import React, {useState, useEffect} from 'react'
// import Counter from "./components/Counter"

// const [showModal, setShowModal] = useState(false)


// function onTodoDelete(){
//   setShowModal(true)
//   console.log('onTodoDelete()')
// }

// function onCancel(){
//   setShowModal(false)
//   console.log('canceled')
// }

// function onConfirm(){
//   setShowModal(false)
//   console.log('confirmed')
// }

// useEffect(() => {
//   console.log('Only on mount')
// }, [])

// useEffect(() => {
//   console.log(`on mount and on ${showModal} change`)
// }, [showModal])

// useEffect(() => {
//   console.log('every render this will run')
// })
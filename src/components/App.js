import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Inputs from './components/Inputs'
import Output from './components/Output'

function App() {
  const [person, setPerson] = useState([{name:"", surname:"", image:""}])
  const [skills, setSkills] = useState([])
  const [value, setValue]=useState([])

  function addPerson(elm){
    let temp = [...person]
    temp.splice(0)
    temp.push(elm)
    setPerson(temp)
  }

  function addSkills(){
    let temp = [...skills]
    temp.push("")
    setSkills(temp)
  }

  function skillValue(elm,i){
    let item=[...value]  
    item[i]=elm
    setValue(item)
  }

  return (
    <div className="row">
      <Inputs skills = {skills} person = {person} addSkills = {addSkills} addPerson = {addPerson} skillValue = {skillValue} />
      <Output mard = {person} skills = {value} />
    </div>
  );
}

export default App;

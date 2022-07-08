import logo from './logo.svg';
import './App.css';
import Student from './student.js'
import Counter from './counter';
import { useState } from 'react';
function App() {
  const students = [
    { Id: 1, Name: 'sally', Course: 'react', Src: 'https://previews.123rf.com/images/f8studio/f8studio1705/f8studio170500306/77508097-female-college-student-happy-girl-in-european-university-for-scholarship-uni.jpg' },
    { Id: 2, Name: 'bruce', Course: 'angular', Src: 'https://www.gov.il/BlobFolder/generalpage/students_eligibility/en/students.jpg' },
    { Id: 3, Name: 'kelly', Course: 'math', Src: 'https://gradepowerlearning.com/wp-content/uploads/2018/12/Young-student-smiling-holding-books.-860x420.jpeg' }
  ]
  const [counterStudents, setStudentCounter] = useState(0)
  const [punchline, setpunchline] = useState('')
  const [picture, setpicture] = useState('')
  const [studentsList,setStudentsList]= useState(students)
  const alertPop = (id, name, course, src) => {
    setStudentCounter(counterStudents + 1)
    alert('id:'+id+' name:'+name + ' takes courses:' + course)
    setpicture(src)
    if ((counterStudents + 1) % 5 == 0) { setpunchline('!') }
    else { setpunchline('') }
    studentsList.push({ Id:studentsList.length+1,Name:name,Course:course,Src:src})
    setStudentsList(studentsList)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h2>students pressed: {counterStudents}{punchline}</h2>
        </div>
        <div className='studentsCenter'>
          <div>
            {studentsList.map(student=> <Student key={student.Id} id={student.Id} name={student.Name} course={student.Course} Src={student.Src} href='' onAlert={alertPop}></Student>)}
          </div>
          <div>
            <img src={picture}></img>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;

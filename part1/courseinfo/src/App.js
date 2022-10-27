
const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.part}</p>
      <p>{props.exercise}</p>
    </>
  )
}

const Content = ({parts}) => {
  
  return (
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercise}/>
      <Part part={parts[1].name} exercise={parts[1].exercise}/>
      <Part part={parts[2].name} exercise={parts[2].exercise}/>
    </div>
  )  
}

const Total = ({parts}) => {
  return(
    <>
      <p>{parts[0].exercise + parts[1].exercise + parts[2].exercise}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App

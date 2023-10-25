import { Link } from "react-router-dom"
export function Navigation() {
  return (
    <div>
        <Link to='/'><h1>task app</h1></Link>
        <Link to='/tasks-create'>create task</Link>
    </div>
  )
}


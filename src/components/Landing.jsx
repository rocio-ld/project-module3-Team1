import {Link} from 'react-router-dom';


function Landing() {
  return (
    <main>
      <h3>PROYECTOS MOLONES</h3>
      <Link to='/create'>crear proyecto</Link>
    </main>
  )
}

export default Landing
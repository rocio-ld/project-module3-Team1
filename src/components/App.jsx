import '../scss/App.scss';

import Header from './Header';
import SectionProject from './SectionProject';
import Card from './Card';
//import Form from './Form';
import Footer from './Footer';
import ButtonImage from './ButtonImage';
import { useState } from 'react';


function App() {
  //estados de los inputs
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('');
  const [desc, setDesc] = useState('');
  const [autor, setAutor] = useState('');
  const [job, setJob] = useState('');


  const handleChangeForm = (event)=>{
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value
    console.log(id);
    if (id === 'name'){
      setName(value);
    } else if (id === 'slogan'){
      setSlogan(value);
    } else if (id === 'repo'){
      setRepo(value);
    } else if (id === 'demo'){
      setDemo(value);
    } else if (id === 'technologies'){
      setTech(value);
    } else if (id === 'desc'){
      setDesc(value);
    } else if (id === 'autor'){
      setAutor(value);
    } else if (id === 'job'){
      setJob(value);
    }
  }

  return (
    <div className="container">
    <Header /> 
    
    <main className="main">
      <SectionProject />
      <Card name={name} slogan={slogan} repo={repo} demo={demo} tech={tech} desc={desc} autor={autor} job={job} />
     {/*<Form />*/} 
      <form className="addForm" onChange={handleChangeForm}>
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto"/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan"/>
          <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo"/>
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre"/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"/>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <ButtonImage  text="Subir foto del proyecto" id="imageProject" />
         
          <ButtonImage  text="Subir foto de la autora" id="imageAutor" />
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
        
      </form>
    </main> 
    <Footer />
  </div>
  )
}

export default App;




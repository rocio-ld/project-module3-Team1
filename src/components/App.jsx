import '../scss/App.scss';

import Header from './Header';
import SectionProject from './SectionProject';
import Card from './Card';
//import Form from './Form';
import Footer from './Footer';
import ButtonImage from './ButtonImage';
import { useState } from 'react';
import ButtonSave from './ButtonSave';


function App() {
  //estados de los inputs
  const [form, setForm]= useState({
    name:"",
    slogan:"",
    repo:"",
    demo:"",
    tech:"",
    desc:"",
    autor:"",
    job:""})
 



  const handleChangeForm = (event)=>{
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value
    console.log(id);
    if (id === 'name'){
      setForm({...form,name:value});
    } else if (id === 'slogan'){
      setForm({...form,slogan:value});
    } else if (id === 'repo'){
      setForm({...form,repo:value});
    } else if (id === 'demo'){
      setForm({...form,demo:value});
    } else if (id === 'technologies'){
      setForm({...form,tech:value});
    } else if (id === 'desc'){
      setForm({...form,desc:value});
    } else if (id === 'autor'){
      setForm({...form,autor:value});
    } else if (id === 'job'){
      setForm({...form,job:value});
    }
  }

  return (
    <div className="container">
    <Header /> 
    
    <main className="main">
      <SectionProject />
      <Card form={form}/>
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
          <ButtonSave />
        </fieldset>
        
      </form>
    </main> 
    <Footer />
  </div>
  )
}

export default App;




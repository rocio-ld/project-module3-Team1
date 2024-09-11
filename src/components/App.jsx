import '../scss/App.scss';


import Header from './Header';
import SectionProject from './SectionProject';
import Card from './Card';
//import Form from './Form';
import Footer from './Footer';
import Form from './Form';
import { useState } from 'react';



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
 


// este es un evento que pasaremos por prop al componente de Form
  const changeForm = (event)=>{
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
     <Form changeForm={changeForm}/>
      
    </main> 
    <Footer />
  </div>
  )
}

export default App;




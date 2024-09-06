
function Card(props){
    return(
        <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">{props.job || 'Full Stack Developer'}</p>
            <h3 className="card__name">{props.autor || 'Emmelie Björklund'}</h3> 
          </div>
      
          <div className="card__project">            
            <h3 className="card__name">{props.name || 'Elegant Workspace'}</h3>
            <p className="card__slogan">{props.slogan || 'Diseños Exclusivos'}</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">{props.desc ||'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Amet faucibus commodo tellus lectus lobortis. Ultricies lacus, facilisis arcu ac mauris, laoreet sit.'}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{props.tech || 'React JS - HTML- CSS'}</p>
          
              <a className="icon" href={props.demo} title="Haz click para ver el proyecto online">
              <i className="fa-solid fa-globe emoji"></i>
              </a>
              <a className="icon" href={props.repo} title="Haz click para ver el código del proyecto"> <i className="fa-brands fa-github emoji"></i>
              </a>
            </div>
          </div>
        </article> 
      </section>


    )
}
export default Card;
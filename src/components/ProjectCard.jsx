import projectImage from '../assets/project-image.png'

const ProjectCard = () => {
  return ( 
    <div className="recent-work-card">
      <div className="card-image">
        <img src={projectImage} alt="project-image" />
      </div>

      <div className="card-icons">
        <a><i className="fa-brands fa-github"></i></a>
        <a><i className="fa-brands fa-chrome"></i></a>
      </div>

      <h4>Personal Portfolio</h4>
      <p>HTML | CSS</p>
    </div>
   );
}
 
export default ProjectCard;
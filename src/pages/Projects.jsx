import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {

  return ( 
    <section id="projects">
      <center><h2>My Recent Works</h2></center>
      
      <div className="flex-container">
        {[1,2,3,4,5,6].map(item => <ProjectCard key={item} />)}
      </div>
    </section>
   );
}
 
export default ProjectsPage;
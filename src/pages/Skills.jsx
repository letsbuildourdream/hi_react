const SkillsPage = () => {
  
  return ( 
    <section id="skills">
      <center><h2>Skills</h2></center>
      <div className="flex-container skills-container">
        <div>
          <i className="fa-brands fa-html5"></i>
          <p>HTML</p>
        </div>

        <div>
          <i className="fa-brands fa-css3-alt"></i>
          <p>CSS</p>
        </div>

        <div>
          <i className="fa-brands fa-js"></i>
          <p>JS</p>
        </div>

        <div>
          <i className="fa-brands fa-square-github"></i>
          <p>Github</p>
        </div>

        <div>
          <i className="fa-brands fa-figma"></i>
          <p>Figma</p>
        </div>
      </div>
    </section>
   );
}
 
export default SkillsPage;
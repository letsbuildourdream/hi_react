const AboutPage = () => {
  
  return ( 
    <section className="about-me-section" id="about">
      <center><h2>About Me</h2></center>

      <div className="flex-container about-me-container">
        <div><img src="./assets/profile-image.png" alt="profile-image" /></div>
        
        <div className="bio-container">
          <h4>Dented Code</h4>
          <p>Narendra Sunar is a seasoned full-stack engineer 
          with expertise in React, Ruby on Rails, and 
          Node.js, spanning over 6 years in software 
          development. Passionate about impactful 
          web applications, he mentors junior developers
          with enthusiasm, finding it a rewarding 
          investment of his time. Narendra's teaching 
          extends to HTML and CSS basics, where he 
          employs interactive methods like hands-on 
          coding and PowerPoint slides. Recently, 
          he's delved into CSS animations and 
          integrating tools like Intro.js into React 
          applications. With a knack for detail, 
          Narendra refines his coding style with 
          features like Flow for type checking, 
          demonstrating a commitment to robust and 
          efficient development practices.
          </p>
        </div>
      </div>
    </section>
   );
}
 
export default AboutPage;
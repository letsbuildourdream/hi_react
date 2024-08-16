import profileImage from '../assets/profile-image.png'

const HomePage = () => {
  return ( 
    <>
      <section id="home">
      <div className="grid-container hero-section">
        <div className="intro-text">
          <p>Hi I am <b>Dented Code</b></p>
          <p><b>Software Engineer</b></p>
          <br />

          <p>I love Coding!</p>

          <a href="./assets/portfolio.pdf" download>
            <button className="download-btn">
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>

        <div className="image-grid-item">
          <img src={profileImage} alt="profile-image" />
        </div>
      </div>
    </section>
    {/* <!-------------------------------> */}

    {/* <!---Summary Section------> */}
    <section>
      <div className="flex-container summary-container">
        <div className="flex-container">
          <i className="fa-solid fa-award"></i>
          <div>
            <span>IT</span>
            <p>Graduate</p>
          </div>
        </div>

        <div className="vertical-line">|</div>

        <div className="flex-container border-horizontal">
          <i className="fa-solid fa-award"></i>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>

        <div className="vertical-line">|</div>

        <div className="flex-container">
          <i className="fa-solid fa-award"></i>
          <div>
            <span>1 Year</span>
            <p>Experience</p>
          </div>
        </div>
      </div>
    </section>
    </>
   );
}
 
export default HomePage;
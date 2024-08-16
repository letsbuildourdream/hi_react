const ContactPage = () => {
  return ( 
    <section id="contact">
      <center>Get In Touch</center>
      <div className="flex-container get-in-touch-container">
        <a><i className="fa-brands fa-linkedin"></i></a>
        <a><i className="fa-brands fa-square-github"></i></a>
        <a href=""><i className="fa-brands fa-youtube"></i></a>
        <a href="tel:0413705873"><i className="fa-solid fa-mobile"></i></a>
      </div>

      <center>OR</center>
      <div className="send-email-container">
        <a href="mailto:myemail@gmail.com">
          <button className="download-btn">
            myemail@gmail.com <i className="fa-solid fa-paper-plane"></i>
          </button>
        </a>
      </div>
    </section>
   );
}
 
export default ContactPage;
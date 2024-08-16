const DarkModeSwitch = () => {
  
  return ( 
    <>
      <label htmlFor="dark-mode" className="dark-mode-toggle">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="dark-mode" />
    </>
   );
}
 
export default DarkModeSwitch;
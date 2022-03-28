import './App.css';

function Logout() {
  return (
    <div>
      {localStorage.clear()}
      <h1>You have been logged out!</h1>
    </div>
  );
}
// At end, export. 
// Something that can be rendered in browser (html)
export default Logout;

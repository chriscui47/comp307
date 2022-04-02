import { Link } from 'react-router-dom';
import './App.css';
import styles from './Logout.module.css';
import LinkLogin from "./LinkLogin";
function Logout() {
  return (
    <div className={styles.main}>
      {localStorage.clear()}
      You have been logged out!
      <LinkLogin />
    </div>
   
  );
}
// At end, export. 
// Something that can be rendered in browser (html)
export default Logout;

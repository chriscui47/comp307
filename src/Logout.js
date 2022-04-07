import './App.css';
import styles from './Logout.module.css';
import LinkLogin from "./LinkLogin";
function Logout() {
  return (
    <div className={styles.main}>
      {localStorage.clear()} {/** Clear local storage upon logging out. */}
      You have been logged out!
      <LinkLogin />
    </div>
   
  );
}
export default Logout;

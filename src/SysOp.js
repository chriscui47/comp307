import CourseMaker from "./CourseMaker";
import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin";
import Register from "./Register";
import styles from "./SysOp.module.css";
import React, { useState } from 'react';

function SysOp() {
    const [showRegister, setRegister] = useState(false);
    const [showDelete, setDelete] = useState(false);
    const [showManual, setManual] = useState(false);
    return (
        
        <div>
            {isSysOp() ? 
                <div className={styles.screen}>
                <div className={styles.child}>
               <h2>Manual Import Prof + Course</h2>
                <CourseMaker />
                    

                </div>
                <div className={styles.child}>
                    <h2>Import Prof and Course</h2>
                   
                </div>
                <div className={styles.child}>
                    <button className={styles.button} onClick={
                        function() {
                            if (showRegister) {
                                setRegister(false);
                                return;
                            }
                            setRegister(true);
                        }
                    }><h2>Add a User</h2></button>
                    {showRegister && 
                    <div className={styles.reg}>
                    <Register /> </div>}
                    <button className={styles.button} onClick={
                        function() {
                            if (showDelete) {
                                setDelete(false);
                                return;
                            }
                            setDelete(true);
                        }
                    }><h2>Remove a User</h2></button>
                    {showDelete && 
                    <div className={styles.reg}>
                    
                        Remove.
                    </div>}
                </div>

                
                



                </div>
            : <LinkLogin/>}
        </div>
    )
  
}

export default SysOp;
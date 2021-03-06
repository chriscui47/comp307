import CourseMaker from "./CourseMaker";
import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin";
import Register from "./Register";
import styles from "./SysOp.module.css";
import React, { useState } from 'react';
import FileUpload from "./FileUpload";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

function SysOp() { // SysOp component with different features added
    const [showRegister, setRegister] = useState(false);
    const [showDelete, setDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    return (
        
        <div>
            {isSysOp() ? // Conditionally render given is sysop
                <div className={styles.screen}>
                <div className={styles.child}>
               <h2>Manual Import Prof + Course</h2>
                <CourseMaker />
                    

                </div>
                <div className={styles.child}>
                   <FileUpload />
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
                        <DeleteUser />
                    </div>}
                   <button className={styles.button} onClick = {() => setShowEdit(!showEdit)}>
                   <h2>Edit a User</h2>
                   </button>
                    {showEdit &&
                        <div className={styles.reg}>
                            <EditUser />
                        </div>
                    }
                </div>
                </div>
            : <LinkLogin/>}
        </div>
    )
  
}

export default SysOp;
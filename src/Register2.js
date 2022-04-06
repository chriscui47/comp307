import { useState } from 'react';

function Register() {
        var permissions = Array.from({length: 5}, (v, i) => 0); // Set all to zero.
        
        // Checking what stage of registration depending on how user has interacted with page.
        const [stageOneCompleted, setStageOne] = useState(false);
        const [verified, setVerified] = useState(false);
        const [registered, setRegistered] = useState(false);
        
        // Getting values of information.
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");
        const [fname, setFname] = useState("");
        const [lname, setLname] = useState("");
        const [studentID, setStudentID] = useState(-1);
        const [email, setEmail] = useState("");


        // References for getting fields filled out.
        const userNameRef= useRef();
        const passWordRef = useRef();
        const firstNameRef = useRef();
        const lastNameRef= useRef();
        const studentIDRef = useRef();
        const emailRef = useRef();
        

        function getClicked(i) {
            if (permissions[i]==0) {
                permissions[i]=1;
                return;
            }
            permissions[i]=0;
        }

        function stageOne(e) {
            e.preventDefault();
            
            

            // If not Prof or TA
            if (permissions[1] != 0 && permissions[2] != 0) {
                // Set data and verified true
                setVerified(true);
            }       
            // Check if in system.

            if (verified) { // & data is not NULL. Set form.
                // Set all values.
            }
           
            setStageOne(true);
        }

        function completeRegistration(e) {
            e.preventDefault();


            // Send data to server to add user.
            // If good, then go to login.

            setRegistration(true);
        }
    return (
        registered ? (<Navigate push to="/"/>) :
        <div>
            {/* In stage one*/ }
            {!stageOneCompleted && <div>
            Enter Username and roles. < br />
            <form onSubmit={stageOne}>
            Username <br />
            <input type="text" required id='username' ref={userNameRef}></input> <br />
            

            <input type="checkbox" id="student" name="student" onClick={() => getClicked(0)}></input> Student<br />
            <input type="checkbox" id="ta" name="ta" onClick={() => getClicked(1)}></input> TA <br />
            <input type="checkbox" id="prof" name="prof" onClick={() => getClicked(2)}></input> Professor<br />
            <input type="checkbox" id="admin" name="admin" onClick={() => getClicked(3)}></input> TA Administrator<br />
            <input type="checkbox" id="sysop" name="sysop" onClick={() => getClicked(4)}></input> System Operator<br />

            <br />
            <button>Continue Registration</button>
            </form>
            </div>}

            {(stageOneCompleted && !verified) && // Not registered properly.
            <div>
                <LinkLogin />
            </div>
            }
            {
                (stageOneCompleted && verified) && // Here, allow to finish registration
                <div> 
                    Hello, {userNameRef.current.value}, please finish your registration/verify this information. <br />
                    <form onSubmit={completeRegistration}>
                        First Name <br />
                        <input type="text" required id='fname' ref={firstNameRef}>{fname}</input> <br />
                        Last Name <br />
                        <input type="text" required id='lname' ref={lastNameRef}>{lname}</input> <br />
                        Student ID <br />
                        <input type="number" required id='id' ref={studentIDRef}>{studentID}</input> <br />
                        Password <br />
                        <input type="text" required id='password' ref={passWordRef}></input>
                        <br />
                        Email <br />
                        <input type="text" required id='email' ref={emailRef}>{email}</input> <br />

                        <button>Complete Registration</button>
                    </form>
                </div>

                
            }

        </div>
    )

}

export default Register;
import Course from "./Course";

const COURSES = [
    { 
        code: "COMP202",
        prof: "Vybihal",
        term: "winter",
    },
    {
        code: "COMP250",
        prof: "Robillard",
        term: "summer"
    }
]

function Dashboard() {
    return (
        <section>

            <h2>Select a course:</h2>

        {
            COURSES.map((course) => <Course key={course.code} code={course.code} professor = {course.prof} term={course.term}/>)
        
        }
        </section>
        
    

    );
    
}
export default Dashboard;
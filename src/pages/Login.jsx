// import Template from "../components/Template"
import Template from "../components/Template"

export default function Login({setIsLoggedIn}) {
    return(
        <Template 
            title="Welcome back!"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            formType="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}
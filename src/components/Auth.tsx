import { Link } from "react-router-dom"
import Label from "./Label"
import { useState } from "react"
import { SignupInput } from "@mishrayush/medium-common-cohort"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

const Auth = ({type} : {type: "Signup" | "Signin"}) => {

    const navigate = useNavigate();

    // Passing the types from common folder for the sake of right data transfer to BE
    // ** New way to initialise state variable **
    const [signUpInputs, setSignUpInputs] = useState<SignupInput>({
        email : "",
        name : "",
        password : ""
    })

    // TODO : Rename the signUpInputs to postInputs as these will be used on both signUp and signIn 
    const sendRequest = async () => {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "Signup" ? "signup" : "signin"}`, signUpInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate('/blogs');
        }catch(e){
            console.log(e);
            
        }

    }

    return (
        <div className=" h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div>
                <div className="px-10">
                    <div className="text-3xl font-bold ">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        {type === "Signup" ? "Already have an account?" : "Don't have an account?"}
                        <Link to={type === "Signup" ? '/signin' : '/signup'}><span className="underline ml-2">{type === "Signup" ? "Login" : "Register"}</span></Link>
                    </div>
                </div>
                <div className="pt-4">
                    <Label label="Email" placeholder="mishrayush@gmail.com" onChange={(e) => {
                        // ...signUpInputs --> This is used to copy the prev data of the object signUpInput and then we are overwriting the email feild to the latest email feild. This makes sure that no other data is disturbed and only a particular feild is updated/changed
                        setSignUpInputs({
                            ...signUpInputs,
                            email : e.target.value
                        })
                    }}/>

                    {type === "Signup" ? <Label label="Username" placeholder="mishrayush0315" onChange={(e) => {
                        setSignUpInputs({
                            ...signUpInputs,
                            name : e.target.value
                        })
                    }}/> : null}

                    <Label label="Password" type={"password"} placeholder="abcd1234" onChange={(e) => {
                        setSignUpInputs({
                            ...signUpInputs,
                            password : e.target.value
                        })
                    }}/>

                    <button onClick={sendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type}</button>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Auth

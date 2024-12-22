import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        {/* TODO : Learn this Tailwind css code "flex flex-col justify-center" */}
        <Link to={"/blogs"}>
        <div className="font-semibold text-xl flex flex-col justify-center cursor-pointer">
            Medium
        </div>
        </Link>
        <div>
            <Link to={"/publish"}>
            <button type="button" className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2">New</button>
            </Link>
            {/* TODO : Create a route in BE to fetch user's data and make the Avatar component dynamic */}
            <Avatar authorName="Medium"/>
        </div>
    </div>
}
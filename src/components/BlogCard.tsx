import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardInputs {
    id : string;
    author : string;
    title : string;
    content : string;
    publishedData : string
}

export const BlogCard = ({
    id,
    author,
    title,
    content,
    publishedData
} : BlogCardInputs) => {

    
    return <Link to={`/blog/${id}`}><div className=" my-16 cursor-pointer">
        <div>
            <Avatar authorName={author}/> <span className="font-extralight text-md text-black pl-2">{author}</span> &#9679; <span className="font-thin text-slate-500">{publishedData}</span>
        </div>
        <div className="font-semibold text-2xl mt-4  ">
            {title}
        </div>
        <div className="font-thin text-md ">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-sm text-slate-500 mt-4  ">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
        <div className="border-slate-300 border-t mt-4">
        </div>
    </div>
    </Link>
}
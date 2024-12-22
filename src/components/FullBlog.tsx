import {Blog} from "../hooks/useBlogs"
import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar";


export const FullBlog = ({blogData} : {blogData : Blog}) => {
    return (
        <div>
            <Appbar/>
            <div className="grid grid-cols-12 px-28 w-full pt-28">
                <div className="grid col-span-8">
                    <div className="text-4xl font-extrabold">
                        {blogData.title}
                    </div>
                    <div className="text-xl font-normal mt-10">
                        {blogData.content}
                    </div>
                </div>
                <div className="grid col-span-4 ml-10 ">
                    <div className="text-lg hidden md:block">
                        Author
                    </div>
                    <div className="flex gap-5 ">
                        <div className="ml-10  justify-center hidden md:block">
                            <Avatar authorName={blogData.author.name}/>
                        </div>
                    <div className="text-xl font-semibold justify-center hidden md:block">
                        {blogData.author.name}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

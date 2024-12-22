import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks/useBlogs"





const Blogs = () => {

    const {loading, blogs} = useBlogs();
    

    if(loading) return <div>
        <Appbar/>
        <div className="flex justify-center ">
        <div>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        </div>
    </div>
    </div>

    return (
        <div>
            <Appbar/>
        <div className="flex justify-center">
            
        <div className=" max-w-xl">
            {blogs.map((blog, index)=> {
                return <BlogCard
                id={blog.id}
                key={index}
                author={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedData="12/12/2004"
            />
            })}
        </div>
        </div>
        </div>
)
}

export default Blogs

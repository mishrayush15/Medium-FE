import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface Blog {
    id : string;
    content : string;
    title : string;
    author : {
        name : string;
    };
    
}

export const useBlog = ({id} : {id : string}) => {

    const [loading, setloading] = useState(true)
    const [blogData, setBlogData] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/search/${id}`, {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogData(response.data.blogData)
            setloading(false)
        })
    }, [id])
    


    return {
        loading,
        blogData
    }
}
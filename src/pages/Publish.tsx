import { useState } from "react";
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";

interface blog { 
    title : string;
    content : string
}

export const Publish = () => {

    const [blogInputs, setBlogInputs] = useState<blog>({
        title : "",
        content : ""
    })

    const createBlog = async () => {
        try{const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title : blogInputs.title,
            content : blogInputs.content
        }, {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        })
        alert("Blog published successfully!")
        setBlogInputs({
            title : "",
            content : ""
        })
        }catch(e){
            alert("Unable to publish at the moment!")
            
        }
    }
    


    return (
        <div>
            <Appbar/>
        <div className="p-28">
        <div className="">
            <input
                onChange={(e)=>{
                    setBlogInputs({
                        ...blogInputs,
                        title: e.target.value
                    })
                }}
                value={blogInputs.title}
                type="text"
                className="bg-white w-full text-4xl font-bold  text-black focus:border-gray-500 outline-none mb-4"
                placeholder="Title"
            />
        </div>
        <div className=" px-14 mt-5">
            <div className="bg-gray-500 border-b border-0">

            </div>
        </div>
        <div>
            <textarea
                onChange={(e)=> {
                    setBlogInputs({
                        ...blogInputs,
                        content : e.target.value
                    })
                }}
                value={blogInputs.content}
                className="bg-white w-full h-60 text-lg border-none text-black outline-none resize-none leading-7 focus:ring-0 mt-10"
                placeholder="Write your story..."
            ></textarea>
        </div>
        <div className="mt-10">
                    <button onClick={createBlog} className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                        Publish
                    </button>
                </div>
        </div>
        </div>
    );
};

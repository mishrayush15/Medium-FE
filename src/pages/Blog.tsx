import { useBlog } from '../hooks/useBlog'
import { FullBlog } from '../components/FullBlog'
import { useParams } from 'react-router-dom'
import { Skeleton } from '../components/Skeleton';
import { Appbar } from '../components/Appbar';

const Blog = () => {

  const { id } = useParams();

  const { loading, blogData } = useBlog({
    id : id || ""
  });
  

  if(loading)return <div>
    <Appbar/>
    <div className="flex justify-center items-center w-full h-screen">
  <Skeleton />
</div>
</div>



  return (
    <div>
      <FullBlog blogData={blogData}/>
    </div>
  )
}

export default Blog

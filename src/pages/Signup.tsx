import Auth from "../components/Auth"
import Quote from "../components/Quote"

const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="Signup"/>
        </div>
        <div className="lg:block hidden ">
          <Quote/>
        </div>
      </div>
    </div>
  )
}

export default Signup

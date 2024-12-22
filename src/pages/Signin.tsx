import Auth from "../components/Auth"
import Quote from "../components/Quote"

const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <Auth type="Signin"/>
        </div>
        <div className="lg:block hidden ">
          <Quote/>
        </div>
      </div>
    </div>
  )
}

export default Signin

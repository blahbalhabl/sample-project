import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icons } from "../utils/icons"

const Footer = () => {
  return (
    <div className="bottom-0 flex p-10 px-20 items-center bg-blue-900 h-max w-full text-white flex-col sm:justify-around sm:flex-row">
      <div className="mx-2">
        <span className="text-3xl font-thin">
          <FontAwesomeIcon icon={icons.pills }/>
        </span>
        <h3 className="text-xl font-bold my-3">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="my-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quas minima dolore facere non sequi et quia, dolores eum labore?</p>
        <p className="my-3 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis recusandae alias earum ea facere sed commodi accusamus autem unde?</p>
        <span className="my-2 text-sm">
          <Link
            className="mr-5 font-bold hover:text-yellow-400"
            to={'/license'}>
            License
          </Link>
          <Link
            className="mr-5 font-bold hover:text-yellow-400"
            to={'/terms-of-service'}>
            Terms of Service
          </Link>
          <Link
            className="mr-5 font-bold hover:text-yellow-400"
            to={'/privacy-policy'}>
            Privacy Policy
          </Link>
        </span>
      </div>
      <div className="mx-2">
        <h3 className="text-xl font-bold">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="my-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quas minima dolore facere non sequi et quia, dolores eum labore?</p>
        <p className="my-3 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis recusandae alias earum ea facere sed commodi accusamus autem unde?</p>
      </div>
      <div className="mx-2">
        <h3 className="text-xl font-bold">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="my-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quas minima dolore facere non sequi et quia, dolores eum labore?</p>
        <p className="my-3 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis recusandae alias earum ea facere sed commodi accusamus autem unde?</p>
      </div>
    </div>
  )
}

export default Footer
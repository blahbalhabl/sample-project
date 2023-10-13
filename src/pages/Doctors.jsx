import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Doctors = ({ auth }) => {

	const navigate = useNavigate();

	useEffect(() => {
    !auth ? navigate('/') : null;
  }, []);

  return (
    <div>Doctors</div>
  )
}

export default Doctors
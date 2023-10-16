import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Doctors = () => {
  const { auth } = useAuth(); 
	const navigate = useNavigate();

	useEffect(() => {
    !auth ? navigate('/') : null;
  }, []);

  return (
    <div>Doctors</div>
  )
}

export default Doctors
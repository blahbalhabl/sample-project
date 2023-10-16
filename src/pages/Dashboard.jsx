import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  // useEffect(() => {
  //   !auth ? navigate('/') : null;
  // }, [ auth ]);

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
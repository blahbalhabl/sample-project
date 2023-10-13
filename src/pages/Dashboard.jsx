import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Dashboard = ({ auth }) => {

  const navigate = useNavigate();

  useEffect(() => {
    !auth ? navigate('/') : null;
  }, []);

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
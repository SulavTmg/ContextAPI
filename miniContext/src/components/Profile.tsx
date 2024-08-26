import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {

    const userContext = useContext(UserContext);

    if(!userContext){
        throw new Error("useContext must be used within a UserContextProvider");
    }

    const {user} = userContext;

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.userName}</div>;
};

export default Profile;

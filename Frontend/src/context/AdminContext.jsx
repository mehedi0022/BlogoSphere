import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const backendURL = "http://localhost:5500";

  const [post, setPost] = useState([]);
  const getPost = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/all-post");
      if (data.success) {
        setPost(data.post);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    aToken,
    setAToken,
    backendURL,
    post,
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(post);

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;

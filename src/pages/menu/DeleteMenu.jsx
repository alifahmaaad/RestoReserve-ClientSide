import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorLabel from "../../assets/components/ErrorLabel";
import { useSelector } from "react-redux";
import SuccessLabel from "../../assets/components/SuccessLabel";

const DeleteMenu = () => {
  const param = useParams();
  const [errorMsg, setError] = useState([]);
  const [successMsg, setSuccess] = useState([]);
  const navigate = useNavigate();
  const { token, dataUser } = useSelector(
    (state) => state.dataUserResponseRedux,
  );
  useEffect(() => {
    dataUser != "" ? handleDelete() : navigate("/login");
  }, []);
  const handleDelete = async () => {
    await axios
      .delete(
        `${import.meta.env.VITE_HOST_URL}/api/menu/restaurant/delete/${
          param.id
        }`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      )
      .then((res) => {
        setSuccess([...successMsg, res.data.message]);
        if (res.data.status) {
          setTimeout(() => {
            navigate(-1);
          }, 1500);
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.code == "ERR_NETWORK") {
          setError([...errorMsg, e.message]);
        } else if (
          typeof e.response.data != "object" &&
          e.response.status == 403
        ) {
          navigate("/login");
        }
      });
  };
  return (
    <>
      <SuccessLabel successMsg={successMsg} />
      <ErrorLabel errorMsg={errorMsg} func={() => navigate(-1)} />
      <div className="flex h-screen  w-full items-center justify-center gap-2">
        <p className="text-sm font-bold">Deleting</p>
        <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-black" />
      </div>
    </>
  );
};

export default DeleteMenu;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessLabel from "../../assets/components/SuccessLabel";
import ErrorLabel from "../../assets/components/ErrorLabel";
import Loading from "../../assets/components/Loading";
import { useSelector } from "react-redux";

const MenuForm = () => {
  const { token, dataUser } = useSelector(
    (state) => state.dataUserResponseRedux,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setError] = useState([]);
  const [successMsg, setSuccess] = useState([]);
  const [previewIMG, setPreviewIMG] = useState();
  const [idResto, setIdResto] = useState(null);
  const [restoName, setRestoName] = useState(null);
  const navigate = useNavigate();
  const getRestaurant = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_HOST_URL}/api/restaurant/owner/${dataUser.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      )
      .then((res) => {
        !res.data.status && navigate("/");
        setIdResto(res.data.payload.id);
        setRestoName(res.data.payload.name);
      })
      .catch((e) => {
        if (e.code == "ERR_NETWORK") {
          setError([...errorMsg, e.message]);
        } else if (
          typeof e.response.data != "object" &&
          e.response.status == 403
        ) {
          navigate("/login");
        } else {
          setError([...errorMsg, ...e.response.data.message]);
        }
      });
  };
  useEffect(() => {
    if (dataUser != "" && token != "") {
      dataUser.role == "Customer" && navigate("/");
      dataUser.role == "Restaurant_Admin" && getRestaurant();
    } else {
      navigate("/login");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    const dataform = new FormData(e.currentTarget);
    const data = {
      restaurant: idResto != null && idResto,
      name: dataform.get("name"),
      price: dataform.get("price"),
      description: dataform.get("description"),
      photo: dataform.get("photo"),
    };
    setIsLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_HOST_URL}/api/menu/restaurant/create`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        },
      )
      .then((res) => {
        setSuccess([...successMsg, res.data.message]);
        setTimeout(() => {
          if (res.data.status) {
            navigate("/restaurant/" + idResto);
          }
        }, 1000);
      })
      .catch((e) => {
        if (e.code == "ERR_NETWORK") {
          setError([...errorMsg, e.message]);
        } else if (
          typeof e.response.data != "object" &&
          e.response.status == 403
        ) {
          navigate("/login");
        } else {
          setError([...errorMsg, ...e.response.data.message]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="relative flex min-h-[calc(100svh-55px)] items-center justify-center bg-white md:py-10">
      <div className="relative z-10 flex h-full w-full bg-white py-5  sm:max-w-[45rem] sm:rounded-lg sm:shadow-xl md:py-20">
        <SuccessLabel successMsg={successMsg} />
        <ErrorLabel errorMsg={errorMsg} func={() => setError([])} />
        <div className="absolute left-0 top-0 hidden items-center gap-2 p-5 sm:flex">
          <p className="text-3xl font-bold">
            RR<b className="text-[#FFB100]">.</b>
          </p>
          <p className="font-mono font-bold">RestoReservation</p>
        </div>
        {isLoading && <Loading />}
        <div className="flex w-full flex-col items-center justify-center sm:max-w-7xl">
          <p className="py-4 font-serif text-3xl font-bold text-[#FFB100]">
            Menu
          </p>
          <form
            className="flex h-full w-full flex-col justify-center gap-3 px-10"
            onSubmit={handleSubmit}
          >
            <label htmlFor="restaurantname">Restaurant Name</label>
            {restoName != null && (
              <input
                type="text"
                className="rounded-md border p-2 px-4 before:content-['Hello\_World']"
                placeholder="restaurantname"
                name="restaurantname"
                value={restoName}
                disabled
              />
            )}
            <label htmlFor="name">Menu Name</label>
            <input
              type="text"
              className="rounded-md border p-2 px-4"
              placeholder="name"
              name="name"
            />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="rounded-md border p-2 px-4 "
              placeholder="Price"
              name="price"
            />
            <label htmlFor="description">Description</label>
            <textarea
              className="rounded-md border p-2 px-4 "
              placeholder="Description"
              name="description"
            />
            <label htmlFor="photo">Menu Photo</label>
            <input
              type="file"
              className="h-fit rounded-md border p-2 px-4"
              placeholder="photo"
              name="photo"
              accept="image/*"
              onChange={(e) =>
                setPreviewIMG(URL.createObjectURL(e.target.files[0]))
              }
            />
            {previewIMG && (
              <div id="previewIMG">
                <label>Preview Image :</label>
                <figure className="flex aspect-square h-28 w-28 min-w-[7rem] rounded-xl object-cover md:h-32 md:w-32 md:justify-center lg:h-44 lg:w-44">
                  <img
                    src={previewIMG}
                    className="h-full w-full rounded-xl object-cover"
                    loading="lazy"
                    alt=""
                  />
                </figure>
              </div>
            )}
            <button
              className="rounded-full bg-[#FFB100] py-3 text-white"
              type="submit"
            >
              Add Menu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuForm;

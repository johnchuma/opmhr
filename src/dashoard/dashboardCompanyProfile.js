import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { getLink } from "../utils/get_link";
import Spinner from "../components/spinner";
import PageLoader from "../components/pageLoader";
import { toast } from "react-hot-toast";
import { getUser, updateUser } from "../controllers/authController";

const CompanyProfile = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser(auth.currentUser.email).then((data) => {
      setUser(data);
    });
  }, [refresh]);
  return user == null ? (
    <PageLoader />
  ) : (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Company Limited</h1>
      </div>
      <div className="grid grid-cols-1 px-8 py-8 bg-white shadow mt-5 w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            const data = {
              name: e.target.name.value,
              phone: e.target.phone.value,
              address: e.target.address.value
            };
            getLink(file).then((image) => {
              data.profileURL = image ?? user.profileURL;
              updateUser(user.id, data).then(() => {
                setLoading(false);
                toast.success("Saved successfully");
              });
            });
          }}
        >
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="flex flex-col col-span-3 space-y-1 w-full">
              <label
                className="flex flex-col justify-center  cursor-pointer"
                for="image"
              >
                {file == null ? (
                  <img
                    className=" mx-auto aspect-square  object-cover h-24 w-24"
                    src={user.profileURL}
                  />
                ) : (
                  <img
                    className=" mx-auto aspect-square  object-cover h-12 w-12"
                    src={URL.createObjectURL(file)}
                  />
                )}
              </label>
              <input
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                id="image"
                type="file"
                className="sr-only"
              ></input>
            </div>
            <div className=" text-start space-y-1 col-span-1">
              <h1>Company name</h1>
              <input
                defaultValue={user.name}
                name="name"
                className="w-full border-slate-300"
                placeholder="Enter your full name"
              />
            </div>

            <div className=" text-start space-y-1 col-span-1">
              <h1>Phone number</h1>
              <input
                required
                defaultValue={user.phone}
                type="number"
                name="phone"
                className="w-full border-slate-300"
                placeholder="Enter your age"
              />
            </div>

            <div className=" text-start space-y-1 col-span-1">
              <h1>Address</h1>
              <input
                required
                defaultValue={user.address}
                name="address"
                className="w-full border-slate-300"
                placeholder="Enter your address"
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 mt-5 px-4 w-48 flex justify-center bg-green-600 text-white font-bold"
          >
            {loading ? <Spinner /> : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfile;

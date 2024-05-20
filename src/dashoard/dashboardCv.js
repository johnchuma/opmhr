import { useEffect, useState } from "react";
import { getUser, updateUser } from "../controllers/authController";
import { auth } from "../utils/firebase";
import { getLink } from "../utils/get_link";
import Spinner from "../components/spinner";
import PageLoader from "../components/pageLoader";
import { toast } from "react-hot-toast";
import { deleteDoc, Timestamp } from "firebase/firestore";
import { formatDate } from "../utils/format_date";
import ExperienceItem from "../components/experience";
import RefreeItem from "../components/refreeItem";
import { skills } from "../utils/arrays";

const DashboardCv = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [showSkillForm, setshowSkillForm] = useState(false);
  const [showExperienceForm, setshowExperienceForm] = useState(false);
  const [showRefereesForm, setshowRefereesForm] = useState(false);

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
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Curriculum vitae</h1>
      </div>
      <div className="grid grid-cols-12 bg-white p-5 border border-borderColor py-5 rounded-md mt-5">
        <div className=" col-span-4 border border-borderColor py-5 rounded-md ">
          <div className="flex flex-col">
            {[
              {
                title: "Personal informations",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                )
              },
              {
                title: "Professional informations",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                )
              },
              {
                title: "Skills",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                )
              },
              {
                title: "Experience",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )
              },
              {
                title: "Referees",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                )
              },
              {
                title: "CV/Resume",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                    />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div
                onClick={() => {
                  setSelectedTab(index);
                }}
                className={`flex items-center py-3 px-6 space-x-1 cursor-pointer mx-2 ${
                  index == selectedTab
                    ? "border border-borderColor py-2  rounded-md"
                    : ""
                }`}
              >
                <div>{item.icon}</div>
                <div className="text-base">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-8 p-8">
          {selectedTab == 0 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                const data = {
                  name: e.target.name.value,
                  phone: e.target.phone.value,
                  address: e.target.address.value,
                  gender: e.target.gender.value,
                  age: e.target.age.value
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
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col col-span-2 space-y-1">
                  <label
                    className="flex flex-col justify-center  cursor-pointer"
                    for="image"
                  >
                    {file == null ? (
                      <img
                        className=" mx-auto aspect-square rounded-full object-cover h-12 w-12"
                        src={user.profileURL}
                      />
                    ) : (
                      <img
                        className=" mx-auto aspect-square rounded-full object-cover h-12 w-12"
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
                  <h1 className="text-sm">Full Name</h1>
                  <input
                    defaultValue={user.name}
                    name="name"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm">Gender</h1>
                  <select
                    required
                    defaultValue={user.gender}
                    name="gender"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your phone number"
                  >
                    <option>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm">Phone number</h1>
                  <input
                    required
                    defaultValue={user.phone}
                    type="number"
                    name="phone"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your age"
                  />
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm">Age</h1>
                  <input
                    required
                    defaultValue={user.age}
                    type="number"
                    name="age"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your age"
                  />
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm">Address</h1>
                  <input
                    required
                    defaultValue={user.address}
                    name="address"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="py-2 mt-5 px-2 w-48 flex justify-center bg-primary text-white  rounded-lg"
              >
                {loading ? <Spinner /> : "Save Changes"}
              </button>
            </form>
          )}
          {selectedTab == 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                const data = {
                  bio: e.target.bio.value,
                  education: e.target.education.value,
                  salary: e.target.salary.value
                };
                updateUser(user.id, data).then(() => {
                  setLoading(false);
                  toast.success("Saved successfully");
                });
              }}
            >
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className=" text-start space-y-1 col-span-2">
                  <h1 className="text-sm">Write your short Bio</h1>
                  <textarea
                    defaultValue={user.bio}
                    name="bio"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Bio"
                  />
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm">Level of Education</h1>
                  <select
                    required
                    defaultValue={user.education}
                    name="education"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option>Select education level</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Degree">Degree</option>
                    <option value="Masters">Masters</option>
                    <option value="PHD">PHD</option>
                  </select>
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm">Salary expection (TSH)</h1>
                  <input
                    required
                    defaultValue={user.salary}
                    type="number"
                    name="salary"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Tell us your salary expection"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="py-2 mt-5 px-2 w-48 flex justify-center bg-primary text-white  rounded-lg"
              >
                {loading ? <Spinner /> : "Save Changes"}
              </button>
            </form>
          )}
          {selectedTab == 2 && (
            <div>
              <div className="flex justify-between items-center ">
                <h1 className=" text-xl">Skills</h1>
                <div
                  onClick={() => {
                    setshowSkillForm(true);
                  }}
                  className="py-2  px-2 w-48 flex justify-center bg-primary text-white  rounded-lg cursor-pointer"
                >
                  Add skill
                </div>
                {showSkillForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
                    <div className="w-5/12 bg-white  shadow-xl   px-8 py-10">
                      <div className="flex justify-between items-center mb-5">
                        <h1 className="text-lg ">Add skill</h1>
                        <svg
                          onClick={() => {
                            setshowSkillForm(false);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const skills =
                            user.skills != null
                              ? [...user.skills, e.target.skill.value]
                              : [e.target.skill.value];
                          setLoading(true);
                          updateUser(user.id, { skills }).then((data) => {
                            setRefresh(refresh + 1);
                            setshowSkillForm(false);
                            setLoading(false);
                          });
                        }}
                      >
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm text-muted">
                            Your skill
                          </label>
                          <select
                            className=" border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            placeholder="Write your skill"
                            required
                            name="skill"
                          >
                            <option>Select your skill</option>
                            {skills.map((item) => {
                              return <option value={item}>{item}</option>;
                            })}
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="py-2 mt-4 px-3 bg-primary w-48 flex justify-center text-white rounded-lg cursor-pointer "
                        >
                          {loading ? <Spinner /> : "Add "}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap mt-5">
                {user.skills &&
                  user.skills.map((item) => {
                    return (
                      <div className="py-2 mr-2 mb-2 rounded-full text-sm px-3 bg-green-50  flex space-x-1">
                        <h1 className="text-sm">{item}</h1>
                        <svg
                          onClick={() => {
                            const skills = user.skills.filter((e) => item == e);
                            updateUser(item.id, { skills }).then((data) => {
                              setRefresh(refresh + 1);
                            });
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
          {selectedTab == 3 && (
            <div>
              <div className="flex justify-between items-center">
                <h1 className=" text-xl">Experience</h1>
                <div
                  onClick={() => {
                    setshowExperienceForm(true);
                  }}
                  className="py-2  px-2 w-48 flex justify-center bg-primary text-white  rounded-lg cursor-pointer cursor-pointer"
                >
                  Add experiences
                </div>
                {showExperienceForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
                    <div className="w-5/12 bg-white  shadow-xl h-3/4 overflow-y-scroll  px-8 py-10">
                      <div className="flex justify-between items-center mb-5">
                        <h1 className="text-lg ">Add experience</h1>
                        <svg
                          onClick={() => {
                            setshowExperienceForm(false);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <form
                        className="grid grid-cols-1 space-y-3"
                        onSubmit={(e) => {
                          e.preventDefault();
                          setLoading(true);

                          const data = {
                            company: e.target.company.value,
                            position: e.target.position.value,
                            description: e.target.description.value,
                            startDate: Timestamp.fromDate(
                              new Date(e.target.startDate.value)
                            ),
                            endDate: Timestamp.fromDate(
                              new Date(e.target.endDate.value)
                            )
                          };
                          const experiences =
                            user.experiences != null
                              ? [...user.experiences, data]
                              : [data];

                          updateUser(user.id, { experiences }).then((data) => {
                            setRefresh(refresh + 1);
                            setshowExperienceForm(false);
                            setLoading(false);
                          });
                        }}
                      >
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm text-muted">
                            Company name
                          </label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            name="company"
                            placeholder="Company name"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm text-muted">
                            Job Title ?
                          </label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            name="position"
                            placeholder="Your position"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm text-muted">Roles</label>
                          <textarea
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            required
                            name="description"
                            placeholder="What your roles"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm text-muted">From</label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            type="date"
                            name="startDate"
                            placeholder="Starting date"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm text-muted">To</label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            type="date"
                            name="endDate"
                            placeholder="End date"
                          />
                        </div>

                        <button
                          type="submit"
                          className="py-2 px-3 bg-primary w-48 flex justify-center text-white rounded-lg cursor-pointer "
                        >
                          {loading ? <Spinner /> : "Add"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-2 mt-5">
                {user.experiences &&
                  user.experiences.map((item) => {
                    return (
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-11">
                          <ExperienceItem item={item} />
                        </div>
                        <div
                          className=" col-span-1"
                          onClick={() => {
                            const newList = user.experiences.filter(
                              (e) => e.company != item.company
                            );
                            updateUser(user.id, { experiences: newList }).then(
                              () => {
                                setRefresh(refresh + 1);
                                toast.success("Deleted successfully");
                              }
                            );
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {selectedTab == 4 && (
            <div>
              <div className="flex justify-between items-center">
                <h1 className=" text-xl">Referees</h1>
                <div
                  onClick={() => {
                    setshowRefereesForm(true);
                  }}
                  className="py-2  px-2 w-48 flex justify-center bg-primary text-white  rounded-lg cursor-pointer"
                >
                  Add refreees
                </div>
                {showRefereesForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
                    <div className="w-5/12 bg-white  shadow-xl h-3/4 overflow-scroll  px-8 py-10">
                      <div className="flex justify-between items-center mb-5">
                        <h1 className="text-lg ">Add Refree</h1>
                        <svg
                          onClick={() => {
                            setshowRefereesForm(false);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <form
                        className="grid grid-cols-1 gap-y-2"
                        onSubmit={(e) => {
                          e.preventDefault();
                          setLoading(true);

                          const data = {
                            company: e.target.company.value,
                            position: e.target.position.value,
                            phone: e.target.phone.value,
                            email: e.target.email.value,
                            name: e.target.name.value
                          };
                          const refrees =
                            user.refrees != null
                              ? [...user.refrees, data]
                              : [data];

                          updateUser(user.id, { refrees }).then((data) => {
                            setRefresh(refresh + 1);
                            setshowRefereesForm(false);
                            setLoading(false);
                          });
                        }}
                      >
                        <div className="flex flex-col space-y-1">
                          <label className="text-sm text-muted">
                            Refree name
                          </label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            name="name"
                            placeholder="Refreee name"
                          />
                        </div>
                        <div className="flex flex-col space-y-1">
                          <label className="text-sm text-muted">Company</label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            name="company"
                            placeholder="Company name"
                          />
                        </div>
                        <div className="flex flex-col space-y-1">
                          <label className="text-sm text-muted">
                            Their position at company
                          </label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            name="position"
                            placeholder="Enter position at company"
                          />
                        </div>
                        <div className="flex flex-col space-y-1">
                          <label className="text-sm text-muted">
                            Refree phone number
                          </label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            name="phone"
                            placeholder="Enter phone number "
                          />
                        </div>
                        <div className="flex flex-col space-y-1">
                          <label className="text-sm text-muted">
                            Refree Email addrss
                          </label>
                          <input
                            required
                            className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                            name="email"
                            placeholder="Enter email address"
                          />
                        </div>

                        <button
                          type="submit"
                          className="py-2 px-3 bg-primary rounded-lg w-48 flex justify-center text-white"
                        >
                          {loading ? <Spinner /> : "Add"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap mt-5">
                {user.refrees &&
                  user.refrees.map((item) => {
                    return (
                      <div className="gap-2 w-full grid grid-cols-12 items-center">
                        <div className=" col-span-11">
                          <RefreeItem item={item} />
                        </div>
                        <div className=" col-span-1">
                          <div
                            onClick={() => {
                              const newList = user.refrees.filter(
                                (e) => e.name != item.name
                              );
                              updateUser(user.id, { refrees: newList }).then(
                                () => {
                                  setRefresh(refresh + 1);
                                  toast.success("Deleted successfully");
                                }
                              );
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
          {selectedTab == 5 && (
            <div className="flex flex-col w-full text-center justify-center h-full ">
              {user.cv == null ? (
                <label
                  for="document"
                  className="flex flex-col items-center justify-center w-full"
                >
                  {loading ? (
                    <Spinner color={"border-black"} />
                  ) : (
                    <div className="flex flex-col text-center justify-center border-2 border-dotted px-5 border-borderColor rounded-md focus:ring-primary focus:border-primary items-center py-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                        />
                      </svg>
                      <div>Upload your CV</div>
                    </div>
                  )}
                </label>
              ) : (
                <a
                  target="__blank"
                  href={user.cv.link}
                  className="flex flex-col text-center justify-center border-2 border-dotted px-5 border-borderColor rounded-md focus:ring-primary focus:border-primary items-center py-10"
                >
                  <img className="w-24" src="/pdf.png" />
                  <div className=" mt-3">{user.cv.name}</div>
                  <h1
                    className="cursor-pointer pt-5 text-red-200 hover:text-red-600 "
                    onClick={() => {
                      updateUser(user.id, { cv: null }).then((data) => {
                        setRefresh(refresh + 1);
                        toast.success("Deleted successfully");
                      });
                    }}
                  >
                    Delete document
                  </h1>
                </a>
              )}

              <input
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setLoading(true);
                    getLink(e.target.files[0]).then((link) => {
                      updateUser(user.id, {
                        cv: { name: e.target.files[0].name, link }
                      }).then((data) => {
                        setLoading(false);
                        setRefresh(refresh + 1);
                      });
                    });
                  }
                }}
                id="document"
                type="file"
                className="sr-only"
              ></input>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCv;

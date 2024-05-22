import { useState } from "react";
import { deleteBlog, updateBlog } from "../controllers/blogController";
import { timeAgo } from "../utils/time_ago";
import { getLink } from "../utils/get_link";

const BlogPost = ({ item, refresh, setRefresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="bg-white p-2 border border-borderColor py-2 rounded-md cursor-pointer  "
      >
        <img className="h-24 object-cover w-full rounded-lg" src={item.image} />
        <div className="  px-5 py-4 ">
          <h1 className="text-lg font-semibold line-clamp-2">{item.title}</h1>
          <p className="text-sm text-muted">
            Published: {timeAgo(item.createdAt.toDate())}
          </p>

          <p className="mt-2 line-clamp-2">{item.introduction}</p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
          <div className="w-8/12 bg-white rounded-lg  shadow-xl h-3/4 overflow-y-scroll px-8 py-10">
            <div className="flex justify-end">
              <svg
                onClick={() => {
                  setShowModal(false);
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                getLink(file).then((link) => {
                  const data = {
                    image: link ?? item.image,
                    title: e.target.title.value,
                    introduction: e.target.introduction.value,
                    paragraph1: e.target.paragraph1.value,
                    paragraph2: e.target.paragraph2.value,
                    paragraph3: e.target.paragraph3.value,
                    conclusion: e.target.conclusion.value,
                  };
                  updateBlog(item.id, data).then((data) => {
                    setLoading(false);
                    setRefresh(refresh + 1);
                    setShowModal(false);
                  });
                });
              }}
              className="space-y-4 mt-5"
            >
              <textarea
                required
                name="title"
                className="w-full  font-medium border-0 focus:ring-0 text-4xl"
                defaultValue={item.title}
                placeholder="Blog title"
              />

              <div className="flex flex-col space-y-1">
                <label
                  className="flex justify-center  cursor-pointer"
                  for="image"
                >
                  {file == null ? (
                    <img className="rounded-lg" src={item.image} />
                  ) : (
                    <img
                      className="w-5/12 mx-auto rounded-lg"
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

              <div className="flex flex-col space-y-1">
                <label className="text-sm text-muted">Introduction</label>
                <textarea
                  defaultValue={item.introduction}
                  name="introduction"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary "
                />
              </div>
              {
                <div className="flex flex-col space-y-1">
                  <label className="text-sm text-muted">First Paragraph</label>
                  <textarea
                    defaultValue={item.paragraph1}
                    name="paragraph1"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary "
                  />
                </div>
              }

              {
                <div className="flex flex-col space-y-1">
                  <label className="text-sm text-muted">Second Paragraph</label>
                  <textarea
                    defaultValue={item.paragraph2}
                    name="paragraph2"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary "
                  />
                </div>
              }

              {
                <div className="flex flex-col space-y-1">
                  <label className="text-sm text-muted">Third Paragraph</label>
                  <textarea
                    defaultValue={item.paragraph3}
                    name="paragraph3"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary "
                  />
                </div>
              }

              <div className="flex flex-col space-y-1">
                <label className="text-sm text-muted">Conclusion</label>
                <textarea
                  defaultValue={item.conclusion}
                  name="conclusion"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary rounded-lg text-white flex justify-center w-40 "
                >
                  {loading ? (
                    <div className="h-4 w-4 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
            <div
              onClick={() => {
                deleteBlog(item.id).then(() => {
                  setShowModal(false);
                  setRefresh(refresh + 1);
                });
              }}
              className="flex justify-center mt-9 opacity-40 items-center hover:opacity-100 cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>

              <h1 className="font-medium text-red-600 text-sm">Delete Post</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;

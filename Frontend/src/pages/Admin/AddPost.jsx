import { useContext, useState } from "react";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const modules = {
  toolbar: toolbarOptions,
};

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [desc, setDesc] = useState("");
  const [featuredImage, setFeaturedImage] = useState(false);

  const { backendURL, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("shortDesc", shortDesc);
      formData.append("desc", desc);
      formData.append("image", featuredImage);

      const { data } = await axios.post(
        backendURL + "/api/admin/add-post",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Post</p>
      <div className="bg-white px-8 py-8 border rounded w-full">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="postImage">
            <img
              className="w-36 bg-gray-100 rounded cursor-pointer"
              src={
                featuredImage
                  ? URL.createObjectURL(featuredImage)
                  : assets.upload_area
              }
              alt=""
            />
          </label>
          <input
            onChange={(e) => setFeaturedImage(e.target.files[0])}
            type="file"
            id="postImage"
            hidden
          />
          <p>Upload Featured Image</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className=" w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Blog Title</p>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border rounded px-3 py-2"
                placeholder="Blog Title"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Short Description</p>
              <input
                type="text"
                onChange={(e) => setShortDesc(e.target.value)}
                value={shortDesc}
                className="border rounded px-3 py-2"
                placeholder="Short Description"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Description</p>
              <ReactQuill
                theme="snow"
                value={desc}
                modules={modules}
                onChange={setDesc}
              />
            </div>

            <button className="px-10 py-3 mt-4 bg-primary rounded-full text-white text-sm">
              Save Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPost;

import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const Post = () => {
  const { post } = useContext(AdminContext);

  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {post.slice(0, 3).map((item, index) => (
            <div key={index}>
              <a
                className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
                href="#"
              >
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src={item.featuredImage}
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-gray-600">{item.shortDesc}</p>
                </div>
                {/* <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src={item.authImage}
                    alt="Avatar"
                  />
                  <div>
                    <h5 className="text-sm text-gray-800">
                      By <span>{item.authName}</span>
                    </h5>
                  </div>
                </div> */}
              </a>
            </div>
          ))}

          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
};

export default Post;

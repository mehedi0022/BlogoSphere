import { post } from "../assets/assets";

const Blog = () => {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            The Blog
          </h2>
          <p className="mt-1 text-gray-600">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {post.map((item, index) => (
            <div key={index}>
              <a
                className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
                href="#"
              >
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src={item.image}
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-gray-600">{item.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
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
                </div>
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

export default Blog;

import { services } from "../assets/assets";

const Services = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        {services.map((item, index) => (
          <div key={index}>
            <div className="size-full bg-white shadow-lg rounded-lg p-5">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                  <img src={item.icon} className="w-24" alt="" />
                </div>
                <div className="shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

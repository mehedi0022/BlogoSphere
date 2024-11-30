import {
  MdEmail,
  MdOutlinePhone,
  MdLocationOn,
  MdOutlineFacebook,
} from "react-icons/md";

import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative ">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl">
                  Get in touch
                </h1>
                <p className="text-gray-600">
                  We provide you with a test account that can be set up in
                  seconds. Our main focus is getting responses to you as soon as
                  we can.
                </p>
              </div>
              {/* End Title */}
              {/* Blockquote */}
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-xl italic text-gray-800">
                    Amazing people to work with. Very fast and professional
                    partner.
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center gap-x-4">
                    <div className="shrink-0">
                      <img
                        className="size-8 rounded-full"
                        src="https://habibthedeveloper.com/assets/img/mehedi%20Hassan.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className="grow">
                      <div className="font-semibold text-gray-800">
                        Mehedi Hassan
                      </div>
                      <div className="text-xs text-gray-500">
                        MERN Stack Developer &amp; WordPress Expart
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* End Blockquote */}
            </div>
            {/* End Col */}

            <div>
              {/* Form */}
              <form>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  {/* Card */}
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
                    <div className="mt-5">
                      {/* Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Input Group */}
                        <div>
                          {/* Floating Input */}
                          <div className="relative">
                            <input
                              type="text"
                              id="hs-hero-signup-form-floating-input-first-name"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                              placeholder="John"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-first-name"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Full Name
                            </label>
                          </div>
                          {/* End Floating Input */}
                        </div>
                        {/* End Input Group */}

                        {/* Input Group */}
                        <div>
                          {/* Floating Input */}
                          <div className="relative">
                            <input
                              type="email"
                              id="hs-hero-signup-form-floating-input-email"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                              placeholder="you@email.com"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-email"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Email
                            </label>
                          </div>
                          {/* End Floating Input */}
                        </div>
                        {/* End Input Group */}
                        {/* Input Group */}
                      </div>
                      <div className="mt-4">
                        {/* Floating Input */}
                        <div className="relative">
                          <textarea
                            rows={6}
                            id="hs-hero-signup-form-floating-input-company-name"
                            className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                            placeholder="Preline"
                          />
                          <label
                            htmlFor="hs-hero-signup-form-floating-input-company-name"
                            className="absolute top-0 start-0 p-4 w-full h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                          >
                            Write message
                          </label>
                        </div>
                        {/* End Floating Input */}
                      </div>
                      {/* End Grid */}

                      {/* Checkbox */}
                      <div className="mt-5 flex items-center">
                        <div className="flex">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                          />
                        </div>
                        <div className="ms-3">
                          <label htmlFor="remember-me" className="text-sm">
                            I accept the{" "}
                            <a
                              className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      {/* End Checkbox */}
                      <div className="mt-5">
                        <button
                          type="submit"
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Clients Section */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default Contact;

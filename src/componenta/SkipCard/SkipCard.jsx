import { images } from "./skipImage";
import Modale from "../Modale";
/**
 * SkipCard Component
 * Displays information about a skip (image, size, road permission, price, etc.)
 */
export default function SkipCard({ item, index, selectedSkip }) {
  return (
    <>
      <div>
        <div
          className="relative  sm:bg-white border border-gray-200 rounded-xl shadow-sm  group "
          onClick={() => selectedSkip(item)}
        >
          <a href="#">
            <img
              className="p-4 rounded-t-lg"
              src={images[index]}
              alt="product image"
            />
          </a>

          <div
            className=" absolute  opacity-100 md:opacity-0 md:group-hover:opacity-100 
                 transition-opacity duration-300 ease-in-out m-0 py-2 mx-6 px-4 mt-5 bg-[#F2F2F2] top-0  rounded-sm  "
          >
            <span className=" text-xs font-semibold  rounded-sm mt-4">
              {item.size} yards
            </span>
          </div>

          <div
            className="absolute  bottom-[15px] left-0 bg-opacity-80 px-4 rounded-t-lg 
                 opacity-100 md:opacity-0 md:group-hover:opacity-100 
                 transition-opacity duration-300 ease-in-out m-0 p-0  w-full "
          >
            <div className="bg-[#F2F2F2]  py-2 px-2">
              <a href="#">
                {item.allowed_on_road == true ? (
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 p-0 bold ">
                    {item.size} Yard Skip
                  </h5>
                ) : (
                  <div className="flex items-center justify-between ">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 p-0 bold ">
                      {item.size} Yard Skip
                    </h5>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white text-sm font-semibold shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        width="25"
                        height="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        className="w-4 h-4 text-white"
                      >
                        <path d="M18.1569 6.84315c3.1241 3.12419 3.1241 8.18955 0 11.31375-3.1242 3.1241-8.18956 3.1241-11.31376 0-3.12419-3.1242-3.12419-8.18956 0-11.31375 3.1242-3.1242 8.18956-3.1242 11.31376 0zM18.1569 6.84315l-11.31289 11.31285" />
                      </svg>
                      Not Allowed On The Road
                    </div>
                  </div>
                )}
              </a>

              <div className="flex items-center justify-between  ">
                <span className="text-md text-gray-900 p-0 ">
                  {item.hire_period_days} Day hire period
                </span>

                <span className="text-xl font-bold text-gray-900 ">
                  ${item.price_before_vat}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Link } from "@/navigation";

const AuthLoginRegP2b = () => {
  const submitHandler = async (data: FormData) => {
    "use server";
    console.log(data);
  };
  return (
    <div className="">
      <div className="p-3 border border-gray-400 rounded m-3 flex flex-col items-center justify-center">
        <p className="p-3 text-xs">
          اطمینان حاصل کنید که آدرس مرورگرتان با آدرس زیر یکسان باشد
        </p>
        <p className="text-xs">
          <strong className="text-lime-400">https://</strong>steach.com/auth
        </p>
      </div>

      <div className="dark:bg-slate-900 flex items-center justify-center mt-8">
        <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h2 className="block text-md font-bold text-gray-800 dark:text-white mb-6">
                کد ارسال شده به شماره .... را وارد کنید
              </h2>
            </div>

            <form
              action={submitHandler}
              className="flex flex-col items-center justify-center"
            >
              <div dir="ltr" className="flex space-x-3" data-hs-pin-input>
                <input
                  name="pass1"
                  type="text"
                  className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="-"
                  data-hs-pin-input-item
                  autoFocus
                />
                <input
                  name="pass2"
                  type="text"
                  className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="-"
                  data-hs-pin-input-item
                />
                <input
                  name="pass3"
                  type="text"
                  className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="-"
                  data-hs-pin-input-item
                />
                <input
                  name="pass4"
                  type="text"
                  className="block w-[62px] h-[62px] text-center border border-gray-400 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="-"
                  data-hs-pin-input-item
                />
              </div>
              <div className="flex flex-row gap-2 mt-6">
                <button className="border border-gray-300 rounded p-3 hover:bg-purple-500">
                  ارسال مجدد کد
                </button>
                <Link
                  href={"/auth"}
                  className="border border-gray-300 rounded p-3 hover:bg-purple-500"
                >
                  اصلاح موبایل
                </Link>
              </div>
              <button
                className="bg-blue-600 rounded-[12px] p-2 w-full text-white mt-2"
                type="submit"
              >
                تایید
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLoginRegP2b;

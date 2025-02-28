import { Link } from "@/navigation";

const ForgetPass = () => {
  return (
    <div className="h-screen">
      <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-10">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  فراموشی رمز عبور
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  رمز عبور خود را به خاطر آوردید؟
                  <Link
                    className="text-blue-600 mx-2 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/login"
                  >
                    از اینجا وارد شوید
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white text-right"
                      >
                        آدرس ایمیل
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="email-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        لطفا ایمیل صحیح وارد کنید
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      بازیابی رمز عبور
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;

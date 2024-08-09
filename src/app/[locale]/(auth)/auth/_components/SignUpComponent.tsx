import { z } from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const emailSchema = z
  .object({
    name: z.string().min(1, { message: "درج نام ضروری است" }),
    email: z.string().email("Please use Correct Email"),
    password: z.string().min(8, { message: "رمز حداقل باید ۸ کاراکتر باشد" }),
    password_confirm: z
      .string()
      .min(8, { message: "تایید رمز حداقل باید ۸ کاراکتر باشد" })
      .max(100),
    relative: z.string().optional(),
    termsAndConditions: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "رمز با تایید رمز مطابقت ندارد",
    path: ["password_confirm"],
  });
type IFormInput = z.infer<typeof emailSchema>;

const SignUpComponent = ({ setSelectedTab }: { setSelectedTab: any }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<IFormInput>({
    resolver: zodResolver(emailSchema),
  });
  const t = useTranslations("Auth");
  const onSubmit: SubmitHandler<IFormInput> = async (data, event) => {
    event?.preventDefault();
  };
  return (
    <div className="max-w-md">
      <div className="mx-3">
        <div>
          <Image
            src={"/images/Content.svg"}
            height={40}
            width={40}
            alt="Steach"
          />
        </div>
        <div className="w-full my-8">
          <h1 className="block text-2xl font-bold text-textColor-primary-light dark:text-white mb-3">
            {t("signup-phrase")}
          </h1>
          <p className=" text-textColor-tertiary-light">{t("detail-signup")}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-2 text-textColor-secondary-light dark:text-textColor-secondary-dark"
              >
                {t("name")}
              </label>
              <div className="relative">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="py-3 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="example@example.org"
                      style={{
                        borderColor: errors.name ? "red" : "inherit",
                      }}
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 text-textColor-secondary-light dark:text-textColor-secondary-dark"
              >
                {t("email")}
              </label>
              <div className="relative">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="py-3 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="example@example.org"
                      style={{
                        borderColor: errors.email ? "red" : "inherit",
                      }}
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-2 text-textColor-secondary-light dark:text-textColor-secondary-dark"
              >
                {t("password")}
              </label>
              <div className="relative">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="py-3 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="•••••••••"
                      style={{
                        borderColor: errors.password ? "red" : "inherit",
                      }}
                    />
                  )}
                />
                {errors.password && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password_confirm"
                className="block text-sm mb-2 dark:text-white"
              >
                تایید رمز
              </label>
              <div className="relative">
                <input
                  {...register}
                  type="password"
                  name="password_confirm"
                  className="py-3 px-4 block w-full text-left border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="•••••••••"
                  style={{
                    borderColor: errors.password ? "red" : "inherit",
                  }}
                />

                {errors.password_confirm && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.password_confirm.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Controller
                name="termsAndConditions"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  //@ts-ignore
                  <input {...field} type="checkbox" id="termsAndConditions" />
                )}
              />
              <label className="text-sm" htmlFor="termsAndConditions">
                <Link className="text-blue-600" href={"/tos"}>
                  {t("terms")}
                </Link>
                <div>
                  {errors.termsAndConditions && ( // Show error if the checkbox isn't checked
                    <p className="text-xs text-red-600 mt-1">
                      {errors.termsAndConditions.message}
                    </p>
                  )}
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-brand-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              {t("sign-up")}
            </button>
          </div>
        </form>
        <button
          type="button"
          className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <Image
            src={"/images/Social icon.svg"}
            height={20}
            width={20}
            alt="Steach"
          />
          {t("sign-up-google")}
        </button>
        <button
          type="button"
          className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <Image
            src={"/images/Social icon-facebook.svg"}
            height={20}
            width={20}
            alt="Steach"
          />
          {t("sign-up-facebook")}
        </button>
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 text-center">
          {t("has-account")}
          <button
            className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 p-2"
            onClick={() => {
              setSelectedTab("login");
            }}
          >
            {t("sign-in")}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpComponent;

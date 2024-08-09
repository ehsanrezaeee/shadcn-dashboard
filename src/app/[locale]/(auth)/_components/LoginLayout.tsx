import Alignment from "@/hooks/Alignment";
import LoginSlider from "./LoginSlider";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Alignment>
        <div className="grid grid-cols-3 items-center gap-6 xl:gap-12 w-full h-full justify-center">
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center h-full">
            {children}
          </div>
          <div className="hidden lg:block lg:col-span-2 h-full">
            <LoginSlider />
          </div>
        </div>
      </Alignment>
    </div>
  );
};

export default LoginLayout;

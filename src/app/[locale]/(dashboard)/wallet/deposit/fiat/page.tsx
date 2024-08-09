import DepositBox from "../_components/depositBox";
import InfoBox from "../_components/infoBox";

const FiatPage = () => {
  return (
    <div className="w-full col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
      <div className="col-span-1 rounded-[8px] h-fit">
        <DepositBox />
      </div>
      <div className="col-span-1 bg-[#e4ecfa] rounded-[8px] h-fit">
        <InfoBox />
      </div>
    </div>
  );
};

export default FiatPage;

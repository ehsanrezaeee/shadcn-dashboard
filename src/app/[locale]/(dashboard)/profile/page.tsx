// components
import CartList from "./_components/cart-list";
import UserInfoBox from "./_components/user-info-box";

const UserInfoPage = () => {
  return (
    <div className="w-full h-full col-span-12 relative">
      <UserInfoBox />
      <CartList />
    </div>
  );
};

export default UserInfoPage;

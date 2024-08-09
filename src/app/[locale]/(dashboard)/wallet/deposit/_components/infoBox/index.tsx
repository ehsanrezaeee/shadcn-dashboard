import React from "react";
import { GoInfo } from "react-icons/go";

const InfoBox = () => {
  return (
    <div className="flex flex-col my-1 gap-2 p-2">
      <div className="flex flex-row gap-3">
        <GoInfo />
        <p className="text-[#152556] text-sm">
          لطفا به هنگام واریز به نکات زیر توجه کنید:
        </p>
      </div>

      <ul className="flex flex-col text-xs gap-4 custom-list my-3 text-[#737687]">
        <li className="leading-6">
          پرداخت مبالغ روزانه تا ۲۵ میلیون تومان از طریق سامانه شاپرک امکان‌پذیر
          است. برای مبالغ بیش از ۲۵ میلیون باید از طریق سامانه شبا (پایا، ساتنا
          و...) اقدام نمایید و شناسه واریز خود را ایجاد کنید.
        </li>
        <li> می‌توانید وضعیت واریز را در تاریخچه واریزها پیگیری نمایید. </li>
        <li>حداکثر ارزش مجموع مقادیر واریز شده طی ۲۴ ساعت برابر است با:</li>
        <li>حداکثر ارزش مجموع مقادیر واریز شده طی ۳۰ روز برابر است با:</li>
        <li className="leading-6">
          حتماً به آدرس صفحه‌ درگاه بانکی دقت نموده و تنها پس از اطمینان از حضور
          در سایت‌های سامانه‌ شاپرک مشخصات کارت بانکی خود را وارد نمایید.
        </li>
        <li>در صفحه درگاه دقت کنید که حتما مبلغ نمایش داده شده درست باشد.</li>
      </ul>
    </div>
  );
};

export default InfoBox;

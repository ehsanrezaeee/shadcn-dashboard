// line below is for changing the direction of the text from LTR to RTL
import useTextDirection from "@/hooks/useTextDirection";

// if you want to make the dahsboard SSG, uncomment the line below
// import { unstable_setRequestLocale } from "next-intl/server";

// next-intl provider script for translation
import { NextIntlClientProvider, useMessages } from "next-intl";

// toast script
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ant provider config
import { ConfigProvider } from "antd";

// antd script ui
import { AntdRegistry } from "@ant-design/nextjs-registry";

// redux store provider
import StoreProvider from "../StoreProvider";

// react query Provider
import Providers from "../providers";
import { ThemeProvider } from "@/components/common/theme-provider";

type Props = {
  readonly children: React.ReactNode;
  readonly params: { locale: string };
};

// if you need to make the app SSG, uncomment the lines below
// const locales = ["fa", "en"];
// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default function Layout({ children, params: { locale } }: Props) {
  const messages = useMessages();
  const direction = useTextDirection(locale);

  // if you need to make the app SSG, uncomment the lines below
  // unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="h-full" dir={direction}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <StoreProvider>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#3148F8",
                    },
                    components: {
                      Switch: {
                        trackHeight: 24,
                        handleSize: 20,
                      },
                      Input: {
                        paddingInlineLG: 8,
                        paddingInline: 8,
                        activeBg: "#F7F7F7",
                        hoverBg: "#F7F7F7",
                        colorBgContainer: "#F7F7F7",
                        colorBorder: "#F7F7F7",
                        colorIcon: "#737687",
                        colorTextPlaceholder: "#737687",
                        colorText: "#46464F",
                      },
                      Table: {
                        headerBg: "#ffffff",
                        boxShadowSecondary: "0 0 0 0 rgba(0, 0, 0, 0)",
                        borderColor: "#ffffff",
                        headerSplitColor: "#ffffff",
                        colorSplit: "#ffffff",
                        cellFontSize: 12,
                        fontSize: 12,
                      },
                    },
                  }}
                >
                  <AntdRegistry>
                    <div className="h-full w-full flex items-enter justify-center">
                      {children}
                    </div>
                  </AntdRegistry>
                </ConfigProvider>
              </NextIntlClientProvider>
            </StoreProvider>
          </Providers>
          <ToastContainer rtl />
        </ThemeProvider>
      </body>
    </html>
  );
}

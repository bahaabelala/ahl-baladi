import { Inter } from "next/font/google";
import "../styles/globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "الصفحة الرئيسية | أسئلة السعودية - أهل بلدي",
  description:
    "أهل بلدي : اسأل مدينتك - موقع تواصل إجتماعي بين سكان مدن البلاد العربية للتواصل فيما بينهم  و تقديم المساعدات  والاستشارات والإجابة على الأسئلة من أهل المدينة والمقيمين والزائربن أو الراغبين في زيارتها ",
  keywords:
    " مدينتك ,اسأل , أهل , السعودية ,استفسارات  , ask ,  تساؤلات , مشكلة , ملكة , مطعم , محل ,مدينه , المدينة , المنورة , مكه , المكرمة  , الرياض  , جازان , القصيم  , مصر , القاهره   , مواصلات  , ازاي , المترو , مترو ,  طبيب ,دكتور , عيادة أخصائي , اطفال , أسنان  , توصيل , سائق , كوفي , مستشفى , جدة , الطائف  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <header id="main-header">
          <Image src="/icons/logo.png" alt="app-logo" width="40" height="32" />
        </header>
        {children}
      </body>
    </html>
  );
}

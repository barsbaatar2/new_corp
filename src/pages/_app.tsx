import App from "next/app";
import "../styles/styles.scss";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from 'next-i18next';


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
        <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default appWithTranslation(MyApp);
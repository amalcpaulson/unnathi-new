import React, { useEffect } from "react";
import "./Volunteering.css";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";

const Volunteering = () => {
  const { t } = useTranslation(["Volunteering"]);
  useEffect(() => {
    i18next.changeLanguage("en");
  }, []);
  return (
    <>
      <Navbar />
      {/* <div className="home-language-switcher">
        <LanguageSwitcher />
      </div> */}
      <div className="volunteering-wrapper">
        <div className="volunteering-header-sect">
          <h1>{t("volunteering")}</h1>
          <a href="#about-volunteering" className="volunteering-arrow">
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </a>
        </div>
        <div className="volunteering-quote">
          <h1>
            <span style={{ color: "#fbba16" }}>{t("lend")}</span> {t("aHand")}{" "}
            <span style={{ color: "#EC1D25" }}>
              <p>{t("difference")}</p>
            </span>
          </h1>
          <p>{t("differentText")}</p>
        </div>

        <div id="about-volunteering" className="about-volunteering">
          <div className="about-volunteering-heading">
            <h1>
              <span>{t("whyVolunteer")}</span>&nbsp;{t("withUnnathi")}
            </h1>
            <p>{t("whyVolunteerText")}</p>
          </div>
          <div className="submitidea-card-wrapper">
            <div className="submitidea-card-individual card1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 102 143"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.3866 4.37345C28.8199 0.29848 32.5216 4.3666 34.3176 8.21904C42.4261 5.26649 48.1887 6.3296 51.959 9.59682C54.5202 11.8163 55.9009 14.8397 56.54 17.6204C58.5762 16.5041 61.1302 15.5048 63.8651 14.961C67.8735 14.1641 72.561 14.2944 76.66 16.7881C78.3901 12.8387 82.1509 8.38622 87.7518 12.5869C94.3225 17.5149 92.8852 29.0137 91.3451 34.1471C86.7251 35.3449 75.8423 36.6111 69.2716 32.0937C67.4225 29.012 65.9897 22.6558 73.2197 19.622C70.571 18.4731 67.5696 18.4116 64.6658 18.9889C61.4819 19.6219 58.6696 20.9776 56.9925 22.1633V36.8553C59.88 37.6636 62.4158 39.9287 63.6659 41.1788C66.6937 40.0014 75.1783 39.6507 78.3912 49.3923H90.3596V59.1458C93.6107 59.1458 100.421 61.0965 101.653 68.8992C102.885 76.702 94.6374 83.1016 90.3596 85.3261C87.8956 101.753 74.2749 110.651 67.7727 113.046L66.746 118.693C86.4582 126.907 94.4663 137.858 95.493 142.307H13.872C18.8001 128.344 35.4323 120.746 43.1324 118.693L42.1057 113.046C27.3215 108.529 20.5455 92.6839 19.0054 85.3261C14.8987 82.5883 6.89063 75.47 7.71197 68.8992C8.53332 62.3285 15.5832 59.6591 19.0054 59.1458V49.3923H31.4753C33.1733 43.93 38.133 38.7896 45.6991 41.1788C46.8179 39.9202 49.8115 37.6327 52.8858 36.839V21.1883C52.8033 18.4387 51.7782 14.8743 49.2696 12.7004C47.2174 10.922 43.7452 9.7215 37.8595 11.3839C45.1564 14.4077 43.7209 20.7902 41.8668 23.8803C35.2961 28.3977 24.4133 27.1314 19.7933 25.9336C18.2532 20.8003 16.8159 9.3015 23.3866 4.37345Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M15.714 0.370026C13.2073 1.17862 11.2397 2.79581 9.9999 5.16768L9.24521 6.59619L9.16435 16.0837C9.08349 25.3286 9.11045 25.5982 9.64951 26.1372C10.1616 26.6493 10.512 26.6763 16.3339 26.6763C23.3687 26.6763 23.6651 26.5954 23.6651 24.7896C23.6651 23.981 23.5034 23.6306 22.9644 23.1993C22.2905 22.6872 21.8862 22.6333 17.7085 22.6333H13.1534V15.356C13.1534 7.27002 13.2073 6.89268 14.8515 5.46417C17.978 2.71495 22.6679 4.30518 23.3956 8.37511C23.5843 9.34541 23.5304 9.45323 21.4819 11.4747C19.5952 13.3345 19.3526 13.7118 19.3526 14.5743C19.3526 15.7872 20.0265 16.4341 21.2663 16.4341C22.0749 16.4341 22.4792 16.1376 24.312 14.3048C26.2526 12.3372 26.5222 12.1755 27.2769 12.3103C29.2444 12.6607 30.7808 14.0083 31.4276 15.8681C32.1015 17.7817 31.6433 19.5067 29.9991 21.3126C28.894 22.5524 28.7323 23.8732 29.5948 24.6548C30.8616 25.7868 32.5058 25.0052 34.2308 22.4716C37.0878 18.2669 35.821 12.472 31.4276 9.66885L30.0261 8.7794L31.5085 8.07861C32.7483 7.5126 33.3413 7.40479 35.6593 7.40479C38.0581 7.40479 38.5163 7.48566 39.8909 8.15948C41.8854 9.12979 43.6374 10.8817 44.6077 12.8763L45.3624 14.4126L45.4433 23.4419L45.5241 32.4712L43.9069 32.9294C42.8827 33.2528 41.6698 33.8997 40.5108 34.7892L38.7319 36.1368L37.3034 35.8134C36.4948 35.6517 34.8507 35.5439 33.5569 35.6247C31.6433 35.7325 30.9425 35.8942 29.4601 36.622C27.2769 37.7001 25.1206 39.8024 24.2042 41.7161L23.5304 43.1177H17.978C12.7761 43.1177 12.3718 43.1446 11.7249 43.6837L10.9972 44.2228L10.9433 48.9665L10.8624 53.7103L9.32607 54.0606C2.58779 55.597 -1.07783 62.0118 0.647166 69.2622C1.72529 73.8442 5.01357 78.022 9.27217 80.2591C11.4015 81.3372 11.4823 81.4181 11.644 82.5231C11.9675 84.5177 13.1804 88.1563 14.3933 90.7978C16.0374 94.3286 18.2206 97.4552 21.0507 100.447C24.1772 103.708 27.3038 106.053 31.1312 107.967L34.1769 109.503V110.5V111.498L31.6972 112.387C23.153 115.352 15.3097 121.174 9.62256 128.667C7.68193 131.254 5.33701 135.27 5.33701 136.025C5.33701 136.375 5.63349 136.968 6.01084 137.319L6.65771 137.993H47.6534H88.6491L89.296 137.319C89.6733 136.968 89.9698 136.375 89.9698 136.025C89.9698 134.597 85.6304 128.182 82.0186 124.3C77.4097 119.341 69.4315 114.247 62.9628 112.118C61.13 111.525 61.13 111.525 61.13 110.527V109.503L64.1757 107.967C71.3991 104.328 77.5175 98.0751 80.9136 90.7978C82.1265 88.1563 83.3393 84.5177 83.6628 82.5231C83.8245 81.4181 83.9054 81.3372 85.9268 80.286C91.2905 77.5099 94.6866 72.3618 95.037 66.5399C95.1987 63.7638 94.7675 61.6075 93.9319 61.0415C93.0964 60.4485 92.0452 60.5564 91.3444 61.2571C90.8054 61.8501 90.7784 62.0657 90.9401 64.4646C91.1019 66.6478 91.0479 67.3216 90.5358 68.9388C89.3499 72.82 86.412 75.9735 82.4769 77.456C80.3476 78.2646 80.2397 78.4532 79.7546 81.3911C79.1077 85.2993 76.6819 90.9056 74.1214 94.4095C72.3694 96.7813 69.6741 99.5306 67.3022 101.309C65.2808 102.846 60.8065 105.299 58.9198 105.892C57.3835 106.404 57.2487 106.754 57.087 110.204C56.9522 112.792 56.8175 113.6 56.2245 114.84C55.2542 116.969 53.8257 118.425 51.7503 119.449C50.1062 120.258 49.7288 120.338 47.33 120.365C45.2276 120.365 44.6077 120.473 44.1765 120.85C42.9636 121.956 43.4757 123.761 45.1468 124.22C47.4917 124.867 50.9147 124.381 53.8526 122.98C55.8202 122.036 58.6503 119.179 59.6476 117.158C60.537 115.298 60.3214 115.298 64.6339 117.131C69.755 119.287 74.3909 122.414 78.4069 126.457C80.5901 128.667 83.2854 131.955 84.0132 133.33L84.3366 133.95H47.6534C27.4925 133.95 10.9972 133.869 10.9972 133.734C11.0241 133.222 14.8245 128.505 16.9269 126.43C20.9429 122.414 25.5788 119.26 30.6729 117.131C34.9585 115.325 34.7968 115.325 35.6862 117.023C36.6026 118.721 37.5729 119.206 38.705 118.559C39.9179 117.886 40.0257 117.05 39.1632 114.921C38.5433 113.411 38.3546 112.495 38.2468 110.069C38.139 108.263 37.9503 106.916 37.7347 106.673C37.546 106.431 36.8183 106.053 36.1175 105.784C34.1499 105.029 31.2929 103.547 29.1905 102.199C26.8995 100.69 22.587 96.4579 20.9159 94.0591C18.3823 90.4743 16.2261 85.2993 15.4444 81.0407C15.2558 79.9626 15.0132 78.8845 14.9054 78.6419C14.8245 78.3993 13.8003 77.8333 12.6413 77.3751C8.7331 75.7849 5.98388 72.8739 4.79795 69.0466C3.5042 64.8958 4.52842 61.2571 7.54717 59.1817C8.89482 58.2653 9.37998 58.1036 11.5093 57.8341C14.9862 57.4028 14.8784 57.5915 14.9862 51.8774L15.094 47.1607H47.6534H80.2128L80.3206 51.8774C80.4284 57.6454 80.2936 57.4567 84.121 57.9149C87.0319 58.2384 87.6518 58.1036 88.0831 56.9716C88.4065 56.163 88.1909 55.1388 87.6518 54.6806C87.4362 54.4919 86.6276 54.2224 85.846 54.0337L84.4444 53.7372L84.3636 48.9665L84.3097 44.2228L83.5819 43.6837C82.9351 43.1446 82.5308 43.1177 77.3018 43.1177H71.7226L71.0757 41.7161C70.1862 39.8024 68.03 37.7001 65.8468 36.622C64.3643 35.8942 63.6636 35.7325 61.7499 35.6247C60.4831 35.5439 58.812 35.6517 58.0304 35.8134L56.6019 36.1368L54.8229 34.7892C53.7179 33.9536 52.3972 33.2259 51.346 32.9294L49.6749 32.3903L49.594 29.3446C49.4862 25.2478 49.8636 22.4177 50.7261 20.6657C51.6155 18.8329 53.5831 16.8923 55.4698 15.9489C56.7905 15.3021 57.2487 15.2212 59.6476 15.2212C61.7769 15.2212 62.5854 15.329 63.5288 15.7603L64.6878 16.2993L63.3401 17.1888C61.7769 18.186 60.3483 20.0189 59.6476 21.8786C58.9737 23.7114 59.1624 27.1614 60.0518 28.9673C60.9144 30.7462 62.7202 32.4982 64.58 33.3606L66.1163 34.0884L75.3343 34.1692L84.5792 34.2501L85.28 33.5493L85.9538 32.8755L85.8729 23.7653C85.7651 13.0649 85.7382 12.9841 83.1237 10.3427C80.9405 8.13252 79.1616 7.43175 76.089 7.59346C74.4179 7.70128 73.6093 7.88995 72.5042 8.45596C70.8061 9.31847 69.189 10.8817 68.4073 12.3911C68.0839 13.011 67.7604 13.4692 67.6526 13.4153C67.5448 13.3614 66.8171 12.9841 66.0624 12.5798C62.262 10.6122 57.2757 10.5314 53.5022 12.4181C52.8823 12.7415 51.7503 13.4692 50.9687 14.0353L49.5671 15.0864L49.2706 13.9544C49.1358 13.3075 48.5429 11.879 48.0038 10.7739C46.2788 7.29698 43.1522 4.76338 39.1901 3.63135C35.794 2.63409 30.6729 3.46964 27.9237 5.41026C27.4116 5.7876 27.0343 5.92236 26.9804 5.7337C26.9265 5.57198 26.4144 4.79034 25.8753 4.0087C23.6112 0.774323 19.2987 -0.762009 15.714 0.370026ZM79.6468 12.5798C81.7222 14.2509 81.7491 14.3048 81.83 22.6872L81.9108 30.1802L74.6874 30.1532C66.1163 30.1263 65.6042 30.0185 63.987 27.6466C63.421 26.811 63.2862 26.272 63.2862 25.0052C63.2862 23.2532 63.6636 22.3368 64.8226 21.2317C65.6311 20.4501 67.2753 19.6685 68.0569 19.6685C68.3265 19.6685 69.5933 20.7196 70.887 22.0134C72.8007 23.9271 73.3667 24.3314 74.0405 24.3314C75.1995 24.3314 75.9542 23.5767 75.9542 22.3907C75.9542 21.5282 75.6847 21.1509 73.6632 19.1294C72.3964 17.8626 71.3722 16.6228 71.3722 16.3532C71.3722 15.5716 72.1538 13.9274 72.9354 13.0919C74.0405 11.9329 75.0647 11.5556 76.9515 11.6634C78.353 11.7173 78.8112 11.879 79.6468 12.5798ZM50.78 37.0263C51.6425 37.4306 52.6397 38.2122 53.4753 39.1825C54.1761 40.0181 55.0386 40.7728 55.362 40.8536C55.6854 40.9345 56.6827 40.6919 57.5722 40.3146C60.8065 38.9399 64.0409 39.5868 66.3858 42.0126L67.437 43.1177H47.6534H27.8698L28.921 42.0126C31.2659 39.5868 34.5003 38.9399 37.7347 40.3146C38.6241 40.6919 39.6214 40.9345 39.9448 40.8536C40.2683 40.7728 41.1308 40.0181 41.8315 39.1825C43.5565 37.215 45.2546 36.3794 47.6534 36.3794C48.9202 36.3794 49.7827 36.5681 50.78 37.0263Z"
                  fill="black"
                />
                <path
                  d="M8.35595 62.0657C7.5204 62.9552 7.62821 63.7638 8.70634 65.354C9.35321 66.2704 9.73056 67.2138 9.91923 68.2919C10.2427 70.2595 10.7548 70.8794 12.1024 70.8794C12.911 70.8794 13.2345 70.7177 13.5849 70.2056C14.5821 68.6962 13.3962 64.3298 11.4556 62.3083C10.4313 61.2302 9.21845 61.1493 8.35595 62.0657Z"
                  fill="black"
                />
                <path
                  d="M83.8517 62.3082C81.8032 64.4106 80.5903 69.3161 81.8302 70.4211C82.5579 71.095 83.9595 71.095 84.6064 70.4481C84.9028 70.1247 85.2263 69.2622 85.388 68.3188C85.5767 67.2137 85.954 66.2704 86.6009 65.354C87.706 63.7368 87.7868 62.8473 86.9243 62.0387C86.0079 61.1493 84.8489 61.2571 83.8517 62.3082Z"
                  fill="black"
                />
                <path
                  d="M28.9479 70.3404C26.3604 71.0142 22.8564 73.6017 22.8564 74.8955C22.8564 75.165 23.099 75.7041 23.4225 76.1084C24.2311 77.1326 25.417 77.0517 26.9264 75.8658C28.4627 74.6798 30.0799 74.1138 31.8857 74.1138C33.6916 74.1138 35.3088 74.6798 36.8451 75.8658C38.3545 77.0517 39.5404 77.1326 40.349 76.1084C40.6725 75.7041 40.915 75.165 40.915 74.8955C40.915 74.006 39.0283 72.2541 36.9799 71.2568C35.201 70.3673 34.7428 70.2595 32.5057 70.1787C31.1311 70.1248 29.5408 70.2056 28.9479 70.3404Z"
                  fill="black"
                />
                <path
                  d="M60.483 70.3404C57.8955 71.0142 54.3916 73.6017 54.3916 74.8955C54.3916 75.165 54.6342 75.7041 54.9576 76.1084C55.7662 77.1326 56.9521 77.0517 58.4615 75.8658C59.9979 74.6798 61.615 74.1138 63.4209 74.1138C65.2268 74.1138 66.8439 74.6798 68.3803 75.8658C69.8896 77.0517 71.0756 77.1326 71.8842 76.1084C72.2076 75.7041 72.4502 75.165 72.4502 74.8685C72.4502 73.9521 70.4018 72.0923 68.3803 71.149C66.7092 70.3943 66.0893 70.2595 63.9869 70.1787C62.6393 70.1248 61.076 70.2056 60.483 70.3404Z"
                  fill="black"
                />
                <path
                  d="M40.1064 90.2856C39.783 90.609 39.5674 91.175 39.5674 91.7411C39.5674 92.4957 39.783 92.8461 40.6994 93.6547C44.1225 96.5657 48.8393 97.1856 52.9631 95.2989C54.9037 94.3825 56.5479 92.7383 56.5479 91.6871C56.5479 89.8274 54.5264 89.1266 52.99 90.4204C51.3729 91.795 50.0791 92.2801 48.0576 92.2801C46.0361 92.2801 44.7424 91.795 43.1252 90.4204C42.1279 89.5848 40.8611 89.5309 40.1064 90.2856Z"
                  fill="black"
                />
              </svg>
              <h4>{t("personalGrowth")}</h4>
              <p>{t("personalGrowthText")}</p>
            </div>
            <div className="submitidea-card-individual card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="113"
                viewBox="0 0 142 113"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    d="M66.2385 29.7369C66.2385 36.0462 63.7321 42.0972 59.2707 46.5585C54.8093 51.0199 48.7584 53.5263 42.4491 53.5263C36.1397 53.5263 30.0888 51.0199 25.6274 46.5585C21.166 42.0972 18.6597 36.0462 18.6597 29.7369C18.6597 23.4276 21.166 17.3766 25.6274 12.9153C30.0888 8.45389 36.1397 5.94751 42.4491 5.94751C48.7584 5.94751 54.8093 8.45389 59.2707 12.9153C63.7321 17.3766 66.2385 23.4276 66.2385 29.7369Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.4491 37.6667C44.5522 37.6667 46.5691 36.8312 48.0563 35.3441C49.5434 33.857 50.3789 31.84 50.3789 29.7369C50.3789 27.6338 49.5434 25.6168 48.0563 24.1297C46.5691 22.6426 44.5522 21.8071 42.4491 21.8071C40.3459 21.8071 38.329 22.6426 36.8419 24.1297C35.3547 25.6168 34.5193 27.6338 34.5193 29.7369C34.5193 31.84 35.3547 33.857 36.8419 35.3441C38.329 36.8312 40.3459 37.6667 42.4491 37.6667ZM42.4491 53.5263C45.5731 53.5263 48.6666 52.911 51.5529 51.7154C54.4391 50.5199 57.0617 48.7676 59.2707 46.5585C61.4798 44.3495 63.2321 41.727 64.4276 38.8407C65.6231 35.9544 66.2385 32.861 66.2385 29.7369C66.2385 26.6128 65.6231 23.5194 64.4276 20.6331C63.2321 17.7468 61.4798 15.1243 59.2707 12.9153C57.0617 10.7062 54.4391 8.9539 51.5529 7.75837C48.6666 6.56284 45.5731 5.94751 42.4491 5.94751C36.1397 5.94751 30.0888 8.45389 25.6274 12.9153C21.166 17.3766 18.6597 23.4276 18.6597 29.7369C18.6597 36.0462 21.166 42.0972 25.6274 46.5585C30.0888 51.0199 36.1397 53.5263 42.4491 53.5263Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.851 59.4736C39.6963 59.4736 36.6708 60.7268 34.4402 62.9575C32.2095 65.1882 30.9563 68.2136 30.9563 71.3683V83.263C30.9563 85.3661 30.1208 87.3831 28.6337 88.8702C27.1466 90.3573 25.1296 91.1928 23.0265 91.1928C20.9234 91.1928 18.9064 90.3573 17.4193 88.8702C15.9321 87.3831 15.0967 85.3661 15.0967 83.263V71.3683C15.0967 64.0074 18.0208 56.948 23.2257 51.7431C28.4307 46.5381 35.4901 43.614 42.851 43.614C50.2119 43.614 57.2713 46.5381 62.4762 51.7431C67.6812 56.948 70.6053 64.0074 70.6053 71.3683V75.3332C70.6053 77.4363 69.7698 79.4533 68.2827 80.9404C66.7956 82.4275 64.7786 83.263 62.6755 83.263C60.5724 83.263 58.5554 82.4275 57.0683 80.9404C55.5811 79.4533 54.7457 77.4363 54.7457 75.3332V71.3683C54.7457 68.2136 53.4925 65.1882 51.2618 62.9575C49.0311 60.7268 46.0056 59.4736 42.851 59.4736Z"
                    fill="black"
                  />
                  <path
                    d="M90.0288 29.7369C90.0288 36.0462 92.5352 42.0972 96.9966 46.5585C101.458 51.0199 107.509 53.5263 113.818 53.5263C120.128 53.5263 126.178 51.0199 130.64 46.5585C135.101 42.0972 137.608 36.0462 137.608 29.7369C137.608 23.4276 135.101 17.3766 130.64 12.9153C126.178 8.45389 120.128 5.94751 113.818 5.94751C107.509 5.94751 101.458 8.45389 96.9966 12.9153C92.5352 17.3766 90.0288 23.4276 90.0288 29.7369Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.818 37.6667C111.715 37.6667 109.698 36.8312 108.211 35.3441C106.724 33.857 105.888 31.84 105.888 29.7369C105.888 27.6338 106.724 25.6168 108.211 24.1297C109.698 22.6426 111.715 21.8071 113.818 21.8071C115.921 21.8071 117.938 22.6426 119.425 24.1297C120.913 25.6168 121.748 27.6338 121.748 29.7369C121.748 31.84 120.913 33.857 119.425 35.3441C117.938 36.8312 115.921 37.6667 113.818 37.6667ZM113.818 53.5263C110.694 53.5263 107.601 52.911 104.714 51.7154C101.828 50.5199 99.2056 48.7676 96.9966 46.5585C94.7875 44.3495 93.0352 41.727 91.8397 38.8407C90.6441 35.9544 90.0288 32.861 90.0288 29.7369C90.0288 26.6128 90.6441 23.5194 91.8397 20.6331C93.0352 17.7468 94.7875 15.1243 96.9966 12.9153C99.2056 10.7062 101.828 8.9539 104.714 7.75837C107.601 6.56284 110.694 5.94751 113.818 5.94751C120.128 5.94751 126.178 8.45389 130.64 12.9153C135.101 17.3766 137.608 23.4276 137.608 29.7369C137.608 36.0462 135.101 42.0972 130.64 46.5585C126.178 51.0199 120.128 53.5263 113.818 53.5263Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.429 59.4736C116.583 59.4736 119.609 60.7268 121.839 62.9575C124.07 65.1882 125.323 68.2136 125.323 71.3683V83.263C125.323 85.3661 126.159 87.3831 127.646 88.8702C129.133 90.3573 131.15 91.1928 133.253 91.1928C135.356 91.1928 137.373 90.3573 138.86 88.8702C140.347 87.3831 141.183 85.3661 141.183 83.263V71.3683C141.183 64.0074 138.259 56.948 133.054 51.7431C127.849 46.5381 120.79 43.614 113.429 43.614C106.068 43.614 99.0083 46.5381 93.8034 51.7431C88.5984 56.948 85.6743 64.0074 85.6743 71.3683V75.3332C85.6743 77.4363 86.5098 79.4533 87.9969 80.9404C89.484 82.4275 91.501 83.263 93.6041 83.263C95.7072 83.263 97.7242 82.4275 99.2113 80.9404C100.698 79.4533 101.534 77.4363 101.534 75.3332V71.3683C101.534 68.2136 102.787 65.1882 105.018 62.9575C107.248 60.7268 110.274 59.4736 113.429 59.4736Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.537 81.2807C75.3823 81.2807 72.3569 82.5339 70.1262 84.7646C67.8955 86.9953 66.6423 90.0208 66.6423 93.1754V105.07C66.6423 107.173 65.8069 109.19 64.3197 110.677C62.8326 112.164 60.8156 113 58.7125 113C56.6094 113 54.5924 112.164 53.1053 110.677C51.6182 109.19 50.7827 107.173 50.7827 105.07V93.1754C50.7827 85.8145 53.7068 78.7551 58.9118 73.5502C64.1167 68.3452 71.1761 65.4211 78.537 65.4211C85.8979 65.4211 92.9573 68.3452 98.1623 73.5502C103.367 78.7551 106.291 85.8145 106.291 93.1754V105.07C106.291 107.173 105.456 109.19 103.969 110.677C102.482 112.164 100.465 113 98.3615 113C96.2584 113 94.2414 112.164 92.7543 110.677C91.2672 109.19 90.4317 107.173 90.4317 105.07V93.1754C90.4317 90.0208 89.1785 86.9953 86.9478 84.7646C84.7171 82.5339 81.6917 81.2807 78.537 81.2807Z"
                    fill="black"
                  />
                  <path
                    d="M101.922 51.5443C101.922 57.8536 99.4157 63.9045 94.9543 68.3659C90.4929 72.8273 84.442 75.3337 78.1327 75.3337C71.8233 75.3337 65.7724 72.8273 61.311 68.3659C56.8496 63.9045 54.3433 57.8536 54.3433 51.5443C54.3433 45.2349 56.8496 39.184 61.311 34.7226C65.7724 30.2613 71.8233 27.7549 78.1327 27.7549C84.442 27.7549 90.4929 30.2613 94.9543 34.7226C99.4157 39.184 101.922 45.2349 101.922 51.5443Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.1327 59.4741C80.2358 59.4741 82.2527 58.6386 83.7399 57.1515C85.227 55.6644 86.0625 53.6474 86.0625 51.5443C86.0625 49.4412 85.227 47.4242 83.7399 45.9371C82.2527 44.4499 80.2358 43.6145 78.1327 43.6145C76.0295 43.6145 74.0126 44.4499 72.5254 45.9371C71.0383 47.4242 70.2029 49.4412 70.2029 51.5443C70.2029 53.6474 71.0383 55.6644 72.5254 57.1515C74.0126 58.6386 76.0295 59.4741 78.1327 59.4741ZM78.1327 75.3337C84.442 75.3337 90.4929 72.8273 94.9543 68.3659C99.4157 63.9045 101.922 57.8536 101.922 51.5443C101.922 45.2349 99.4157 39.184 94.9543 34.7226C90.4929 30.2613 84.442 27.7549 78.1327 27.7549C71.8233 27.7549 65.7724 30.2613 61.311 34.7226C56.8496 39.184 54.3433 45.2349 54.3433 51.5443C54.3433 57.8536 56.8496 63.9045 61.311 68.3659C65.7724 72.8273 71.8233 75.3337 78.1327 75.3337Z"
                    fill="black"
                  />
                  <path
                    d="M22.624 59.4736H62.273V91.1928H22.624V59.4736ZM93.9922 59.4736H133.641V91.1928H93.9922V59.4736Z"
                    fill="black"
                  />
                  <path
                    d="M62.272 75.3333H93.9912L97.9561 113H58.3071L62.272 75.3333Z"
                    fill="black"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.5702 39.649C32.7764 39.649 36.8103 37.9781 39.7846 35.0038C42.7588 32.0296 44.4298 27.9956 44.4298 23.7894C44.4298 19.5832 42.7588 15.5492 39.7846 12.575C36.8103 9.60071 32.7764 7.9298 28.5702 7.9298C24.3639 7.9298 20.33 9.60071 17.3557 12.575C14.3815 15.5492 12.7106 19.5832 12.7106 23.7894C12.7106 27.9956 14.3815 32.0296 17.3557 35.0038C20.33 37.9781 24.3639 39.649 28.5702 39.649ZM28.5702 47.5788C31.6942 47.5788 34.7877 46.9635 37.674 45.7679C40.5602 44.5724 43.1827 42.8201 45.3918 40.611C47.6008 38.402 49.3532 35.7795 50.5487 32.8932C51.7442 30.0069 52.3596 26.9135 52.3596 23.7894C52.3596 20.6653 51.7442 17.5718 50.5487 14.6856C49.3532 11.7993 47.6008 9.1768 45.3918 6.96775C43.1827 4.7587 40.5602 3.00639 37.674 1.81086C34.7877 0.615332 31.6942 -4.65522e-08 28.5702 0C22.2608 9.40165e-08 16.2099 2.50638 11.7485 6.96775C7.28714 11.4291 4.78076 17.4801 4.78076 23.7894C4.78076 30.0987 7.28714 36.1497 11.7485 40.611C16.2099 45.0724 22.2608 47.5788 28.5702 47.5788Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4836 38.8255C19.8529 39.1938 20.1458 39.6314 20.3457 40.1131C20.5456 40.5947 20.6485 41.1111 20.6485 41.6327C20.6485 42.1542 20.5456 42.6706 20.3457 43.1523C20.1458 43.634 19.8529 44.0715 19.4836 44.4398L16.8034 47.1122C11.6453 52.2716 8.74737 59.2683 8.74669 66.5639V81.2817C8.74669 82.3332 8.32896 83.3417 7.5854 84.0853C6.84184 84.8288 5.83335 85.2466 4.78179 85.2466C3.73024 85.2466 2.72175 84.8288 1.97819 84.0853C1.23462 83.3417 0.816895 82.3332 0.816895 81.2817V66.5639C0.818019 57.1654 4.55172 48.1521 11.197 41.5058L13.8693 38.8255C14.2376 38.4563 14.6752 38.1633 15.1569 37.9634C15.6386 37.7636 16.155 37.6607 16.6765 37.6607C17.198 37.6607 17.7144 37.7636 18.1961 37.9634C18.6778 38.1633 19.1153 38.4563 19.4836 38.8255ZM112.992 36.4466C112.623 36.8149 112.33 37.2524 112.13 37.7341C111.93 38.2158 111.827 38.7322 111.827 39.2537C111.827 39.7752 111.93 40.2916 112.13 40.7733C112.33 41.255 112.623 41.6926 112.992 42.0609L115.672 44.7332C118.226 47.2877 120.253 50.3203 121.635 53.6578C123.017 56.9954 123.729 60.5725 123.729 64.185V81.2817C123.729 82.3332 124.146 83.3417 124.89 84.0853C125.634 84.8288 126.642 85.2466 127.694 85.2466C128.745 85.2466 129.754 84.8288 130.497 84.0853C131.241 83.3417 131.659 82.3332 131.659 81.2817V64.185C131.657 54.7865 127.924 45.7731 121.278 39.1268L118.606 36.4466C118.238 36.0773 117.8 35.7844 117.319 35.5845C116.837 35.3846 116.32 35.2817 115.799 35.2817C115.277 35.2817 114.761 35.3846 114.279 35.5845C113.798 35.7844 113.36 36.0773 112.992 36.4466Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M99.9408 39.649C95.7346 39.649 91.7007 37.9781 88.7264 35.0038C85.7522 32.0296 84.0812 27.9956 84.0812 23.7894C84.0812 19.5832 85.7522 15.5492 88.7264 12.575C91.7007 9.60071 95.7346 7.9298 99.9408 7.9298C104.147 7.9298 108.181 9.60071 111.155 12.575C114.13 15.5492 115.8 19.5832 115.8 23.7894C115.8 27.9956 114.13 32.0296 111.155 35.0038C108.181 37.9781 104.147 39.649 99.9408 39.649ZM99.9408 47.5788C96.8168 47.5788 93.7233 46.9635 90.837 45.7679C87.9508 44.5724 85.3282 42.8201 83.1192 40.611C80.9101 38.402 79.1578 35.7795 77.9623 32.8932C76.7668 30.0069 76.1514 26.9135 76.1514 23.7894C76.1514 20.6653 76.7668 17.5718 77.9623 14.6856C79.1578 11.7993 80.9101 9.1768 83.1192 6.96775C85.3282 4.7587 87.9508 3.00639 90.837 1.81086C93.7233 0.615332 96.8168 -4.65522e-08 99.9408 0C106.25 9.40165e-08 112.301 2.50638 116.762 6.96775C121.224 11.4291 123.73 17.4801 123.73 23.7894C123.73 30.0987 121.224 36.1497 116.762 40.611C112.301 45.0724 106.25 47.5788 99.9408 47.5788ZM64.2567 73.3506C58.999 73.3506 53.9565 75.4393 50.2387 79.1571C46.5209 82.8749 44.4322 87.9173 44.4322 93.1751V103.484C44.4322 104.535 44.0145 105.544 43.2709 106.287C42.5274 107.031 41.5189 107.449 40.4673 107.449C39.4158 107.449 38.4073 107.031 37.6637 106.287C36.9202 105.544 36.5024 104.535 36.5024 103.484V93.1751C36.5024 85.8142 39.4265 78.7548 44.6315 73.5499C49.8364 68.3449 56.8958 65.4208 64.2567 65.4208C71.6176 65.4208 78.677 68.3449 83.882 73.5499C89.0869 78.7548 92.011 85.8142 92.011 93.1751V103.484C92.011 104.535 91.5933 105.544 90.8497 106.287C90.1062 107.031 89.0977 107.449 88.0461 107.449C86.9946 107.449 85.9861 107.031 85.2425 106.287C84.499 105.544 84.0812 104.535 84.0812 103.484V93.1751C84.0812 90.5717 83.5685 87.9938 82.5722 85.5886C81.5759 83.1834 80.1157 80.998 78.2748 79.1571C76.4339 77.3162 74.2485 75.856 71.8432 74.8597C69.438 73.8634 66.8601 73.3506 64.2567 73.3506Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64.2537 61.4564C68.46 61.4564 72.4939 59.7854 75.4682 56.8112C78.4424 53.8369 80.1133 49.803 80.1133 45.5968C80.1133 41.3905 78.4424 37.3566 75.4682 34.3823C72.4939 31.4081 68.46 29.7372 64.2537 29.7372C60.0475 29.7372 56.0136 31.4081 53.0393 34.3823C50.0651 37.3566 48.3942 41.3905 48.3942 45.5968C48.3942 49.803 50.0651 53.8369 53.0393 56.8112C56.0136 59.7854 60.0475 61.4564 64.2537 61.4564ZM64.2537 69.3862C70.5631 69.3862 76.614 66.8798 81.0754 62.4184C85.5368 57.957 88.0431 51.9061 88.0431 45.5968C88.0431 39.2874 85.5368 33.2365 81.0754 28.7751C76.614 24.3137 70.5631 21.8074 64.2537 21.8074C57.9444 21.8074 51.8935 24.3137 47.4321 28.7751C42.9707 33.2365 40.4644 39.2874 40.4644 45.5968C40.4644 51.9061 42.9707 57.957 47.4321 62.4184C51.8935 66.8798 57.9444 69.3862 64.2537 69.3862Z"
                  fill="black"
                />
              </svg>
              <h4>{t("communityImpact")}</h4>
              <p>{t("communityImpactText")}</p>
            </div>

            <div className="submitidea-card-individual card3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 118 133"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    d="M97.8611 5.30068C91.8111 6.70068 87.5611 11.3757 86.7111 17.5507C86.2111 21.3007 87.3611 25.4257 89.7361 28.3007L90.7111 29.4507L82.4361 41.1507C77.8861 47.5757 74.1111 52.9007 74.0111 53.0007C73.9361 53.1007 73.1611 52.8507 72.3111 52.4257C67.3111 50.0257 60.9611 50.0757 56.0611 52.5507C54.2611 53.4507 52.4611 54.7007 50.9861 56.0757L50.1111 56.9007L39.3111 48.4757C33.3861 43.8507 28.4361 40.0007 28.3611 39.9007C28.2611 39.8007 28.4361 39.0257 28.7361 38.1507C29.3111 36.5257 29.4361 34.1507 29.0861 32.0757C28.5861 29.1507 25.8611 25.7757 22.8611 24.3007C18.4611 22.2007 13.2611 23.1507 9.88609 26.7007C7.81109 28.8757 6.93609 30.9007 6.78609 33.9507C6.71109 35.9257 6.76109 36.6007 7.23609 37.9507C8.28609 41.1007 10.1861 43.2757 13.1111 44.7257C16.3361 46.3007 19.7611 46.2507 23.1611 44.5757C24.7361 43.8007 25.0611 43.7257 25.4361 44.0007C25.7111 44.1757 30.7361 48.0757 36.6611 52.6757L47.4111 61.0007L46.6611 63.1507C44.4361 69.6007 45.9611 76.9507 50.5361 81.8257C51.4861 82.8757 51.9611 83.5507 51.8361 83.7507C51.3611 84.5507 39.1111 101.876 38.7361 102.276C38.3111 102.726 38.2611 102.726 37.0611 102.126C34.2861 100.701 29.8861 100.276 26.6611 101.101C19.9111 102.776 15.1361 108.976 15.1611 115.951C15.1861 120.176 16.6611 123.626 19.7361 126.726C22.7111 129.726 26.2361 131.201 30.4861 131.201C34.6361 131.201 38.1861 129.726 41.1361 126.826C43.8611 124.101 45.3611 120.876 45.6361 117.076C45.9111 113.501 45.0361 110.151 43.1111 107.351L42.1861 106.026L48.8861 96.5507C52.5611 91.3257 55.7361 86.8757 55.9611 86.6507C56.3361 86.2757 56.5111 86.3007 58.5861 87.0007C62.3111 88.2507 66.5361 88.2257 70.1611 86.9507L71.4861 86.4757L74.5861 91.0257C76.2861 93.5257 80.0361 99.0507 82.9111 103.326L88.1861 111.076L87.3611 112.201C84.3361 116.376 83.9111 121.276 86.1611 125.951C87.0361 127.751 89.9361 130.651 91.7361 131.526C93.2611 132.276 96.0611 132.951 97.6111 132.951C99.1611 132.951 101.961 132.276 103.411 131.551C107.811 129.401 110.761 124.251 110.411 119.326C110.011 113.626 106.486 109.226 101.011 107.601C99.0611 107.026 95.9361 107.076 93.8361 107.726C92.4611 108.151 92.1111 108.176 91.9611 107.901C91.8611 107.726 88.1861 102.276 83.8111 95.8257L75.8361 84.0757L77.7361 82.0507C79.6111 80.0507 81.2611 77.3507 81.9861 75.1257C82.1361 74.6257 82.4111 74.2007 82.5861 74.2007C82.8611 74.2007 93.3111 76.2507 94.6361 76.5757C95.0861 76.6757 95.1861 76.9507 95.3111 78.1257C95.6111 81.0007 97.9861 84.5507 100.686 86.1257C106.036 89.2507 113.086 87.5007 116.161 82.2757C118.161 78.8257 118.286 74.0757 116.411 70.9507C114.161 67.1757 110.761 65.2007 106.486 65.1757C102.286 65.1507 98.7111 67.2257 96.5861 70.8757C96.3361 71.3257 96.0111 71.7007 95.8861 71.7007C95.6611 71.7007 84.6861 69.5757 83.5861 69.3257C83.1361 69.2257 83.0111 68.9507 82.8611 67.5507C82.4861 63.9257 81.2361 60.8007 79.0111 57.8757L77.7861 56.2507L85.9111 44.7757C90.3861 38.4757 94.1861 33.1007 94.3611 32.8507C94.7111 32.4007 94.7611 32.4007 96.5361 32.9757C98.9111 33.7507 102.886 33.8007 104.986 33.1007C111.211 31.0007 115.236 25.6007 115.236 19.3257C115.236 14.4757 112.411 9.40068 108.386 7.07568C105.236 5.22569 101.136 4.55067 97.8611 5.30068Z"
                    fill="black"
                  />
                </g>
                <circle
                  cx="25.2578"
                  cy="110.5"
                  r="13.5"
                  stroke="black"
                  strokeWidth="4"
                />
                <circle
                  cx="58.7578"
                  cy="64"
                  r="17"
                  stroke="black"
                  strokeWidth="4"
                />
                <circle
                  cx="91.7578"
                  cy="115"
                  r="11"
                  stroke="black"
                  strokeWidth="4"
                />
                <circle
                  cx="101.258"
                  cy="70.5"
                  r="10.5"
                  stroke="black"
                  strokeWidth="4"
                />
                <circle
                  cx="95.2578"
                  cy="14.5"
                  r="12.5"
                  stroke="black"
                  strokeWidth="4"
                />
                <circle
                  cx="12.2578"
                  cy="29"
                  r="10"
                  stroke="black"
                  strokeWidth="4"
                />
                <path
                  d="M33.7578 100.5L49.2578 78.5"
                  stroke="black"
                  strokeWidth="4"
                />
                <path
                  d="M20.7578 37L43.2578 54"
                  stroke="black"
                  strokeWidth="4"
                />
                <path
                  d="M87.7578 25.5L70.7578 49.5"
                  stroke="black"
                  strokeWidth="4"
                />
                <path
                  d="M77.2578 66.5L89.7578 69.5"
                  stroke="black"
                  strokeWidth="4"
                />
                <path
                  d="M68.2578 79L84.7578 104.5"
                  stroke="black"
                  strokeWidth="4"
                />
              </svg>
              <h4>{t("networking")}</h4>
              <p>{t("networkingText")}</p>
            </div>
          </div>
        </div>

        <div className="volunteering-eligibility-selection">
          <div>
            <h1>
              <span>{t("eligibility")}</span>&nbsp;{t("criteria")}
            </h1>
            <div className="volunteering-eligilibility-set">
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec1")}</p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec2")}</p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec3")}</p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec4")}</p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec5")}</p>
              </div>
            </div>
          </div>
          <div>
            <h1>
              <span>{t("selection")}</span>&nbsp;{t("process")}
            </h1>
            <p className="volunteering-selection-content">
              {t("selectionProcessText")}
            </p>
          </div>
        </div>

        {/* apply */}
        <div className="volunteering-apply-button-wrapper">
          <p>
            {t("lAHand")}
            {t("touch")}
            {t("aHeart")}
            {t("volunteerWithUnnathi")}
          </p>
          <a rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd5FgrM2Z72F0blVXNgx0Q1zNlR24_b0C7G4J5qAiOy7n_XUA/viewform">
            <p>Apply for volunteering</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
            >
              <path
                d="M26.7189 12.0805C27.0005 11.7988 27.1587 11.4168 27.1587 11.0185C27.1587 10.6201 27.0005 10.2381 26.7189 9.95642L18.2211 1.4586C18.0825 1.31512 17.9167 1.20068 17.7335 1.12196C17.5502 1.04323 17.3531 1.00179 17.1536 1.00006C16.9541 0.998323 16.7563 1.03633 16.5717 1.11186C16.3871 1.18739 16.2194 1.29893 16.0784 1.43998C15.9373 1.58102 15.8258 1.74874 15.7502 1.93335C15.6747 2.11797 15.6367 2.31577 15.6384 2.51523C15.6402 2.71469 15.6816 2.91181 15.7603 3.09508C15.8391 3.27835 15.9535 3.44411 16.097 3.58268L22.0306 9.51628L2.13723 9.51628C1.73883 9.51628 1.35674 9.67455 1.07503 9.95626C0.793316 10.238 0.635052 10.6201 0.635052 11.0185C0.635052 11.4169 0.793316 11.7989 1.07503 12.0807C1.35674 12.3624 1.73883 12.5206 2.13723 12.5206L22.0306 12.5206L16.097 18.4542C15.8233 18.7376 15.6719 19.117 15.6754 19.5109C15.6788 19.9047 15.8368 20.2815 16.1153 20.56C16.3938 20.8385 16.7706 20.9965 17.1644 20.9999C17.5583 21.0034 17.9377 20.852 18.2211 20.5783L26.7189 12.0805Z"
                fill="black"
                stroke="white"
                stroke-width="1.2"
              />
            </svg>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Volunteering;

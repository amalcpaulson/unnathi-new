import React from "react";
import "./JoinUs.css";
import kyyb from "../../assets/kayyy.png";
import kyyy from "../../assets/kayyyy.webp";
import { useTranslation } from "react-i18next";

const Curious = () => {
  const { t } = useTranslation(["VM"]);
  return (
    <div className="joinus-wrapper">
      <div className="joinus-bg-sect"></div>
      <div className="joinus-content-wrapper">
        {/* href="https://forms.gle/GV56Vb5D7qP6ZhcR6" */}
        <a href="/internship" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="131"
                height="105"
                viewBox="0 0 131 105"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    d="M61.0757 27.6318C61.0757 33.4945 58.7468 39.1171 54.6012 43.2626C50.4557 47.4081 44.8331 49.7371 38.9705 49.7371C33.1078 49.7371 27.4852 47.4081 23.3397 43.2626C19.1942 39.1171 16.8652 33.4945 16.8652 27.6318C16.8652 21.7692 19.1942 16.1466 23.3397 12.0011C27.4852 7.85555 33.1078 5.52661 38.9705 5.52661C44.8331 5.52661 50.4557 7.85555 54.6012 12.0011C58.7468 16.1466 61.0757 21.7692 61.0757 27.6318Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9705 35.0003C40.9247 35.0003 42.7989 34.2239 44.1807 32.8421C45.5626 31.4602 46.3389 29.5861 46.3389 27.6318C46.3389 25.6776 45.5626 23.8034 44.1807 22.4216C42.7989 21.0397 40.9247 20.2634 38.9705 20.2634C37.0162 20.2634 35.1421 21.0397 33.7602 22.4216C32.3784 23.8034 31.6021 25.6776 31.6021 27.6318C31.6021 29.5861 32.3784 31.4602 33.7602 32.8421C35.1421 34.2239 37.0162 35.0003 38.9705 35.0003ZM38.9705 49.7371C41.8734 49.7371 44.7478 49.1653 47.4298 48.0544C50.1117 46.9435 52.5486 45.3153 54.6012 43.2626C56.6539 41.2099 58.2821 38.7731 59.393 36.0911C60.5039 33.4092 61.0757 30.5347 61.0757 27.6318C61.0757 24.7289 60.5039 21.8545 59.393 19.1725C58.2821 16.4906 56.6539 14.0537 54.6012 12.0011C52.5486 9.94842 50.1117 8.32017 47.4298 7.20927C44.7478 6.09838 41.8734 5.52661 38.9705 5.52661C33.1078 5.52661 27.4852 7.85555 23.3397 12.0011C19.1942 16.1466 16.8652 21.7692 16.8652 27.6318C16.8652 33.4945 19.1942 39.1171 23.3397 43.2626C27.4852 47.4081 33.1078 49.7371 38.9705 49.7371Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.3441 55.2632C36.4128 55.2632 33.6015 56.4277 31.5287 58.5004C29.456 60.5732 28.2915 63.3845 28.2915 66.3158V77.3684C28.2915 79.3226 27.5152 81.1968 26.1334 82.5787C24.7515 83.9605 22.8773 84.7368 20.9231 84.7368C18.9689 84.7368 17.0947 83.9605 15.7128 82.5787C14.331 81.1968 13.5547 79.3226 13.5547 77.3684V66.3158C13.5547 59.476 16.2718 52.9164 21.1082 48.0799C25.9447 43.2435 32.5043 40.5264 39.3441 40.5264C46.1839 40.5264 52.7436 43.2435 57.58 48.0799C62.4165 52.9164 65.1336 59.476 65.1336 66.3158V70C65.1336 71.9542 64.3572 73.8284 62.9754 75.2103C61.5936 76.5921 59.7194 77.3684 57.7652 77.3684C55.8109 77.3684 53.9367 76.5921 52.5549 75.2103C51.1731 73.8284 50.3967 71.9542 50.3967 70V66.3158C50.3967 63.3845 49.2323 60.5732 47.1595 58.5004C45.0867 56.4277 42.2755 55.2632 39.3441 55.2632Z"
                    fill="black"
                  />
                  <path
                    d="M83.1816 27.6318C83.1816 33.4945 85.5106 39.1171 89.6561 43.2626C93.8016 47.4081 99.4242 49.7371 105.287 49.7371C111.15 49.7371 116.772 47.4081 120.918 43.2626C125.063 39.1171 127.392 33.4945 127.392 27.6318C127.392 21.7692 125.063 16.1466 120.918 12.0011C116.772 7.85555 111.15 5.52661 105.287 5.52661C99.4242 5.52661 93.8016 7.85555 89.6561 12.0011C85.5106 16.1466 83.1816 21.7692 83.1816 27.6318Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M105.287 35.0003C103.333 35.0003 101.458 34.2239 100.077 32.8421C98.6948 31.4602 97.9185 29.5861 97.9185 27.6318C97.9185 25.6776 98.6948 23.8034 100.077 22.4216C101.458 21.0397 103.333 20.2634 105.287 20.2634C107.241 20.2634 109.115 21.0397 110.497 22.4216C111.879 23.8034 112.655 25.6776 112.655 27.6318C112.655 29.5861 111.879 31.4602 110.497 32.8421C109.115 34.2239 107.241 35.0003 105.287 35.0003ZM105.287 49.7371C102.384 49.7371 99.5095 49.1653 96.8276 48.0544C94.1456 46.9435 91.7088 45.3153 89.6561 43.2626C87.6034 41.2099 85.9752 38.7731 84.8643 36.0911C83.7534 33.4092 83.1816 30.5347 83.1816 27.6318C83.1816 24.7289 83.7534 21.8545 84.8643 19.1725C85.9752 16.4906 87.6034 14.0537 89.6561 12.0011C91.7088 9.94842 94.1456 8.32017 96.8276 7.20927C99.5095 6.09838 102.384 5.52661 105.287 5.52661C111.15 5.52661 116.772 7.85555 120.918 12.0011C125.063 16.1466 127.392 21.7692 127.392 27.6318C127.392 33.4945 125.063 39.1171 120.918 43.2626C116.772 47.4081 111.15 49.7371 105.287 49.7371Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M104.926 55.2632C107.857 55.2632 110.669 56.4277 112.742 58.5004C114.814 60.5732 115.979 63.3845 115.979 66.3158V77.3684C115.979 79.3226 116.755 81.1968 118.137 82.5787C119.519 83.9605 121.393 84.7368 123.347 84.7368C125.301 84.7368 127.176 83.9605 128.557 82.5787C129.939 81.1968 130.716 79.3226 130.716 77.3684V66.3158C130.716 59.476 127.999 52.9164 123.162 48.0799C118.326 43.2435 111.766 40.5264 104.926 40.5264C98.0864 40.5264 91.5267 43.2435 86.6903 48.0799C81.8538 52.9164 79.1367 59.476 79.1367 66.3158V70C79.1367 71.9542 79.913 73.8284 81.2949 75.2103C82.6767 76.5921 84.5509 77.3684 86.5051 77.3684C88.4594 77.3684 90.3335 76.5921 91.7154 75.2103C93.0972 73.8284 93.8735 71.9542 93.8735 70V66.3158C93.8735 63.3845 95.038 60.5732 97.1108 58.5004C99.1835 56.4277 101.995 55.2632 104.926 55.2632Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.5043 75.5264C69.5729 75.5264 66.7617 76.6908 64.6889 78.7636C62.6161 80.8364 61.4517 83.6476 61.4517 86.579V97.6316C61.4517 99.5858 60.6754 101.46 59.2935 102.842C57.9117 104.224 56.0375 105 54.0833 105C52.129 105 50.2548 104.224 48.873 102.842C47.4912 101.46 46.7148 99.5858 46.7148 97.6316V86.579C46.7148 79.7392 49.4319 73.1796 54.2684 68.3431C59.1049 63.5066 65.6645 60.7896 72.5043 60.7896C79.3441 60.7896 85.9037 63.5066 90.7402 68.3431C95.5766 73.1796 98.2937 79.7392 98.2937 86.579V97.6316C98.2937 99.5858 97.5174 101.46 96.1356 102.842C94.7537 104.224 92.8795 105 90.9253 105C88.9711 105 87.0969 104.224 85.7151 102.842C84.3332 101.46 83.5569 99.5858 83.5569 97.6316V86.579C83.5569 83.6476 82.3924 80.8364 80.3197 78.7636C78.2469 76.6908 75.4356 75.5264 72.5043 75.5264Z"
                    fill="black"
                  />
                  <path
                    d="M94.2339 47.8953C94.2339 53.7579 91.905 59.3805 87.7594 63.526C83.6139 67.6716 77.9913 70.0005 72.1287 70.0005C66.266 70.0005 60.6434 67.6716 56.4979 63.526C52.3524 59.3805 50.0234 53.7579 50.0234 47.8953C50.0234 42.0326 52.3524 36.41 56.4979 32.2645C60.6434 28.119 66.266 25.79 72.1287 25.79C77.9913 25.79 83.6139 28.119 87.7594 32.2645C91.905 36.41 94.2339 42.0326 94.2339 47.8953Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.1287 55.2637C74.0829 55.2637 75.9571 54.4874 77.3389 53.1055C78.7208 51.7237 79.4971 49.8495 79.4971 47.8953C79.4971 45.941 78.7208 44.0669 77.3389 42.685C75.9571 41.3032 74.0829 40.5269 72.1287 40.5269C70.1744 40.5269 68.3003 41.3032 66.9184 42.685C65.5366 44.0669 64.7603 45.941 64.7603 47.8953C64.7603 49.8495 65.5366 51.7237 66.9184 53.1055C68.3003 54.4874 70.1744 55.2637 72.1287 55.2637ZM72.1287 70.0005C77.9913 70.0005 83.6139 67.6716 87.7594 63.526C91.905 59.3805 94.2339 53.7579 94.2339 47.8953C94.2339 42.0326 91.905 36.41 87.7594 32.2645C83.6139 28.119 77.9913 25.79 72.1287 25.79C66.266 25.79 60.6434 28.119 56.4979 32.2645C52.3524 36.41 50.0234 42.0326 50.0234 47.8953C50.0234 53.7579 52.3524 59.3805 56.4979 63.526C60.6434 67.6716 66.266 70.0005 72.1287 70.0005Z"
                    fill="black"
                  />
                  <path
                    d="M20.5488 55.2632H57.3909V84.7368H20.5488V55.2632ZM86.8645 55.2632H123.707V84.7368H86.8645V55.2632Z"
                    fill="black"
                  />
                  <path
                    d="M57.3912 70.0002H86.8649L90.5491 105H53.707L57.3912 70.0002Z"
                    fill="black"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.074 36.842C29.9824 36.842 33.7308 35.2894 36.4945 32.5257C39.2582 29.762 40.8108 26.0137 40.8108 22.1052C40.8108 18.1968 39.2582 14.4484 36.4945 11.6847C33.7308 8.92103 29.9824 7.36841 26.074 7.36841C22.1655 7.36841 18.4172 8.92103 15.6535 11.6847C12.8898 14.4484 11.3372 18.1968 11.3372 22.1052C11.3372 26.0137 12.8898 29.762 15.6535 32.5257C18.4172 35.2894 22.1655 36.842 26.074 36.842ZM26.074 44.2105C28.9769 44.2105 31.8514 43.6387 34.5333 42.5278C37.2152 41.4169 39.6521 39.7887 41.7047 37.736C43.7574 35.6833 45.3857 33.2465 46.4966 30.5645C47.6074 27.8826 48.1792 25.0081 48.1792 22.1052C48.1792 19.2023 47.6074 16.3279 46.4966 13.6459C45.3857 10.964 43.7574 8.52713 41.7047 6.47447C39.6521 4.42181 37.2152 2.79355 34.5333 1.68266C31.8514 0.57177 28.9769 -4.32566e-08 26.074 0C20.2113 8.73606e-08 14.5888 2.32894 10.4432 6.47447C6.29769 10.62 3.96875 16.2426 3.96875 22.1052C3.96875 27.9679 6.29769 33.5905 10.4432 37.736C14.5888 41.8815 20.2113 44.2105 26.074 44.2105Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6304 36.0768C17.9735 36.4191 18.2457 36.8256 18.4314 37.2732C18.6172 37.7208 18.7128 38.2006 18.7128 38.6852C18.7128 39.1698 18.6172 39.6497 18.4314 40.0973C18.2457 40.5449 17.9735 40.9514 17.6304 41.2937L15.1399 43.7768C10.347 48.571 7.65419 55.0724 7.65357 61.8515V75.5273C7.65357 76.5044 7.26541 77.4415 6.57449 78.1324C5.88356 78.8233 4.94647 79.2115 3.96936 79.2115C2.99225 79.2115 2.05516 78.8233 1.36423 78.1324C0.673312 77.4415 0.285156 76.5044 0.285156 75.5273V61.8515C0.286201 53.1184 3.75557 44.7431 9.93041 38.5674L12.4136 36.0768C12.7558 35.7337 13.1623 35.4615 13.6099 35.2758C14.0575 35.0901 14.5374 34.9945 15.022 34.9945C15.5066 34.9945 15.9864 35.0901 16.434 35.2758C16.8816 35.4615 17.2882 35.7337 17.6304 36.0768ZM104.519 33.8663C104.176 34.2085 103.903 34.6151 103.718 35.0627C103.532 35.5103 103.436 35.9901 103.436 36.4747C103.436 36.9593 103.532 37.4392 103.718 37.8868C103.903 38.3344 104.176 38.7409 104.519 39.0831L107.009 41.5663C109.383 43.9399 111.266 46.7578 112.55 49.8591C113.835 52.9604 114.496 56.2843 114.496 59.641V75.5273C114.496 76.5044 114.884 77.4415 115.575 78.1324C116.266 78.8233 117.203 79.2115 118.18 79.2115C119.157 79.2115 120.094 78.8233 120.785 78.1324C121.476 77.4415 121.864 76.5044 121.864 75.5273V59.641C121.863 50.9078 118.394 42.5326 112.219 36.3568L109.736 33.8663C109.393 33.5232 108.987 33.251 108.539 33.0653C108.092 32.8795 107.612 32.7839 107.127 32.7839C106.643 32.7839 106.163 32.8795 105.715 33.0653C105.267 33.251 104.861 33.5232 104.519 33.8663Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M92.3926 36.8421C88.4841 36.8421 84.7358 35.2894 81.9721 32.5257C79.2084 29.762 77.6558 26.0137 77.6558 22.1052C77.6558 18.1968 79.2084 14.4484 81.9721 11.6847C84.7358 8.92103 88.4841 7.36841 92.3926 7.36841C96.301 7.36841 100.049 8.92103 102.813 11.6847C105.577 14.4484 107.129 18.1968 107.129 22.1052C107.129 26.0137 105.577 29.762 102.813 32.5257C100.049 35.2894 96.301 36.8421 92.3926 36.8421ZM92.3926 44.2105C89.4897 44.2105 86.6152 43.6387 83.9333 42.5278C81.2514 41.4169 78.8145 39.7887 76.7618 37.736C74.7092 35.6833 73.0809 33.2465 71.97 30.5645C70.8591 27.8826 70.2874 25.0081 70.2874 22.1052C70.2874 19.2023 70.8591 16.3279 71.97 13.6459C73.0809 10.964 74.7092 8.52713 76.7618 6.47447C78.8145 4.42181 81.2514 2.79355 83.9333 1.68266C86.6152 0.57177 89.4897 -4.32566e-08 92.3926 0C98.2553 8.73606e-08 103.878 2.32894 108.023 6.47447C112.169 10.62 114.498 16.2426 114.498 22.1052C114.498 27.9679 112.169 33.5905 108.023 37.736C103.878 41.8815 98.2553 44.2105 92.3926 44.2105ZM59.2348 68.1578C54.3492 68.1578 49.6637 70.0986 46.2091 73.5532C42.7545 77.0078 40.8137 81.6933 40.8137 86.5788V96.1577C40.8137 97.1349 40.4256 98.072 39.7346 98.7629C39.0437 99.4538 38.1066 99.8419 37.1295 99.8419C36.1524 99.8419 35.2153 99.4538 34.5244 98.7629C33.8335 98.072 33.4453 97.1349 33.4453 96.1577V86.5788C33.4453 79.739 36.1624 73.1794 40.9989 68.3429C45.8353 63.5065 52.395 60.7894 59.2348 60.7894C66.0745 60.7894 72.6342 63.5065 77.4706 68.3429C82.3071 73.1794 85.0242 79.739 85.0242 86.5788V96.1577C85.0242 97.1349 84.636 98.072 83.9451 98.7629C83.2542 99.4538 82.3171 99.8419 81.34 99.8419C80.3629 99.8419 79.4258 99.4538 78.7349 98.7629C78.0439 98.072 77.6558 97.1349 77.6558 96.1577V86.5788C77.6558 84.1597 77.1793 81.7643 76.2536 79.5294C75.3278 77.2945 73.9709 75.2637 72.2604 73.5532C70.5498 71.8426 68.5191 70.4858 66.2842 69.56C64.0492 68.6343 61.6538 68.1578 59.2348 68.1578Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.2322 57.1055C63.1406 57.1055 66.889 55.5528 69.6527 52.7892C72.4164 50.0255 73.969 46.2771 73.969 42.3687C73.969 38.4602 72.4164 34.7118 69.6527 31.9482C66.889 29.1845 63.1406 27.6318 59.2322 27.6318C55.3237 27.6318 51.5754 29.1845 48.8117 31.9482C46.048 34.7118 44.4954 38.4602 44.4954 42.3687C44.4954 46.2771 46.048 50.0255 48.8117 52.7892C51.5754 55.5528 55.3237 57.1055 59.2322 57.1055ZM59.2322 64.4739C65.0949 64.4739 70.7174 62.145 74.8629 57.9994C79.0085 53.8539 81.3374 48.2313 81.3374 42.3687C81.3374 36.506 79.0085 30.8834 74.8629 26.7379C70.7174 22.5924 65.0949 20.2634 59.2322 20.2634C53.3695 20.2634 47.747 22.5924 43.6014 26.7379C39.4559 30.8834 37.127 36.506 37.127 42.3687C37.127 48.2313 39.4559 53.8539 43.6014 57.9994C47.747 62.145 53.3695 64.4739 59.2322 64.4739Z"
                  fill="black"
                />
              </svg>
              <p>{t("internships")}</p>
            </div>
            <div className="flip-card-back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="131"
                height="105"
                viewBox="0 0 131 105"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    d="M61.0757 27.6318C61.0757 33.4945 58.7468 39.1171 54.6012 43.2626C50.4557 47.4081 44.8331 49.7371 38.9705 49.7371C33.1078 49.7371 27.4852 47.4081 23.3397 43.2626C19.1942 39.1171 16.8652 33.4945 16.8652 27.6318C16.8652 21.7692 19.1942 16.1466 23.3397 12.0011C27.4852 7.85555 33.1078 5.52661 38.9705 5.52661C44.8331 5.52661 50.4557 7.85555 54.6012 12.0011C58.7468 16.1466 61.0757 21.7692 61.0757 27.6318Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9705 35.0003C40.9247 35.0003 42.7989 34.2239 44.1807 32.8421C45.5626 31.4602 46.3389 29.5861 46.3389 27.6318C46.3389 25.6776 45.5626 23.8034 44.1807 22.4216C42.7989 21.0397 40.9247 20.2634 38.9705 20.2634C37.0162 20.2634 35.1421 21.0397 33.7602 22.4216C32.3784 23.8034 31.6021 25.6776 31.6021 27.6318C31.6021 29.5861 32.3784 31.4602 33.7602 32.8421C35.1421 34.2239 37.0162 35.0003 38.9705 35.0003ZM38.9705 49.7371C41.8734 49.7371 44.7478 49.1653 47.4298 48.0544C50.1117 46.9435 52.5486 45.3153 54.6012 43.2626C56.6539 41.2099 58.2821 38.7731 59.393 36.0911C60.5039 33.4092 61.0757 30.5347 61.0757 27.6318C61.0757 24.7289 60.5039 21.8545 59.393 19.1725C58.2821 16.4906 56.6539 14.0537 54.6012 12.0011C52.5486 9.94842 50.1117 8.32017 47.4298 7.20927C44.7478 6.09838 41.8734 5.52661 38.9705 5.52661C33.1078 5.52661 27.4852 7.85555 23.3397 12.0011C19.1942 16.1466 16.8652 21.7692 16.8652 27.6318C16.8652 33.4945 19.1942 39.1171 23.3397 43.2626C27.4852 47.4081 33.1078 49.7371 38.9705 49.7371Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.3441 55.2632C36.4128 55.2632 33.6015 56.4277 31.5287 58.5004C29.456 60.5732 28.2915 63.3845 28.2915 66.3158V77.3684C28.2915 79.3226 27.5152 81.1968 26.1334 82.5787C24.7515 83.9605 22.8773 84.7368 20.9231 84.7368C18.9689 84.7368 17.0947 83.9605 15.7128 82.5787C14.331 81.1968 13.5547 79.3226 13.5547 77.3684V66.3158C13.5547 59.476 16.2718 52.9164 21.1082 48.0799C25.9447 43.2435 32.5043 40.5264 39.3441 40.5264C46.1839 40.5264 52.7436 43.2435 57.58 48.0799C62.4165 52.9164 65.1336 59.476 65.1336 66.3158V70C65.1336 71.9542 64.3572 73.8284 62.9754 75.2103C61.5936 76.5921 59.7194 77.3684 57.7652 77.3684C55.8109 77.3684 53.9367 76.5921 52.5549 75.2103C51.1731 73.8284 50.3967 71.9542 50.3967 70V66.3158C50.3967 63.3845 49.2323 60.5732 47.1595 58.5004C45.0867 56.4277 42.2755 55.2632 39.3441 55.2632Z"
                    fill="white"
                  />
                  <path
                    d="M83.1816 27.6318C83.1816 33.4945 85.5106 39.1171 89.6561 43.2626C93.8016 47.4081 99.4242 49.7371 105.287 49.7371C111.15 49.7371 116.772 47.4081 120.918 43.2626C125.063 39.1171 127.392 33.4945 127.392 27.6318C127.392 21.7692 125.063 16.1466 120.918 12.0011C116.772 7.85555 111.15 5.52661 105.287 5.52661C99.4242 5.52661 93.8016 7.85555 89.6561 12.0011C85.5106 16.1466 83.1816 21.7692 83.1816 27.6318Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M105.287 35.0003C103.333 35.0003 101.458 34.2239 100.077 32.8421C98.6948 31.4602 97.9185 29.5861 97.9185 27.6318C97.9185 25.6776 98.6948 23.8034 100.077 22.4216C101.458 21.0397 103.333 20.2634 105.287 20.2634C107.241 20.2634 109.115 21.0397 110.497 22.4216C111.879 23.8034 112.655 25.6776 112.655 27.6318C112.655 29.5861 111.879 31.4602 110.497 32.8421C109.115 34.2239 107.241 35.0003 105.287 35.0003ZM105.287 49.7371C102.384 49.7371 99.5095 49.1653 96.8276 48.0544C94.1456 46.9435 91.7088 45.3153 89.6561 43.2626C87.6034 41.2099 85.9752 38.7731 84.8643 36.0911C83.7534 33.4092 83.1816 30.5347 83.1816 27.6318C83.1816 24.7289 83.7534 21.8545 84.8643 19.1725C85.9752 16.4906 87.6034 14.0537 89.6561 12.0011C91.7088 9.94842 94.1456 8.32017 96.8276 7.20927C99.5095 6.09838 102.384 5.52661 105.287 5.52661C111.15 5.52661 116.772 7.85555 120.918 12.0011C125.063 16.1466 127.392 21.7692 127.392 27.6318C127.392 33.4945 125.063 39.1171 120.918 43.2626C116.772 47.4081 111.15 49.7371 105.287 49.7371Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M104.926 55.2632C107.857 55.2632 110.669 56.4277 112.742 58.5004C114.814 60.5732 115.979 63.3845 115.979 66.3158V77.3684C115.979 79.3226 116.755 81.1968 118.137 82.5787C119.519 83.9605 121.393 84.7368 123.347 84.7368C125.301 84.7368 127.176 83.9605 128.557 82.5787C129.939 81.1968 130.716 79.3226 130.716 77.3684V66.3158C130.716 59.476 127.999 52.9164 123.162 48.0799C118.326 43.2435 111.766 40.5264 104.926 40.5264C98.0864 40.5264 91.5267 43.2435 86.6903 48.0799C81.8538 52.9164 79.1367 59.476 79.1367 66.3158V70C79.1367 71.9542 79.913 73.8284 81.2949 75.2103C82.6767 76.5921 84.5509 77.3684 86.5051 77.3684C88.4594 77.3684 90.3335 76.5921 91.7154 75.2103C93.0972 73.8284 93.8735 71.9542 93.8735 70V66.3158C93.8735 63.3845 95.038 60.5732 97.1108 58.5004C99.1835 56.4277 101.995 55.2632 104.926 55.2632Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.5043 75.5264C69.5729 75.5264 66.7617 76.6908 64.6889 78.7636C62.6161 80.8364 61.4517 83.6476 61.4517 86.579V97.6316C61.4517 99.5858 60.6754 101.46 59.2935 102.842C57.9117 104.224 56.0375 105 54.0833 105C52.129 105 50.2548 104.224 48.873 102.842C47.4912 101.46 46.7148 99.5858 46.7148 97.6316V86.579C46.7148 79.7392 49.4319 73.1796 54.2684 68.3431C59.1049 63.5066 65.6645 60.7896 72.5043 60.7896C79.3441 60.7896 85.9037 63.5066 90.7402 68.3431C95.5766 73.1796 98.2937 79.7392 98.2937 86.579V97.6316C98.2937 99.5858 97.5174 101.46 96.1356 102.842C94.7537 104.224 92.8795 105 90.9253 105C88.9711 105 87.0969 104.224 85.7151 102.842C84.3332 101.46 83.5569 99.5858 83.5569 97.6316V86.579C83.5569 83.6476 82.3924 80.8364 80.3197 78.7636C78.2469 76.6908 75.4356 75.5264 72.5043 75.5264Z"
                    fill="white"
                  />
                  <path
                    d="M94.2339 47.8953C94.2339 53.7579 91.905 59.3805 87.7594 63.526C83.6139 67.6716 77.9913 70.0005 72.1287 70.0005C66.266 70.0005 60.6434 67.6716 56.4979 63.526C52.3524 59.3805 50.0234 53.7579 50.0234 47.8953C50.0234 42.0326 52.3524 36.41 56.4979 32.2645C60.6434 28.119 66.266 25.79 72.1287 25.79C77.9913 25.79 83.6139 28.119 87.7594 32.2645C91.905 36.41 94.2339 42.0326 94.2339 47.8953Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.1287 55.2637C74.0829 55.2637 75.9571 54.4874 77.3389 53.1055C78.7208 51.7237 79.4971 49.8495 79.4971 47.8953C79.4971 45.941 78.7208 44.0669 77.3389 42.685C75.9571 41.3032 74.0829 40.5269 72.1287 40.5269C70.1744 40.5269 68.3003 41.3032 66.9184 42.685C65.5366 44.0669 64.7603 45.941 64.7603 47.8953C64.7603 49.8495 65.5366 51.7237 66.9184 53.1055C68.3003 54.4874 70.1744 55.2637 72.1287 55.2637ZM72.1287 70.0005C77.9913 70.0005 83.6139 67.6716 87.7594 63.526C91.905 59.3805 94.2339 53.7579 94.2339 47.8953C94.2339 42.0326 91.905 36.41 87.7594 32.2645C83.6139 28.119 77.9913 25.79 72.1287 25.79C66.266 25.79 60.6434 28.119 56.4979 32.2645C52.3524 36.41 50.0234 42.0326 50.0234 47.8953C50.0234 53.7579 52.3524 59.3805 56.4979 63.526C60.6434 67.6716 66.266 70.0005 72.1287 70.0005Z"
                    fill="white"
                  />
                  <path
                    d="M20.5488 55.2632H57.3909V84.7368H20.5488V55.2632ZM86.8645 55.2632H123.707V84.7368H86.8645V55.2632Z"
                    fill="white"
                  />
                  <path
                    d="M57.3912 70.0002H86.8649L90.5491 105H53.707L57.3912 70.0002Z"
                    fill="white"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.074 36.842C29.9824 36.842 33.7308 35.2894 36.4945 32.5257C39.2582 29.762 40.8108 26.0137 40.8108 22.1052C40.8108 18.1968 39.2582 14.4484 36.4945 11.6847C33.7308 8.92103 29.9824 7.36841 26.074 7.36841C22.1655 7.36841 18.4172 8.92103 15.6535 11.6847C12.8898 14.4484 11.3372 18.1968 11.3372 22.1052C11.3372 26.0137 12.8898 29.762 15.6535 32.5257C18.4172 35.2894 22.1655 36.842 26.074 36.842ZM26.074 44.2105C28.9769 44.2105 31.8514 43.6387 34.5333 42.5278C37.2152 41.4169 39.6521 39.7887 41.7047 37.736C43.7574 35.6833 45.3857 33.2465 46.4966 30.5645C47.6074 27.8826 48.1792 25.0081 48.1792 22.1052C48.1792 19.2023 47.6074 16.3279 46.4966 13.6459C45.3857 10.964 43.7574 8.52713 41.7047 6.47447C39.6521 4.42181 37.2152 2.79355 34.5333 1.68266C31.8514 0.57177 28.9769 -4.32566e-08 26.074 0C20.2113 8.73606e-08 14.5888 2.32894 10.4432 6.47447C6.29769 10.62 3.96875 16.2426 3.96875 22.1052C3.96875 27.9679 6.29769 33.5905 10.4432 37.736C14.5888 41.8815 20.2113 44.2105 26.074 44.2105Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6304 36.0768C17.9735 36.4191 18.2457 36.8256 18.4314 37.2732C18.6172 37.7208 18.7128 38.2006 18.7128 38.6852C18.7128 39.1698 18.6172 39.6497 18.4314 40.0973C18.2457 40.5449 17.9735 40.9514 17.6304 41.2937L15.1399 43.7768C10.347 48.571 7.65419 55.0724 7.65357 61.8515V75.5273C7.65357 76.5044 7.26541 77.4415 6.57449 78.1324C5.88356 78.8233 4.94647 79.2115 3.96936 79.2115C2.99225 79.2115 2.05516 78.8233 1.36423 78.1324C0.673312 77.4415 0.285156 76.5044 0.285156 75.5273V61.8515C0.286201 53.1184 3.75557 44.7431 9.93041 38.5674L12.4136 36.0768C12.7558 35.7337 13.1623 35.4615 13.6099 35.2758C14.0575 35.0901 14.5374 34.9945 15.022 34.9945C15.5066 34.9945 15.9864 35.0901 16.434 35.2758C16.8816 35.4615 17.2882 35.7337 17.6304 36.0768ZM104.519 33.8663C104.176 34.2085 103.903 34.6151 103.718 35.0627C103.532 35.5103 103.436 35.9901 103.436 36.4747C103.436 36.9593 103.532 37.4392 103.718 37.8868C103.903 38.3344 104.176 38.7409 104.519 39.0831L107.009 41.5663C109.383 43.9399 111.266 46.7578 112.55 49.8591C113.835 52.9604 114.496 56.2843 114.496 59.641V75.5273C114.496 76.5044 114.884 77.4415 115.575 78.1324C116.266 78.8233 117.203 79.2115 118.18 79.2115C119.157 79.2115 120.094 78.8233 120.785 78.1324C121.476 77.4415 121.864 76.5044 121.864 75.5273V59.641C121.863 50.9078 118.394 42.5326 112.219 36.3568L109.736 33.8663C109.393 33.5232 108.987 33.251 108.539 33.0653C108.092 32.8795 107.612 32.7839 107.127 32.7839C106.643 32.7839 106.163 32.8795 105.715 33.0653C105.267 33.251 104.861 33.5232 104.519 33.8663Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M92.3926 36.8421C88.4841 36.8421 84.7358 35.2894 81.9721 32.5257C79.2084 29.762 77.6558 26.0137 77.6558 22.1052C77.6558 18.1968 79.2084 14.4484 81.9721 11.6847C84.7358 8.92103 88.4841 7.36841 92.3926 7.36841C96.301 7.36841 100.049 8.92103 102.813 11.6847C105.577 14.4484 107.129 18.1968 107.129 22.1052C107.129 26.0137 105.577 29.762 102.813 32.5257C100.049 35.2894 96.301 36.8421 92.3926 36.8421ZM92.3926 44.2105C89.4897 44.2105 86.6152 43.6387 83.9333 42.5278C81.2514 41.4169 78.8145 39.7887 76.7618 37.736C74.7092 35.6833 73.0809 33.2465 71.97 30.5645C70.8591 27.8826 70.2874 25.0081 70.2874 22.1052C70.2874 19.2023 70.8591 16.3279 71.97 13.6459C73.0809 10.964 74.7092 8.52713 76.7618 6.47447C78.8145 4.42181 81.2514 2.79355 83.9333 1.68266C86.6152 0.57177 89.4897 -4.32566e-08 92.3926 0C98.2553 8.73606e-08 103.878 2.32894 108.023 6.47447C112.169 10.62 114.498 16.2426 114.498 22.1052C114.498 27.9679 112.169 33.5905 108.023 37.736C103.878 41.8815 98.2553 44.2105 92.3926 44.2105ZM59.2348 68.1578C54.3492 68.1578 49.6637 70.0986 46.2091 73.5532C42.7545 77.0078 40.8137 81.6933 40.8137 86.5788V96.1577C40.8137 97.1349 40.4256 98.072 39.7346 98.7629C39.0437 99.4538 38.1066 99.8419 37.1295 99.8419C36.1524 99.8419 35.2153 99.4538 34.5244 98.7629C33.8335 98.072 33.4453 97.1349 33.4453 96.1577V86.5788C33.4453 79.739 36.1624 73.1794 40.9989 68.3429C45.8353 63.5065 52.395 60.7894 59.2348 60.7894C66.0745 60.7894 72.6342 63.5065 77.4706 68.3429C82.3071 73.1794 85.0242 79.739 85.0242 86.5788V96.1577C85.0242 97.1349 84.636 98.072 83.9451 98.7629C83.2542 99.4538 82.3171 99.8419 81.34 99.8419C80.3629 99.8419 79.4258 99.4538 78.7349 98.7629C78.0439 98.072 77.6558 97.1349 77.6558 96.1577V86.5788C77.6558 84.1597 77.1793 81.7643 76.2536 79.5294C75.3278 77.2945 73.9709 75.2637 72.2604 73.5532C70.5498 71.8426 68.5191 70.4858 66.2842 69.56C64.0492 68.6343 61.6538 68.1578 59.2348 68.1578Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.2322 57.1055C63.1406 57.1055 66.889 55.5528 69.6527 52.7892C72.4164 50.0255 73.969 46.2771 73.969 42.3687C73.969 38.4602 72.4164 34.7118 69.6527 31.9482C66.889 29.1845 63.1406 27.6318 59.2322 27.6318C55.3237 27.6318 51.5754 29.1845 48.8117 31.9482C46.048 34.7118 44.4954 38.4602 44.4954 42.3687C44.4954 46.2771 46.048 50.0255 48.8117 52.7892C51.5754 55.5528 55.3237 57.1055 59.2322 57.1055ZM59.2322 64.4739C65.0949 64.4739 70.7174 62.145 74.8629 57.9994C79.0085 53.8539 81.3374 48.2313 81.3374 42.3687C81.3374 36.506 79.0085 30.8834 74.8629 26.7379C70.7174 22.5924 65.0949 20.2634 59.2322 20.2634C53.3695 20.2634 47.747 22.5924 43.6014 26.7379C39.4559 30.8834 37.127 36.506 37.127 42.3687C37.127 48.2313 39.4559 53.8539 43.6014 57.9994C47.747 62.145 53.3695 64.4739 59.2322 64.4739Z"
                  fill="white"
                />
              </svg>
              <p style={{ color: "white" }}>{t("internships")}</p>
            </div>
          </div>
        </a>
        {/* href="https://docs.google.com/forms/d/e/1FAIpQLSd5FgrM2Z72F0blVXNgx0Q1zNlR24_b0C7G4J5qAiOy7n_XUA/viewform" */}
        <a href="/volunteering" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={kyyb} alt="" />
              <p>{t("volunteering")}</p>
            </div>
            <div className="flip-card-back">
              <img src={kyyy} alt="" />
              <p style={{ color: "white" }}>{t("volunteering")}</p>
            </div>
          </div>
        </a>
        <a href="/uas" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="121"
                viewBox="0 0 125 121"
                fill="none"
              >
                <path
                  d="M60.7963 32.9661L53.4128 50.5729L33.5342 52.2767L48.8691 65.3399L44.3254 84.6505L60.7963 74.4272L77.8352 84.6505L73.2915 65.3399L88.0584 52.2767L68.1798 50.5729L60.7963 32.9661Z"
                  fill="black"
                />
                <path
                  opacity="0.2"
                  d="M50.0047 25.0146H26.7183V48.8689L10.8154 64.7719L26.7183 81.8107V104.529H50.0047L67.6115 121L84.0824 104.529H107.369V81.8107L124.408 64.7719L107.369 47.1651V25.0146H84.0824L67.6115 8.5437L50.0047 25.0146Z"
                  fill="black"
                />
                <path
                  d="M43.1893 20.4709H19.9029V44.3252L4 60.2282L19.9029 77.267V99.9854H43.1893L60.7961 116.456L77.267 99.9854H100.553V77.267L117.592 60.2282L100.553 42.6214V20.4709H77.267L60.7961 4L43.1893 20.4709Z"
                  stroke="black"
                  strokeWidth="5"
                />
              </svg>
              <p>{t("uas")}</p>
            </div>
            <div className="flip-card-back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="121"
                viewBox="0 0 125 121"
                fill="none"
              >
                <path
                  d="M60.7963 32.9661L53.4128 50.5729L33.5342 52.2767L48.8691 65.3399L44.3254 84.6505L60.7963 74.4272L77.8352 84.6505L73.2915 65.3399L88.0584 52.2767L68.1798 50.5729L60.7963 32.9661Z"
                  fill="white"
                />
                <path
                  opacity="0.2"
                  d="M50.0047 25.0146H26.7183V48.8689L10.8154 64.7719L26.7183 81.8107V104.529H50.0047L67.6115 121L84.0824 104.529H107.369V81.8107L124.408 64.7719L107.369 47.1651V25.0146H84.0824L67.6115 8.5437L50.0047 25.0146Z"
                  fill="white"
                />
                <path
                  d="M43.1893 20.4709H19.9029V44.3252L4 60.2282L19.9029 77.267V99.9854H43.1893L60.7961 116.456L77.267 99.9854H100.553V77.267L117.592 60.2282L100.553 42.6214V20.4709H77.267L60.7961 4L43.1893 20.4709Z"
                  stroke="white"
                  strokeWidth="5"
                />
              </svg>
              <p style={{ color: "white" }}>{t("uas")}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Curious;

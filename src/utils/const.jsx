import store from "../store";

const states = store.getState();

export const footer = [
  "Hakkımızda",
  "Yardım Merkezi",
  "Hizmet Şartları",
  "Gizlilik Politikası",
  "Çerez Politikası",
  "Imprint",
  "Erişilebilirlik",
  "Reklam bilgisi",
  "Blog",
  "Durum",
  "Kariyer",
  "Marka Kaynakları",
  "Reklam",
  "Pazarlama",
  "İşletmeler İçin X",
  "Geliştiriciler",
  "Dizin",
  "Ayarlar",
];

export const mainMenu = [
  {
    path: "/",
    title: "Anasayfa",
    newPost: 0,
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <g>
            <path
              fill="currentColor"
              d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
            ></path>
          </g>
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <g>
            <path
              fill="currentColor"
              d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"
            ></path>
          </g>
        </svg>
      ),
    },
  },

  {
    path: "/notifications",
    title: "Bildirimler",
    notification: 4,
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
          />
        </svg>
      ),
    },
  },
  {
    path: "/marks",
    title: "Yer İşaretleri",
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
          />
        </svg>
      ),
    },
  },

  {
    path: `/profile/${states?.auth?.currentAccount?.authorizedAccount?.username
      .toLocaleLowerCase("TR-tr")
      .replace(/\s/g, "-")}`,
    title: "Profil",
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
          />
        </svg>
      ),
    },
  },
];

export const topics = [
  {
    topic: {
      type: "tag",
      value: "bim-101",
    },
    postCount: 8624,
  },
  {
    topic: {
      type: "query",
      value: "YM-403",
    },
    postCount: 16000,
  },
  {
    topic: {
      type: "query",
      value: "Yazılım Kulübü",
    },
    postCount: 57000,
  },
  {
    topic: {
      type: "tag",
      value: "LAB-303",
    },
    postCount: 13000,
  },
];

export const bookmark = [];

export const tags = ["HTML", "CSS", "JS", "Python", "R"];

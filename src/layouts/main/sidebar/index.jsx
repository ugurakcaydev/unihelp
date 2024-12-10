import Logo from "./logo";


function Sidebar() {
  return (
  <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col items-start  sticky top-0  z-20">
      <Logo />
      {/* <Menu />
      <Account /> */}
      
    <div className=" h-[35vh]  flex flex-col  space-y-3 mt-5 ">
      <a href="#" className="relative inline-flex items-center h-[50px] p-2 rounded hover:bg-black hover:text-white hover:rounded-full ">
        <span className="text-lg pl-1 ">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-10 fill-current  duration-1000">
            <g>
              <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
            </g>
          </svg>
        </span>
        <span className="absolute top-1 left-7 block w-2.5 h-2.5 bg-[#1D9BF0] rounded-full border-2 border-white transition duration-500"></span>
        <span className="ml-4 text-lg font-bold  duration-500">Anasayfa</span>
      </a>
      <a href="#"className="inline-flex items-center p-2 h-[50px]  rounded hover:bg-black hover:text-white hover:rounded-full ">
        <span className="text-lg pl-1">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current transition duration-1000">
            <g>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </g>
          </svg>
        </span>
        <span className="ml-4 text-xl font-bold transition duration-500">Keşfet</span>
      </a>

      <a href="#"className="inline-flex  items-center p-2 h-[50px]  hover:bg-black hover:text-white hover:rounded-full	">
        <span className="text-lg pl-1">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current transition duration-1000">
            <g>
              <path d="M7 7.2C7 6.07989 7 5.51984 7.21799 5.09202C7.40973 4.71569 7.71569 4.40973 8.09202 4.21799C8.51984 4 9.07989 4 10.2 4H13.8C14.9201 4 15.4802 4 15.908 4.21799C16.2843 4.40973 16.5903 4.71569 16.782 5.09202C17 5.51984 17 6.07989 17 7.2V20L14.126 17.4453C13.3737 16.7766 12.9976 16.4423 12.5732 16.3154C12.1992 16.2035 11.8008 16.2035 11.4268 16.3154C11.0024 16.4423 10.6263 16.7766 9.87404 17.4453L7 20V7.2Z"></path>
            </g>
          </svg>
        </span>
        <span className="ml-4 text-xl font-bold pr-3 transition duration-500">Bildirimler</span>
      </a>
      <a href="#"className="inline-flex  items-center p-2 h-[50px] rounded hover:bg-black hover:text-white hover:rounded-full	">
        <span className="text-lg pl-1">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current transition duration-1000">
            <g>
              <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
            </g>
          </svg>
        </span>
        <span className="ml-4 text-xl font-bold transition duration-500">Profil</span>
      </a>
      <a href="#"className="inline-flex items-center p-2 h-[50px]  rounded hover:bg-black hover:text-white hover:rounded-full ">
        <span className="text-lg pl-1">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current transition duration-1000">
            <g>
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
            </g>
          </svg>
        </span>
        <span className="ml-4 text-xl font-bold transition duration-500">Daha</span>
      </a>
      
    </div>
    <button className="bg-black text-white rounded-full hover:h-[55px] hover:w-[210px] duration-500 font-bold text-md h-[50px] w-[200px] ">Gönderi Paylaş</button>
    
    <div className="flex items-center justify-between w-full px-4 py-2 hover:bg-[#1D9BF0] hover:text-white cursor-pointer rounded-full mt-auto mb-3 duration-300">
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.672 0-8 1.337-8 4v1h16v-1c0-2.663-5.328-4-8-4z"
        />
      </svg>
    </div>
    <div className="ml-3">
      <p className="font-bold text-md">Can</p>
      <p className="text-sm">@can</p>
    </div>
  </div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12h.01M12 12h.01M18 12h.01"
      />
    </svg>
  </div>
</div>



    
      
</aside>
    
  );
}

export default Sidebar;

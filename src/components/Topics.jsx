function Topics() {
    return (
        <div className="bg-white text-black rounded-2xl border border-black p-4 w-[350px] mt-4 h-auto">
            <h2 className="text-xl font-bold mb-4">GÜNDEMLER</h2>

            <div className="hover:bg-black hover:text-white p-4 rounded-2xl transition duration-500 relative cursor-pointer">
                <div className="text-xs text-gray-500">Trendlerde</div>
                <a className="text-md font-bold cursor-pointer">sırtınızı dönemezsiniz</a>
                <div className="text-xs text-gray-500 mb-4">33.4K gönderi</div>

                <button className="absolute top-1/2 right-4 transform -translate-y-1/2  hover:bg-blue-100 hover:text-[#1D9BF0] p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="cursor-pointer">
                        <circle cx="4" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="20" cy="12" r="2" />
                    </svg>
                </button>
            </div>

            <div className="hover:bg-black hover:text-white p-4 rounded-2xl transition duration-500 relative cursor-pointer">
                <div className="text-xs text-gray-500">Trendlerde</div>
                <a className="text-md font-bold ">Vereceksin</a>
                <div className="text-xs text-gray-500 mb-4">2,640 gönderi</div>

                <button className="absolute top-1/2 right-4 transform -translate-y-1/2  hover:bg-blue-100 hover:text-[#1D9BF0] p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="cursor-pointer">
                        <circle cx="4" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="20" cy="12" r="2" />
                    </svg>
                </button>
            </div>

            <div className="hover:bg-black hover:text-white p-4 rounded-2xl transition duration-500  relative cursor-pointer">
                <div className="text-xs text-gray-500">Trendlerde</div>
                <a className="text-md font-bold ">#SVSvGS</a>
                <div className="text-xs text-gray-500 mb-4">2,989 gönderi</div>

                <button className="absolute top-1/2 right-4 transform -translate-y-1/2  hover:bg-blue-100 hover:text-[#1D9BF0] p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="cursor-pointer">
                        <circle cx="4" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="20" cy="12" r="2" />
                    </svg>
                </button>
            </div>

            <button className="mt-4  text-[#1D9BF0] no-underline hover:bg-black w-full  h-[30px] rounded-full hover:font-extrabold hover:text-base transation ">Daha ...</button>
        </div>
    );
}

export default Topics;

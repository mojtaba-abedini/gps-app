"use client"
const BottomPlayer = ({ speed = 0, progress = 0, clickPlay = false, onClickRefresh = () => null, onClickPlay = () => null, onClickPause = () => null, onClickBackward = () => null(), onClickForward = () => null, onClickChangeSpeed = () => null }) => {





    return (
        <div className="fixed bottom-16 left-0 z-50 grid w-full h-20 grid-cols-1 px-8 bg-white border-t border-gray-200 md:grid-cols-3 dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-center hidden me-auto md:flex">

                <span className="text-sm text-gray-500 dark:text-gray-400"></span>
            </div>
            <div className="flex items-center w-full">
                <div className="w-full">
                    <div className="flex items-center justify-center mx-auto mb-1">
                        <button onClick={() => onClickChangeSpeed()} data-tooltip-target="tooltip-shuffle" type="button" className="p-2.5 group rounded-full hover:bg-gray-100 me-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600">
                            <div className="text-md text-gray-500"> {`${speed}x`}
                            </div>
                            <span className="sr-only"></span>
                        </button>
                        {/* <button data-tooltip-target="tooltip-shuffle" type="button" className="p-2.5 group rounded-full hover:bg-gray-100 me-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600">
                       <div className="text-gray-500">{speed}</div>



                            <span className="sr-only"></span>
                        </button> */}
                        <div id="tooltip-shuffle" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">

                            <div className="tooltip-arrow" data-popper-arrow>jgkjhkj</div>
                        </div>
                        <button onClick={() => onClickForward()} data-tooltip-target="tooltip-previous" type="button" className="p-2.5 group rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600">
                            <svg className="rtl:rotate-180 w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                                <path d="M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z" />
                            </svg>
                            <span className="sr-only"></span>
                        </button>
                        <div id="tooltip-previous" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">

                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>

                        {clickPlay ?


                            <button onClick={() => onClickPause()} data-tooltip-target="tooltip-pause" type="button" className="inline-flex items-center justify-center p-2.5 mx-2 font-medium  bg-[#14b8a6] dark:bg-[#1e293b] text-white rounded-full  group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                                    <path fill-rule="evenodd" d="M0 .8C0 .358.32 0 .714 0h1.429c.394 0 .714.358.714.8v14.4c0 .442-.32.8-.714.8H.714a.678.678 0 0 1-.505-.234A.851.851 0 0 1 0 15.2V.8Zm7.143 0c0-.442.32-.8.714-.8h1.429c.19 0 .37.084.505.234.134.15.209.354.209.566v14.4c0 .442-.32.8-.714.8H7.857c-.394 0-.714-.358-.714-.8V.8Z" clip-rule="evenodd" />
                                </svg>

                                <span className="sr-only">Pause video</span>
                            </button>
                            :
                            <button onClick={() => onClickPlay()} data-tooltip-target="tooltip-pause" type="button" className="inline-flex items-center justify-center p-2.5 mx-2 font-medium  bg-[#14b8a6] dark:bg-[#1e293b] text-white rounded-full  group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">

                                <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                                    <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                                </svg>
                                <span className="sr-only">Play video</span>
                            </button>}







                        <div id="tooltip-pause" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Pause video
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button onClick={() => onClickBackward()} data-tooltip-target="tooltip-next" type="button" className="p-2.5 group rounded-full hover:bg-gray-100 me-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600">
                            <svg className="rtl:rotate-180 w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                                <path d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z" />
                            </svg>
                            <span className="sr-only">Next video</span>
                        </button>
                        <div id="tooltip-next" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Next video
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button onClick={() => onClickRefresh()} data-tooltip-target="tooltip-restart" type="button" className="p-2.5 group rounded-full hover:bg-gray-100 me-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97" />
                            </svg>
                            <span className="sr-only">Restart video</span>
                        </button>
                        {/* <button onClick={() => onClickSpeedDown()} data-tooltip-target="tooltip-restart" type="button" className="p-2.5 group rounded-full hover:bg-gray-100 me-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600">
                        <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/>
                        </svg>

                            <span className="sr-only">Restart video</span>
                        </button>
                        <div id="tooltip-restart" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Restart video
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div> */}
                    </div>
                    <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                        {/* <span className="text-sm font-medium text-gray-500 dark:text-gray-400">3:45</span> */}
                        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-800" style={{ direction: 'ltr' }}>
                            <div className="bg-[#14b8a6] dark:bg-[#1e293b] h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                        {/* <span className="text-sm font-medium text-gray-500 dark:text-gray-400">5:00</span> */}
                    </div>
                </div>
            </div>

        </div>
    )
}


export default BottomPlayer;
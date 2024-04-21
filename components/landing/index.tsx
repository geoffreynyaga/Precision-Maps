import React from "react";
import Image from "next/image";

function LandingPageComponent() {
    return (
        <div className="flex flex-col w-full min-h-screen font-sans ">
            <div className="bg-gray-200 md:overflow-hidden">
                <div className="px-4 py-16 ">
                    <div className="relative w-full text-center md:max-w-3xl md:mx-auto">
                        <h1 className="mb-6 text-xl font-bold leading-relaxed text-gray-700 sm:text-2xl md:text-5xl">
                            Enterprise-Grade Drone Data at your Fingertips
                        </h1>
                        <p className="text-gray-600 md:text-xl md:px-18">
                            Access your data on any device, on any network.
                        </p>
                        <div className="absolute bottom-0 right-0 hidden w-40 h-40 -mb-64 -mr-48 bg-blue-800 rounded-full md:block"></div>
                        <div className="absolute top-0 right-0 hidden w-5 h-5 mt-32 -mr-40 bg-yellow-500 rounded-full md:block"></div>
                        <div className="relative flex flex-row justify-center w-full mt-12">
                            <div className="absolute flex flex-row justify-center -inset-5">
                                <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                            </div>

                            <a
                                href="/dashboard/"
                                title=""
                                className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Access Your Data
                            </a>
                        </div>
                    </div>
                </div>
                <svg
                    className="hidden text-white bg-gray-200 fill-current md:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fillOpacity="1"
                        d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                    ></path>
                </svg>
            </div>
            <div
                className="z-20  flex-row justify-center hidden w-full mx-auto   shadow-lg md:block  mt-[-250px]"
                // style="margin-top: -250px;
                // border-radius: 20px"
                // mt-[-250px]
            >
                {/* <img
                    className="w-full h-auto rounded-xl"
                    src="{% static 'images/landing.webp' %}"
                /> */}

                <div className="flex flex-row justify-center w-full rounded-xl">
                    <Image
                        src={`/images/landing.webp`}
                        alt={"alt"}
                        // sizes="60vw"

                        width={600}
                        height={600}
                        className="rounded-xl"
                        // height="64"
                        // width="100"
                        // fill
                    />
                </div>

                <div
                    className="absolute top-0 left-0 w-20 h-20 -mt-10 -ml-10 bg-yellow-500 rounded-full"
                    // style="z-LandingPageComponent: -1"
                ></div>
                <div
                    className="absolute top-0 left-0 w-5 h-5 mt-12 -ml-32 bg-blue-500 rounded-full"
                    // style="z-LandingPageComponent: -1"
                ></div>
            </div>
            <div className="px-4 md:hidden">
                <div
                    className="relative z-20 max-w-4xl mx-auto -mt-10 bg-white shadow-lg"
                    // style="border-radius: 20px"
                >
                    <img
                        className="w-full h-32"
                        src="{% static 'images/landing.webp' %}"
                    />
                    <div className="h-10 bg-white border-b border-gray-100 rounded-t-lg"></div>
                    <div
                        className="flex"
                        //  style="height: 340px;"
                    >
                        <div className="w-16 px-2 py-6 overflow-hidden bg-gray-200 rounded-bl-lg">
                            <div className="mb-6 text-center">
                                <div className="w-4 h-4 mx-auto mb-2 bg-blue-800 rounded-full"></div>
                                <div className="w-8 h-2 mx-auto bg-blue-800 rounded-full"></div>
                            </div>
                            <div className="mb-6 text-center">
                                <div className="w-4 h-4 mx-auto mb-2 bg-gray-300 rounded-full"></div>
                                <div className="w-8 h-2 mx-auto bg-gray-300 rounded-full"></div>
                            </div>
                            <div className="mb-6 text-center">
                                <div className="w-4 h-4 mx-auto mb-2 bg-gray-300 rounded-full"></div>
                                <div className="w-8 h-2 mx-auto bg-gray-300 rounded-full"></div>
                            </div>
                            <div className="text-center">
                                <div className="w-4 h-4 mx-auto mb-2 bg-gray-300 rounded-full"></div>
                                <div className="w-8 h-2 mx-auto bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex-1 px-4 py-6">
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-1/3 px-2">
                                    <div className="px-2 py-3 mb-6 text-center bg-white rounded-lg shadow">
                                        <div className="w-4 h-4 mx-auto mb-2 bg-green-600 rounded-full"></div>
                                        <div className="w-8 h-2 mx-auto bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2">
                                    <div className="px-2 py-3 mb-6 text-center bg-white rounded-lg shadow">
                                        <div className="w-4 h-4 mx-auto mb-2 bg-blue-600 rounded-full"></div>
                                        <div className="w-8 h-2 mx-auto bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2">
                                    <div className="px-2 py-3 mb-6 text-center bg-white rounded-lg shadow">
                                        <div className="w-4 h-4 mx-auto mb-2 bg-orange-600 rounded-full"></div>
                                        <div className="w-8 h-2 mx-auto bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-6 -mx-2">
                                <div className="w-1/2 px-2">
                                    <div className="h-24 p-2 rounded-lg shadow">
                                        <div className="h-20 pt-2 percentage">
                                            <div className="block w-24 h-2 mb-2 bg-gray-200"></div>
                                            <div className="block w-12 h-2 mb-2 bg-gray-200"></div>
                                            <div className="block w-20 h-2 mb-2 bg-gray-200"></div>
                                            <div className="block w-8 h-2 mb-2 bg-gray-200"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 px-2">
                                    <div className="px-2 py-2 rounded-lg shadow">
                                        <div className="block w-8 h-2 mb-2 bg-gray-200 rounded-full"></div>
                                        <div className="mb-2">
                                            <svg
                                                height="50"
                                                width="50"
                                                viewBox="0 0 20 20"
                                                className="mx-auto"
                                            >
                                                <circle
                                                    r="10"
                                                    cx="10"
                                                    cy="10"
                                                    fill="#ddd"
                                                />
                                                <circle
                                                    r="5"
                                                    cx="10"
                                                    cy="10"
                                                    fill="transparent"
                                                    stroke="#eee"
                                                    strokeWidth="10"
                                                    strokeDasharray="11 31.4"
                                                    transform="rotate(-90) translate(-20)"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex flex-wrap -mx-2">
                                            <div className="w-1/3 px-2">
                                                <div className="block h-2 bg-gray-200 rounded-full"></div>
                                            </div>
                                            <div className="w-1/3 px-2">
                                                <div className="block h-2 bg-gray-200 rounded-full"></div>
                                            </div>
                                            <div className="w-1/3 px-2">
                                                <div className="block h-2 bg-gray-200 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full mb-2">
                                <div className="w-1/2">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                                            <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                                            <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full mb-6">
                                <div className="w-1/2">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                                            <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                                            <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end text-right">
                                <div className="w-16 h-6 px-4 mr-2 bg-gray-200 rounded-lg"></div>
                                <div className="w-16 h-6 px-4 bg-green-400 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageComponent;

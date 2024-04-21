"use client";

import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("./map"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function DashBoard() {
    return (
        <div className="flex flex-col items-center w-full ">
            <LazyMap />
        </div>
    );
}

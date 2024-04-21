"use client";

import "./styles.css"; // Import your CSS file here

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import {GeoJSON, MapContainer, TileLayer, useMap} from "react-leaflet";
import React, {useEffect, useRef, useState} from "react";

import L from "leaflet";
import {Popup} from "react-leaflet";
import Link from "next/link";

export const geojsonData: any = {
    type: "FeatureCollection",
    name: "test",
    crs: {type: "name", properties: {name: "urn:ogc:def:crs:OGC:1.3:CRS84"}},
    features: [
        {
            type: "Feature",
            properties: {
                id: 1,
                name: "Field 45",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-45%2F2023-09-05%2Ffield-45-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-45%2F2023-09-05%2Ffield45-ndvi-cog.tif",
                application: {
                    bags: 80,
                    is_spread: false,
                    date: "21th Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-45%2F2023-09-05%2Ffield-45-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.218992859081112, -0.502793959199298],
                        [35.219006344538691, -0.503225493841903],
                        [35.218911946335623, -0.503522173908694],
                        [35.218116304338317, -0.504068334940741],
                        [35.218581552624876, -0.504324558634788],
                        [35.219431136452506, -0.50472912236223],
                        [35.220213292992227, -0.50541013797009],
                        [35.221137046836553, -0.506327149085626],
                        [35.222266410369947, -0.50508818487178],
                        [35.222823944266175, -0.504416285048117],
                        [35.220986530290212, -0.503609680242377],
                        [35.219738191308608, -0.503064950504949],
                        [35.218992859081112, -0.502793959199298],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 2,
                name: "Field 82 A&B",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-82-a-b%2F2023-09-07%2Ffield-82-a-b-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-82-a-b%2F2023-09-07%2F82AB-ndvi-cog.tif",
                application: {
                    bags: 49,
                    is_spread: true,
                    date: "22nd Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-82-a-b%2F2023-09-07%2Ffield-82-a-b-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.211748450824395, -0.505147977902102],
                        [35.211294983215865, -0.507843590908362],
                        [35.213549724936058, -0.50816479713107],
                        [35.213782756901551, -0.506061211280391],
                        [35.213952807254749, -0.505651830800468],
                        [35.212661684202686, -0.505343220900219],
                        [35.211748450824395, -0.505147977902102],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 3,
                name: "Field 87",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-87%2F2023-09-04%2Ffield-87-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-88%2F2023-09-14%2F8788-ndvi-cog.tif",
                application: {
                    bags: 75,
                    is_spread: true,
                    date: "23rd Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-87%2F2023-09-04%2Ffield-87-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.207606144552486, -0.507344357750446],
                        [35.205656205398434, -0.507034554333448],
                        [35.205801995241728, -0.505157510101044],
                        [35.203268896714505, -0.49958104859507],
                        [35.202430605115566, -0.499234797717248],
                        [35.203232449253683, -0.498141373892547],
                        [35.206366930884492, -0.50034644527236],
                        [35.206130022389139, -0.501767896244471],
                        [35.207988842891126, -0.503189347216583],
                        [35.20780660558701, -0.505339747405161],
                        [35.207606144552486, -0.507344357750446],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 4,
                name: "Field 88",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-88%2F2023-09-14%2Ffield-88-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-88%2F2023-09-14%2F8788-ndvi-cog.tif",
                application: {
                    bags: 67,
                    is_spread: true,
                    date: "24th Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-88%2F2023-09-14%2Ffield-88-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.203961398470149, -0.497084397528669],
                        [35.203232449253683, -0.498032031510077],
                        [35.206439825806136, -0.500364669002772],
                        [35.206166469849961, -0.501713225053236],
                        [35.207988842891126, -0.503171123486171],
                        [35.207241669944253, -0.501002499567181],
                        [35.207186998753016, -0.499435258751776],
                        [35.206968313988071, -0.498104926431723],
                        [35.205601534207197, -0.498050255240488],
                        [35.204763242608259, -0.497339529754433],
                        [35.203961398470149, -0.497084397528669],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 5,
                name: "Field 91-92",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-91-92%2F2023-09-07%2Fplot-91-92-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-91-92%2F2023-09-07%2F91-92-cog-rgb.tif",
                application: {
                    bags: 59,
                    is_spread: true,
                    date: "25th Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-91-92%2F2023-09-07%2Fplot-91-92-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.201631505770727, -0.506896278056735],
                        [35.199876894607591, -0.509101025068011],
                        [35.202265370536473, -0.510717839542946],
                        [35.204249642846619, -0.512077433533233],
                        [35.204947812733522, -0.512104992870874],
                        [35.205048863638204, -0.511673229914499],
                        [35.205296897676973, -0.509587906699667],
                        [35.20483757538296, -0.509734889833752],
                        [35.204516049777148, -0.509459296457343],
                        [35.204130219050178, -0.508880550366883],
                        [35.20278899795165, -0.507824109090647],
                        [35.201631505770727, -0.506896278056735],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 6,
                name: "Field 95B",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-95b%2F2023-09-17%2Ffield-95b-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-95b%2F2023-09-17%2F95B-ndvi-cog.tif",
                application: {
                    bags: 81,
                    is_spread: false,
                    date: "26th Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-95b%2F2023-09-17%2Ffield-95b-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.194735361031938, -0.505351327787948],
                        [35.194755561148511, -0.50554827892455],
                        [35.194755561148511, -0.505649279507423],
                        [35.19454850995362, -0.505583629128556],
                        [35.194442459341609, -0.50569977979886],
                        [35.1944071091376, -0.50585128067317],
                        [35.194235408146717, -0.505831080556595],
                        [35.194068757184979, -0.50616943250922],
                        [35.194907062022821, -0.506729985744165],
                        [35.194866661789675, -0.506851186443613],
                        [35.195154513450859, -0.507073387725934],
                        [35.194907062022821, -0.507558190523724],
                        [35.194588910186773, -0.507987443000935],
                        [35.195585449518553, -0.508801135137992],
                        [35.196505898114076, -0.509590091077012],
                        [35.196539421175579, -0.509906172169411],
                        [35.196524214759606, -0.510385174272426],
                        [35.196934787990763, -0.510978224495207],
                        [35.197132471398355, -0.510886985999395],
                        [35.197512631797579, -0.511411607350316],
                        [35.197360567637887, -0.511616893965894],
                        [35.197512631797579, -0.512141515316816],
                        [35.197968824276636, -0.512491262884097],
                        [35.198523858459495, -0.512574898171925],
                        [35.199132115098251, -0.512688946291691],
                        [35.198774764322984, -0.512308785892472],
                        [35.198501048835546, -0.509944188209333],
                        [35.198326175051903, -0.510035426705145],
                        [35.197892792196797, -0.509526011770192],
                        [35.19745940934169, -0.50894816796338],
                        [35.197839569740907, -0.508682055683927],
                        [35.198470636003606, -0.508400736988505],
                        [35.198561874499418, -0.508195450372927],
                        [35.196662111159782, -0.50695728916326],
                        [35.19495174117683, -0.505769725453768],
                        [35.194735361031938, -0.505351327787948],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 7,
                name: "Field 120",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-120%2F2023-09-07%2Fplot-120-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-120%2F2023-09-07%2F120-ndvi-cog.tif",
                application: {
                    bags: 60,
                    is_spread: true,
                    date: "20th Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-120%2F2023-09-07%2Fplot-120-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.2024416042319, -0.499272771242648],
                        [35.202311672243923, -0.499390891231717],
                        [35.20185100428656, -0.500205919156292],
                        [35.20153601764904, -0.500804393767574],
                        [35.201512393651228, -0.501028821746805],
                        [35.20169744830077, -0.500997323083054],
                        [35.20321332149382, -0.50044215913443],
                        [35.2035204334654, -0.500296477814578],
                        [35.203299942819136, -0.49960744454501],
                        [35.202870773525518, -0.499375141899841],
                        [35.2024416042319, -0.499272771242648],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 8,
                name: "Field 126-127",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-126-127%2F2023-09-19%2Ffield-126-127-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-126-127%2F2023-09-17%2F126127-ndvi-cog.tif",
                application: {
                    bags: 57,
                    is_spread: true,
                    date: "27th Sept 2023",
                },
                preview:
                    " https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-126-127%2F2023-09-19%2Ffield-126-127-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.21696308660588, -0.506358439021065],
                        [35.217067718542026, -0.505774244044254],
                        [35.217364175694435, -0.50538187428371],
                        [35.217529842926666, -0.504989504523165],
                        [35.217372895022443, -0.50459713476262],
                        [35.216858454669733, -0.504588415434608],
                        [35.216126031116715, -0.504509941482499],
                        [35.215472081515806, -0.504501222154487],
                        [35.215105869739297, -0.504326835594245],
                        [35.215105869739297, -0.504091413737918],
                        [35.215158185707374, -0.503646728009301],
                        [35.215073630038951, -0.50323565756783],
                        [35.214973930071729, -0.502964322213996],
                        [35.214503798850508, -0.501236610951685],
                        [35.214176553200211, -0.500578079581338],
                        [35.213909908596271, -0.500392236372528],
                        [35.212922405477315, -0.499481746352713],
                        [35.212560544022104, -0.500140851146134],
                        [35.212314995177501, -0.501097199277766],
                        [35.212883634607117, -0.501407366239376],
                        [35.213568586647341, -0.501769227694587],
                        [35.213943371725954, -0.502118165526399],
                        [35.214085531583358, -0.502686804956017],
                        [35.213852906362149, -0.50370777120465],
                        [35.213428794274265, -0.505045944421074],
                        [35.213259873560141, -0.505459355642477],
                        [35.21696308660588, -0.506358439021065],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 10,
                name: "Field 58",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-58%2F2023-09-05%2Ffield-58-cog.tif",
                ndvi: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-58%2F2023-09-05%2F58-ndvi-cog.tif",
                application: {
                    bags: 40,
                    is_spread: true,
                    date: "28th Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Ffield-58%2F2023-09-05%2Ffield-58-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.2024416042319, -0.499272771242648],
                        [35.202311672243923, -0.499390891231717],
                        [35.20185100428656, -0.500205919156292],
                        [35.20153601764904, -0.500804393767574],
                        [35.201512393651228, -0.501028821746805],
                        [35.20169744830077, -0.500997323083054],
                        [35.20321332149382, -0.50044215913443],
                        [35.2035204334654, -0.500296477814578],
                        [35.203299942819136, -0.49960744454501],
                        [35.202870773525518, -0.499375141899841],
                        [35.2024416042319, -0.499272771242648],
                    ],
                ],
            },
        },
        {
            type: "Feature",
            properties: {
                id: 9,
                name: "Field 120",
                cog: "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/tiles/{z}/{x}/{y}.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-120%2F2023-09-07%2Fplot-120-cog.tif",
                ndvi: null,
                application: {
                    bags: 92,
                    is_spread: true,
                    date: "29th Sept 2023",
                },
                preview:
                    "https://5uq77inhhb.execute-api.eu-west-1.amazonaws.com/cog/preview.webp?url=s3%3A%2F%2Fswift-ag-platform%2Fmedia%2Ffarms%2Fekaterra%2Fplot-120%2F2023-09-07%2Fplot-120-cog.tif&max_size=256",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [35.2024416042319, -0.499272771242648],
                        [35.202311672243923, -0.499390891231717],
                        [35.20185100428656, -0.500205919156292],
                        [35.20153601764904, -0.500804393767574],
                        [35.201512393651228, -0.501028821746805],
                        [35.20169744830077, -0.500997323083054],
                        [35.20321332149382, -0.50044215913443],
                        [35.2035204334654, -0.500296477814578],
                        [35.203299942819136, -0.49960744454501],
                        [35.202870773525518, -0.499375141899841],
                        [35.2024416042319, -0.499272771242648],
                    ],
                ],
            },
        },
    ],
};

type MapIndex = "RGB" | "NDVI" | "OSAVI" | "DSM";

export default function MapComponent() {
    const [isSidebarSmall, setIsSidebarSmall] = useState<boolean>(false);
    const [bounds, setBounds] = useState<any>(null);
    const [originalBounds, setOriginalBounds] = useState<any>(null);

    const [selectedPolygon, setSelectedPolygon] = useState<any>(null);

    const [mapIndex, setMapIndex] = useState<MapIndex>("RGB");

    const mapRef = useRef<any>(null);
    const geoJsonLayerRef = useRef(null);

    useEffect(() => {
        // setIsSidebarSmall(true);
        const bounds1 = geojsonData.features.reduce(
            (acc, feature) => {
                const polygonCoordinates = feature.geometry.coordinates[0]; // First ring (exterior ring)

                for (const [lng, lat] of polygonCoordinates) {
                    acc[0][0] = Math.min(acc[0][0], lat);
                    acc[0][1] = Math.min(acc[0][1], lng);
                    acc[1][0] = Math.max(acc[1][0], lat);
                    acc[1][1] = Math.max(acc[1][1], lng);
                }

                return acc;
            },
            [
                [Infinity, Infinity],
                [-Infinity, -Infinity],
            ],
        );

        console.log(bounds1, "bounds 1");
        // setIsSidebarSmall(true);

        setBounds(bounds1);
        setOriginalBounds(bounds1);

        if (mapRef.current) {
            setBounds(bounds);
            setOriginalBounds(bounds1);

            console.log("we have mapref");
            mapRef.current.fitBounds(bounds);
        }
    }, [mapRef]);

    const toggleSidebar = (e) => {
        // e.preventDefault();
        setIsSidebarSmall((prevState) => !prevState);
    };

    const flattenCoordinates = (coords) => {
        return coords.flat(2);
    };

    useEffect(() => {
        if (bounds !== null && mapRef.current && selectedPolygon) {
            // Extract coordinates from the GeoJSON geometry
            const coordinates = selectedPolygon.geometry.coordinates;

            // console.log(coordinates, 'coordinates');
            let latLngs;

            if (selectedPolygon.geometry.type === "Polygon") {
                // For a Polygon geometry
                latLngs = coordinates[0].map((coord) => L.latLng(coord[1], coord[0]));
            } else if (selectedPolygon.geometry.type === "MultiPolygon") {
                // For a MultiPolygon geometry

                const flattenedCoords = flattenCoordinates(coordinates);
                latLngs = flattenedCoords.map((coord) => L.latLng(coord[1], coord[0]));
            } else {
                // Handle other geometry types or throw an error
                throw new Error("Unsupported geometry type");
            }

            // console.log(latLngs, 'latLngs');

            if (latLngs) {
                // refreshMap();
                mapRef.current.fitBounds(latLngs);
            }
        }
    }, [bounds, mapRef]);

    const handleListItemClick = (featureId) => {
        // Find the specific polygon using the featureId
        const selectedPolygon1 = geojsonData.features.find(
            (feature) => feature.properties.id === featureId,
        );

        console.log(selectedPolygon1, "selectedPolygon");
        console.log(mapRef.current, "mapRef.current");
        console.log(geoJsonLayerRef.current, "eoJsonLayerRef.current");

        if (selectedPolygon1) {
            setSelectedPolygon(selectedPolygon1);
            const map = mapRef.current;
            const geoJsonLayer = geoJsonLayerRef.current;

            console.log("here");

            if (map && geoJsonLayer) {
                console.log("wiuut");
                let bounds1;
                // Check if it's a MultiPolygon or Polygon
                if (selectedPolygon1.geometry.type === "MultiPolygon") {
                    // Calculate bounds for all polygons within the MultiPolygon
                    bounds1 = L.geoJSON(selectedPolygon1.geometry).getBounds();
                    console.log(bounds1, "bounds");
                    setBounds(bounds1);
                } else if (selectedPolygon1.geometry.type === "Polygon") {
                    // Calculate bounds for the single Polygon
                    bounds1 = L.geoJSON(selectedPolygon1.geometry).getBounds();
                    setBounds(bounds1);
                }

                // Fit the map bounds to the calculated bounds
                // Ensure bounds exist and map has fitBounds method
                // if (bounds && map.leafletElement) {
                //   map.leafletElement.fitBounds(bounds);
                // }
            }

            // You can also add additional functionality like highlighting the selected polygon here
        }
    };

    function toggleIndex(value: MapIndex) {
        setMapIndex(value);
    }

    return (
        <div className="flex flex-col items-center w-full ">
            <div className={`grid-container w-full `}>
                <div
                    className={`sidebar bg-[#e5e7eb] justify-start items-center flex-col flex border-r-1 border-purple-600  ${
                        isSidebarSmall ? "sidebar_small" : ""
                    }
        `}
                >
                    <div className="overflow-clip button-sd" onClick={toggleSidebar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            className="w-full h-full font-bold text-blue-900 bg-yellow-300 overflow-clip"
                        >
                            <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                    </div>

                    <div className="flex flex-col items-center w-full py-4 text-center justify-evenly">
                        <Link
                            href="/"
                            className="justify-center w-1/3 py-2 mb-2 border rounded-md border-foreground/20 text-foreground"
                        >
                            <p className="text-center">Go Home</p>
                        </Link>

                        <hr />
                        <h1 className="text-lg tracking-wider text-gray-700 md:text-2xl">
                            {"Ekaterra Tea"} Datasets
                        </h1>
                    </div>

                    <hr />

                    <div
                        className={
                            isSidebarSmall
                                ? "flex flex-col items-center w-full px-2 space-y-2 overflow-y-scroll"
                                : "flex flex-col items-center w-full px-2 md:px-8 space-y-4 overflow-y-scroll"
                        }
                    >
                        {geojsonData ? (
                            geojsonData.features.map((feature, index) => {
                                return isSidebarSmall ? (
                                    <a
                                        href=""
                                        key={feature.properties.id}
                                        //onClick={toggleSidebar}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleListItemClick(feature.properties.id);
                                        }}
                                        className="flex  h-[130px] rounded-md shadow-md shadow-green-100  border-gray-200 w-full border-2  bg-white flex-col justify-between items-center"
                                    >
                                        <div className="flex flex-row items-center justify-start w-full p-1 px-2 overflow-clip ">
                                            <img
                                                className="flex object-fill w-full "
                                                src={feature.properties.preview}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-between w-full pt-1">
                                            <p className="text-sm font-semibold tracking-wider text-gray-900">
                                                {feature.properties.name}
                                            </p>
                                            <p className="mt-1 text-xs font-light tracking-tight text-gray-900">
                                                {feature.properties.application.date}
                                            </p>
                                        </div>
                                    </a>
                                ) : (
                                    <a
                                        href=""
                                        key={feature.properties.id}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleListItemClick(feature.properties.id);
                                        }}
                                        className="flex border-2 h-[100px] rounded-md shadow-md shadow-green-100  border-gray-200 w-full bg-white flex-row justify-between items-center"
                                    >
                                        {/* image */}
                                        <div className="flex flex-row items-center justify-start w-5/12 h-full p-1 px-4 overflow-clip ">
                                            <img
                                                className="flex object-fill w-full "
                                                src={feature.properties.preview}
                                            />
                                        </div>
                                        {/* content */}
                                        <div className="flex flex-col justify-around w-7/12 h-full px-2">
                                            <div className="flex flex-row items-center justify-between w-full pt-1">
                                                <p className="font-sans text-sm font-semibold tracking-wide text-gray-900">
                                                    {feature.properties.name}
                                                </p>
                                                <p className="text-xs font-light tracking-wider text-gray-900 ">
                                                    {
                                                        feature.properties.application
                                                            .date
                                                    }
                                                </p>
                                            </div>
                                            <div className="flex flex-row items-center justify-between w-full mt-2 mb-1">
                                                {/* <Badge variant='outline'>Badge</Badge> */}

                                                <div className="flex flex-row w-1/2 space-x-1 overflow-x-scroll">
                                                    <div className="px-1 py-0 text-xs text-white bg-blue-600 rounded-full">
                                                        RGB
                                                    </div>
                                                    <div className="px-1 py-0 text-xs text-white bg-green-600 rounded-full">
                                                        NDVI
                                                    </div>
                                                    {/* <div className="px-1 py-0 text-xs text-white bg-red-600 rounded-full">
                            DSM
                          </div>
                          <div className="px-1 py-0 text-xs text-white bg-green-900 rounded-full">
                            LCI
                          </div> */}
                                                </div>

                                                <div className="flex flex-row justify-end w-1/2 space-x-2 ">
                                                    <p>
                                                        {
                                                            feature.properties
                                                                .application.bags
                                                        }{" "}
                                                        bags
                                                    </p>
                                                    {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg> */}
                                                    {/*  */}
                                                    {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                            />
                          </svg> */}

                                                    {/*  */}
                                                    {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                            />
                          </svg> */}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })
                        ) : (
                            <h1>No loaded data</h1>
                        )}
                    </div>
                </div>

                {/* Map Containers */}
                <div
                    className={`main-content  h-full rounded-l-3xl overflow-clip bg-[#e5e7eb] ${
                        isSidebarSmall ? "main-content_large" : ""
                    }`}
                >
                    {/* <pre>{JSON.stringify(bounds)}</pre> */}

                    {/* <pre>{JSON.stringify(selectedPolygon)}</pre> */}

                    {/* <pre>{mapIndex}</pre> */}

                    {bounds && originalBounds ? (
                        <MapContainer
                            key={isSidebarSmall ? 1 : 2}
                            center={[-1, 37]}
                            ref={mapRef}
                            scrollWheelZoom={true}
                            bounds={originalBounds ? originalBounds : bounds}
                            maxZoom={22}
                            minZoom={14}
                            style={{
                                width: isSidebarSmall ? "90vw" : "70vw",
                                // width: "400px",
                                height: "100vh",
                                position: "relative",
                                backgroundColor: "#e5e7eb",
                            }}
                            className={`${
                                isSidebarSmall ? "inset-0 " : "inset-0 w-full"
                            } inset-0 w-full`}
                        >
                            <TileLayer
                                url={
                                    "http://mt{s}.google.com/vt/lyrs=s@207000000&hl=en&x={x}&y={y}&z={z}"
                                }
                                subdomains={"0123"}
                                attribution="&copy; Google Maps"
                                minZoom={8}
                                maxZoom={22}
                            />

                            {selectedPolygon &&
                            selectedPolygon.properties.cog &&
                            mapIndex == "RGB" ? (
                                <TileLayer
                                    attribution='&copy; <a href="https://agriline.co.ke">Agriline Kenya Limited</a>'
                                    url={selectedPolygon.properties.cog}
                                    maxNativeZoom={23}
                                    minZoom={8}
                                    maxZoom={24}
                                />
                            ) : selectedPolygon &&
                              selectedPolygon.properties.ndvi &&
                              mapIndex == "NDVI" ? (
                                <TileLayer
                                    attribution='&copy; <a href="https://agriline.co.ke">Agriline Kenya Limited</a>'
                                    url={selectedPolygon.properties.ndvi}
                                    maxNativeZoom={23}
                                    minZoom={8}
                                    maxZoom={24}
                                />
                            ) : null}

                            <GeoJSON
                                data={geojsonData}
                                ref={geoJsonLayerRef}
                                // style={(feature) => geoJSONStyle(feature)}
                                style={(feature) => {
                                    console.log("Feature:", feature);
                                    const isSpread =
                                        feature &&
                                        feature.properties &&
                                        feature.properties.application &&
                                        feature.properties.application.is_spread;
                                    console.log("isSpread:", isSpread);

                                    // DashBoardly conditional styling based on the is_spread property
                                    if (isSpread === true) {
                                        return {
                                            color: "#22d1ee",
                                            weight: 3,
                                            // fill: false,
                                        };
                                    } else {
                                        return {
                                            color: "red",
                                            weight: 3,
                                            // fill: "#fc5c9c",
                                        };
                                    }
                                }}
                                // onEachFeature={onEachFeature}
                                onEachFeature={(feature, layer) => {
                                    const customPopupContent = `
            <div class="bg-white shadow-md w-40">
                <div class='flex flex-col items-center justify-center bg-gray-800'>
                    <h2 class="py-2 mb-1 font-semibold text-white text-md">${feature.properties.name}</h2>
                </div>

              <hr>
              <div class="flex flex-col border-b bg-red-50 w-full">
                <div href="/" >
                   <div className="flex flex-col items-center w-full py-2 hover:bg-gray-100 ">
                        <div class="w-4/12 text-green-600">
                            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 96 96" id="Layer_1_1_" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M15.069,84h-0.138c-0.493-3.945-3.852-7-7.931-7c0,4.079,3.055,7.438,7,7.931V94h2v-9.069c3.945-0.493,7-3.852,7-7.931  C18.921,77,15.562,80.055,15.069,84z"/><path d="M37.069,84h-0.138c-0.493-3.945-3.852-7-7.931-7c0,4.079,3.055,7.438,7,7.931V94h2v-9.069c3.945-0.493,7-3.852,7-7.931  C40.921,77,37.562,80.055,37.069,84z"/><path d="M58,84.931V94h2v-9.069c3.945-0.493,7-3.852,7-7.931c-4.079,0-7.438,3.055-7.931,7h-0.138c-0.493-3.945-3.852-7-7.931-7  C51,81.079,54.055,84.438,58,84.931z"/><path d="M82,94v-9.069c3.945-0.493,7-3.852,7-7.931c-4.079,0-7.438,3.055-7.931,7h-0.138c-0.493-3.945-3.852-7-7.931-7  c0,4.079,3.055,7.438,7,7.931V94H82z"/><path d="M38,12v7h20v-7c0-5.523-4.477-10-10-10S38,6.477,38,12z M47,6v2c-1.654,0-3,1.346-3,3h-2C42,8.243,44.243,6,47,6z"/><path d="M49,43v-5.707h6.824C58.512,40.254,60,44.044,60,48.071V50h2v-1.929c0-3.941-1.271-7.678-3.589-10.778H64V28h9.08  C73.033,27.672,73,27.34,73,27v-3h-9v-2.707H32V24h-9v3c0,0.34-0.033,0.672-0.08,1H32v9.293h5.589  C35.271,40.393,34,44.131,34,48.071V50h2v-1.929c0-4.027,1.488-7.817,4.176-10.778H47V43H49z M43,33.293v-8h10v8H43z"/><path d="M23.52,15.9c0.64-0.45,0.64-1.35,0-1.8c-2.032-1.429-4.8-1.454-6.871-0.1h-1.299c-2.07-1.354-4.839-1.329-6.871,0.1  c-0.64,0.45-0.64,1.35,0,1.8c1.92,1.35,4.495,1.441,6.52,0.307V22h-4v5c0,2.419,1.718,4.436,4,4.899V42h-2v2h6v-2h-2V31.899  c2.282-0.463,4-2.48,4-4.899v-5h-4v-5.793C19.025,17.341,21.6,17.25,23.52,15.9z"/><rect height="14" width="2" x="15" y="47"/><path d="M24,54.979c0-2.78-0.919-5.537-2.587-7.761L20.8,46.4L19.2,47.6l0.613,0.817C21.223,50.298,22,52.628,22,54.979V61h2V54.979  z"/><path d="M28.003,59.083l1.993-0.166l-0.443-5.315c-0.373-4.469-3.096-8.49-7.106-10.496l-0.895,1.789  c3.391,1.695,5.693,5.096,6.008,8.873L28.003,59.083z"/><path d="M10,54.979c0-2.351,0.777-4.681,2.188-6.562L12.8,47.6L11.2,46.4l-0.612,0.817C8.919,49.441,8,52.198,8,54.979V61h2V54.979z  "/><path d="M2.003,58.917l1.993,0.166l0.443-5.315c0.315-3.777,2.617-7.178,6.008-8.873l-0.895-1.789  c-4.011,2.006-6.734,6.027-7.106,10.496L2.003,58.917z"/><rect height="2" width="2" x="15" y="63"/><rect height="2" width="2" x="22" y="63"/><rect height="2" width="2" x="28" y="62"/><rect height="2" width="2" x="8" y="63"/><rect height="2" width="2" x="2" y="62"/><path d="M72.48,14.1c-0.64,0.45-0.64,1.35,0,1.8c1.92,1.35,4.495,1.441,6.52,0.307V22h-4v5c0,2.419,1.718,4.436,4,4.899V42h-2v2h6  v-2h-2V31.899c2.282-0.463,4-2.48,4-4.899v-5h-4v-5.793c2.025,1.135,4.6,1.043,6.52-0.307c0.64-0.45,0.64-1.35,0-1.8  c-2.032-1.429-4.8-1.454-6.871-0.1h-1.299C77.28,12.646,74.512,12.671,72.48,14.1z"/><rect height="14" width="2" x="79" y="47"/><path d="M74,54.979c0-2.351,0.777-4.681,2.187-6.562L76.8,47.6L75.2,46.4l-0.613,0.817C72.919,49.441,72,52.198,72,54.979V61h2  V54.979z"/><path d="M74.447,44.895l-0.895-1.789c-4.011,2.006-6.734,6.027-7.106,10.496l-0.443,5.315l1.993,0.166l0.443-5.315  C68.754,49.99,71.057,46.59,74.447,44.895z"/><path d="M88,54.979c0-2.78-0.919-5.537-2.587-7.761L84.8,46.4L83.2,47.6l0.613,0.817C85.223,50.298,86,52.628,86,54.979V61h2V54.979  z"/><path d="M92.003,59.083l1.993-0.166l-0.443-5.315c-0.373-4.469-3.096-8.49-7.106-10.496l-0.895,1.789  c3.391,1.695,5.693,5.096,6.008,8.873L92.003,59.083z"/><rect height="2" width="2" x="79" y="63"/><rect height="2" width="2" x="72" y="63"/><rect height="2" width="2" x="66" y="62"/><rect height="2" width="2" x="86" y="63"/><rect height="2" width="2" x="92" y="62"/></svg>
                        </div>
                        <div class="w-full mb-2">
                            <p class="text-sm font-medium leading-none text-gray-800">
                              Spreading
                            </p>
                            <p class="text-xs text-gray-500">${feature.properties.application.bags} bags</p>
                            <p class="text-xs  text-gray-500">Date: ${feature.properties.application.date}</p>

                      
                            <a href='#' class="px-4 flex justify-center flex-row py-2 text-white  bg-blue-600 text-sm text-center w-full rounded-sm">
                             <span class='text-white'> Go to Plot </span>
                            </a>
                        </div>
                    </div>
                </div>
              
               </div>
            </div>
          `;

                                    // // Create the popup with the custom content
                                    // const customPopup = <div>{customPopupContent}</div>;

                                    // Bind the custom popup to the feature layer
                                    layer.bindPopup(customPopupContent);

                                    // Add a click event listener to open the popup when clicked
                                    layer.on({
                                        click: () => {
                                            // layer.bindPopup(feature.properties.name).openPopup();
                                        },
                                    });

                                    const tooltipContent = feature.properties.name;
                                    const tooltip = L.tooltip({
                                        permanent: true, // Keep the tooltip open
                                        direction: "auto", // Automatically choose the direction
                                    }).setContent(tooltipContent);

                                    // Bind the tooltip to the feature layer
                                    layer.bindTooltip(tooltip);
                                }}
                            ></GeoJSON>

                            <div className="absolute flex flex-col items-center justify-center space-x-8 top-2 left-40 right-40 z-[9999]">
                                {selectedPolygon ? (
                                    <div className="flex items-center justify-between w-full p-3 bg-blue-400 border-b">
                                        <div
                                            onClick={() => {
                                                setSelectedPolygon(null);

                                                mapRef.current.fitBounds(
                                                    originalBounds,
                                                );
                                            }}
                                            className="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded shadow-md text-slate-500"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                                />
                                            </svg>
                                            <span>Back</span>
                                        </div>
                                        <div className="text-lg font-bold text-gray-100">
                                            {selectedPolygon.properties.name}
                                        </div>
                                        <div className="flex items-center space-x-5 text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6.905 9.97a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V18a.75.75 0 001.5 0v-4.19l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                                                    clip-rule="evenodd"
                                                />
                                                <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                                                    clip-rule="evenodd"
                                                />
                                                <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                                            </svg>
                                        </div>
                                    </div>
                                ) : null}

                                <div className="flex flex-row justify-center w-full mt-4 space-x-8">
                                    {selectedPolygon &&
                                    selectedPolygon.properties.cog ? (
                                        <div
                                            onClick={() => toggleIndex("RGB")}
                                            className="flex px-4 py-2 text-white bg-gray-700 rounded-sm shadow-sm shadow-white text-md"
                                        >
                                            <p> RGB </p>
                                        </div>
                                    ) : null}

                                    {selectedPolygon &&
                                    selectedPolygon.properties.ndvi ? (
                                        <div
                                            onClick={() => toggleIndex("NDVI")}
                                            className="flex px-4 py-2 text-white bg-gray-700 rounded-sm shadow-sm shadow-white text-md"
                                        >
                                            <p> NDVI </p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </MapContainer>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

import LandingPageComponent from "@/components/landing";
import {createClient} from "@/utils/supabase/server";
import Image from "next/image";
import AuthButton from "../components/auth/AuthButton";

export default async function Index() {
    const canInitSupabaseClient = () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
            createClient();
            return true;
        } catch (e) {
            return false;
        }
    };

    const isSupabaseConnected = canInitSupabaseClient();

    return (
        <div className="flex flex-col items-center w-full">
            <nav className="flex justify-center w-full h-16 ">
                <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
                    <div className="bg-white">
                        {/* <p>Precision Data</p> */}

                        <Image
                            src="/images/precision-logo.png"
                            height={50}
                            width={200}
                            alt={"precision drones logo"}
                        />
                    </div>
                    {isSupabaseConnected && <AuthButton />}
                </div>
            </nav>

            <LandingPageComponent />

            <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
                <p>Powered by Precision Drones</p>
            </footer>
        </div>
    );
}

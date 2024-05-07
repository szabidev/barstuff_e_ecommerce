"use client"

import Sidebar from '@/components/ui/sidebar'
import Header from '@/components/ui/header'
import {useAppProvider} from "@/app/app-provider";
import {Digital} from "react-activity";
import "react-activity/dist/library.css";

export default function DefaultLayout({children,}: {
    children: React.ReactNode
}) {
    const {user} = useAppProvider();

    if (!user) {
        return <div className="flex items-center justify-center h-[100dvh]">
            <Digital size={50} color="white"/>
        </div>
    }

    return (
        <div className="flex h-[100dvh] overflow-hidden">

            {/* Sidebar */}
            <Sidebar/>

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header/>

                <main className="grow [&>*:first-child]:scroll-mt-16">
                    {children}
                </main>

            </div>

        </div>
    )
}

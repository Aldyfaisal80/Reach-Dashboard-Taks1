import { Outlet } from "react-router-dom";
import Navbar from "../fragments/Navbar";
import Sidebar from "../fragments/Sidebar";

export default function DashboardMainLayout () {
    return (
        <div className="w-full h-full overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
            <div className="flex w-full h-dvh bg-gray-200">
                <Sidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Navbar />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <Outlet />
                    </main>
                </div >
            </div >
        </div >
    )
}
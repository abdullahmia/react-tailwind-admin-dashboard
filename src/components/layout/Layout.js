import { useEffect } from 'react';
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

const Layout = ({ children, title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <Header />
            <div class="flex overflow-hidden bg-white pt-16">
                <Sidebar />
                <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main>
                        <div class="pt-6 px-4">
                            {children}
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}

export default Layout
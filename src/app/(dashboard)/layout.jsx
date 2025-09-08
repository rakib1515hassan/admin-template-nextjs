"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/layouts/Sidebar";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { demoUserPermissions } from "@/components/layouts/demoUserPermissions";

export default function DashboardLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // ✅ Sidebar auto open/close based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSidebarOpen(true); // Desktop → open
            } else {
                setSidebarOpen(false); // Mobile → closed
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ✅ Dark mode setup
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar
                open={sidebarOpen}
                setOpen={setSidebarOpen}
                userPermissions={demoUserPermissions}
            />

            {/* Main content */}
            <div className="flex flex-col flex-1 w-0">
                <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 p-6 overflow-auto">{children}</main>
                <Footer />
            </div>
        </div>
    );
}

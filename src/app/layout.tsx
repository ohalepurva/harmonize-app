import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import AppSidebar from "@/components/ui/app-sidebar";
import { Toaster } from "sonner";
import Banner from "./dashboard/_components/banner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="w-full h-screen">
            <body>
              <div className="flex">
                <SidebarTrigger />
                <div className="w-full h-[12rem] p-1 flex items-center">
                  <Banner />
                </div>
              </div>
              {children}
              <Toaster />
            </body>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

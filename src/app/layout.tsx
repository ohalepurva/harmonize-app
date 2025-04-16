import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import AppSidebar from "@/components/ui/app-sidebar";

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
                <div className="w-full h-[7rem] p-3 flex items-center">
                  <h1 className="text-4xl">Hello Purva !</h1>
                </div>
              </div>
              {children}
            </body>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

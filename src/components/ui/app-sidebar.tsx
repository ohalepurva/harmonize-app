import { Label } from "./label";
import { Logo } from "./logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <div className="h-full w-full flex flex-col justify-center items-center gap-2 mt-4">
            <SidebarMenuItem className="w-full border">
              <SidebarMenuButton size={"lg"}>
                <a href="/">
                  <Label className="text-lg">Dashboard</Label>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="w-full border">
              <SidebarMenuButton size={"lg"}>
                <a href="/courses">
                  <Label className="text-lg">Courses</Label>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

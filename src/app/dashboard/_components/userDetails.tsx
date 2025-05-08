import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeadDetailsForm from "./leadDetailsForm";
import ActivityLogs from "./activityLogs";

const UserDetails = ({
  selectedUser,
  setSelectedUser,
  userActivityLogs,
  setUserActivityLogs,
}) => {
  return (
    <div>
      <Tabs defaultValue="userDetails" className="h-full">
        <TabsList className="grid w-full grid-cols-2 text-left tracking-wider h-[4rem] items-center p-3 border-b-2">
          <TabsTrigger value="userDetails" className="tracking-wider text-lg">
            User Details
          </TabsTrigger>
          <TabsTrigger value="activityLogs" className="tracking-wider text-lg">
            Activity Logs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="userDetails">
          <LeadDetailsForm
            title={"User Details"}
            details={selectedUser}
            setItem={setSelectedUser}
          />
        </TabsContent>
        <TabsContent value="activityLogs">
          <ActivityLogs
            title={"Acivity Logs"}
            details={userActivityLogs}
            setItem={setUserActivityLogs}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDetails;

"use client";

import { useState } from "react";
import ListTable from "./_components/listTable";
import ActivityLogs from "./_components/activityLogs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActionsFooter from "./_components/actionsFooter";
import { initialDetails, leadsTablecolumns } from "@/lib/constants";
import LeadDetailsForm from "./_components/leadDetailsForm";

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isActive, setIsActive] = useState();
  return (
    <div className="h-screen w-full flex justify-center items-center p-6">
      <div className="grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
        <div className="bg-card col-span-4 row-span-2 rounded-3xl flex justify-center items-center">
          <ListTable
            isActive={isActive}
            setIsActive={setIsActive}
            onSelect={setSelectedUser}
            title={"Fresh Leads"}
            items={initialDetails.slice(0, 6)}
            columns={leadsTablecolumns}
          />
        </div>
        <div className="relative bg-card col-span-6 row-span-4 rounded-3xl flex justify-center items-center w-full h-full">
          {selectedUser ? (
            <>
              <div className="w-full h-[90%] top-0 absolute p-1 shadow-md border-separate border-spacing-y-3">
                <Tabs defaultValue="userDetails" className="h-full">
                  <TabsList className="grid w-full grid-cols-2 text-left tracking-wider h-[4rem] items-center p-3 border-b-2">
                    <TabsTrigger
                      value="userDetails"
                      className="tracking-wider text-lg"
                    >
                      User Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="activityLogs"
                      className="tracking-wider text-lg"
                    >
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
                      details={selectedUser}
                      setItem={setSelectedUser}
                    />
                  </TabsContent>
                </Tabs>
              </div>
              <div className="flex absolute w-full h-[10%] bottom-0 items-center justify-end p-3">
                <ActionsFooter />
              </div>
            </>
          ) : (
            <p className="text-gray-500 w-full h-full flex justify-center items-center text-2xl">
              Select a user to see details.
            </p>
          )}
        </div>
        <div className="bg-card col-span-4 row-span-2 rounded-3xl flex justify-center items-center">
          <ListTable
            isActive={isActive}
            setIsActive={setIsActive}
            onSelect={setSelectedUser}
            title={"Callbacks"}
            items={initialDetails.slice(5, 10)}
            columns={leadsTablecolumns}
          />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

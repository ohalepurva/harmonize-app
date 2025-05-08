"use client";

import { useState } from "react";
import ListTable from "./_components/listTable";

import ActionsFooter from "./_components/actionsFooter";
import { initialDetails, leadsTablecolumns } from "@/lib/constants";
import UserDetails from "./_components/userDetails";
import useInitializeData from "./_hooks/useInitializeData";

const Dashboard = () => {
  const {
    selectedUser,
    userActivityLogs,
    enquiryList,
    isActive,
    callbackList,
    setIsActive,
    setSelectedUser,
    setUserActivityLogs,
  } = useInitializeData();
  return (
    <div className="h-screen w-full flex justify-center items-center p-6">
      <div className="grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
        <div className="bg-card col-span-4 row-span-2 rounded-3xl flex justify-center items-center">
          <ListTable
            isActive={isActive}
            setIsActive={setIsActive}
            onSelect={setSelectedUser}
            title={"Fresh Leads"}
            items={enquiryList}
            columns={leadsTablecolumns}
          />
        </div>
        <div className="relative bg-card col-span-6 row-span-4 rounded-3xl flex justify-center items-center w-full h-full">
          {selectedUser ? (
            <>
              <div className="w-full h-[90%] top-0 absolute p-1 shadow-md border-separate border-spacing-y-3">
                <UserDetails
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                  userActivityLogs={userActivityLogs}
                  setUserActivityLogs={setUserActivityLogs}
                />
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
            items={callbackList}
            columns={leadsTablecolumns}
          />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

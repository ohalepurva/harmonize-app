"use client";

import { useState } from "react";
import LeadDetails from "./_components/leadDetails";
import Leads from "./_components/leads";

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  console.log({ selectedUser });
  return (
    <div className="h-screen w-full flex justify-center items-center p-6">
      <div className="grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
        <div className="bg-card col-span-4 row-span-2 rounded-3xl flex justify-center items-center">
          <Leads onSelect={setSelectedUser} title={"Fresh Leads"} />
        </div>
        <div className="bg-card col-span-6 row-span-4 rounded-3xl flex justify-center items-center">
          <LeadDetails
            title={"User Details"}
            item={selectedUser}
            setItem={setSelectedUser}
          />
        </div>
        <div className="bg-card col-span-4 row-span-2 rounded-3xl flex justify-center items-center">
          <Leads onSelect={setSelectedUser} title={"Callbacks"} />
        </div>
        {/* <div className="col-span-2 row-span-2 bg-amber-900 rounded-3xl flex justify-center items-center">
          Leads for Today
        </div>
        <div className="col-span-4 row-span-2 bg-amber-900 rounded-3xl flex justify-center items-center">
          Lead Details
        </div>
        <div className="col-span-4 row-span-2 bg-amber-900 rounded-3xl flex justify-center items-center">
          Leads for Today
        </div> */}
      </div>
    </div>
  );
};
export default Dashboard;

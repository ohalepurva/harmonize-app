"use client";

import { useEffect, useState } from "react";
import useTableMaxRows from "../_hooks/useTableMaxRows";
import Header from "./header";
import { initialDetails, leadsTablecolumns } from "@/lib/constants";

const Leads = ({ title, onSelect }) => {
  const { maxRows, observerRef } = useTableMaxRows(initialDetails);
  const [rowsToRender, setRowsToRender] = useState(4);
  return (
    <div className={`w-full h-full p-1`}>
      {/* <div className="text-left tracking-wider h-[4rem] flex items-center p-0.5 text-2xl border-b-2">
        {title}
      </div> */}
      <Header title={title} />
      <div className="flex justify-center items-center">
        <table className="w-full table-auto shadow-md border-separate border-spacing-y-3 p-2">
          <thead className="text-left tracking-wider">
            <tr className="border-collapse border-spacing-2 border border-gray-400 dark:border-gray-500">
              {leadsTablecolumns?.map((col) => {
                return <th key={col.title}>{col.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {initialDetails?.slice(0, rowsToRender)?.map((item: Object) => {
              return (
                <tr
                  className="text-gray-200 hover:bg-accent hover:rounded-md cursor-pointer shadow-xs "
                  key={item.id}
                  onClick={() => onSelect(item)}
                >
                  <td className="p-3 ">{`${item.firstName} ${item.lastName}`}</td>
                  <td className="p-3">{item.primaryNumber}</td>
                  <td className="p-3">{item.course}</td>
                  <td className="p-3">{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div ref={observerRef} className="h-4 w-full"></div>
    </div>
  );
};

export default Leads;

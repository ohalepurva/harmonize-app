"use client";
import Header from "./header";
import { LeadStatus } from "@/lib/constants";

const ListTable = ({
  isActive,
  setIsActive,
  title,
  onSelect,
  items,
  columns,
}) => {
  return (
    <div className={`w-full h-full p-1`}>
      {/* <div className="text-left tracking-wider h-[4rem] flex items-center p-0.5 text-2xl border-b-2">
        {title}
      </div> */}
      <Header title={title} />
      <div className="flex justify-center items-center">
        <table className="w-full table-auto shadow-md border-separate border-spacing-y-3 p-2">
          <thead className="text-left tracking-wider h-[2rem]">
            <tr className="border-ring ring-ring/50 outline-ring flex-1 items-center justify-center gap-1.5 rounded-md border px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] ring-[1px]">
              {columns?.map((col) => {
                return (
                  <th className="pl-3" key={col.title}>
                    {col.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {items?.map((item: Object) => {
              return (
                <tr
                  className={`hover:bg-accent active:bg-violet-700 flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]
                   cursor-pointer ${isActive === item.id ? "bg-accent" : ""}`}
                  key={item.id}
                  onClick={() => {
                    onSelect(item);
                    setIsActive(item.id);
                  }}
                >
                  <td className="rounded-l-full p-3 ">{`${item.first_name} ${item.last_name}`}</td>
                  <td className="p-3">{item.phone_primary}</td>
                  <td className="p-3">{item.course_name}</td>
                  <td className="rounded-r-full p-3">
                    {LeadStatus[item.status]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div ref={observerRef} className="h-4 w-full"></div> */}
    </div>
  );
};

export default ListTable;

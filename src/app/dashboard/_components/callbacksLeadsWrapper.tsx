import { useEffect, useState } from "react";
import useGetEnquiryDetails from "../_hooks/useGetEnquiryDetails";
import ListTable from "./listTable";
import { leadsTablecolumns } from "@/lib/constants";

const CallbacksLeadsWrapper = ({ isActive, setIsActive, onSelect }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [data, setData] = useState();
  const { fetchCallbacksEnquiries } = useGetEnquiryDetails();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCallbacksEnquiries(currentPageIndex);
      setData(data);
    };

    fetchData();
  }, [currentPageIndex]);

  return (
    <div className="w-full h-full bg-card col-span-4 row-span-2 rounded-3xl flex justify-center items-center">
      <ListTable
        isActive={isActive ? isActive : 0}
        setIsActive={setIsActive}
        onSelect={onSelect}
        title={"Callbacks"}
        items={data?.items}
        columns={leadsTablecolumns}
        itemsLength={data?.totalRecords}
      />
    </div>
  );
};

export default CallbacksLeadsWrapper;

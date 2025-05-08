import { useEffect, useRef, useState } from "react";
import useGetEnquiryDetails from "../_hooks/useGetEnquiryDetails";
import ListTable from "./listTable";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { leadsTablecolumns } from "@/lib/constants";

const FreshLeadsWrapper = ({ isActive, setIsActive, onSelect }) => {
  const [data, setData] = useState();
  const { fetchEnquiries, fetchAllLeadActions } = useGetEnquiryDetails();

  useEffect(() => {
    const fetchData = async () => {
      const { items } = await fetchEnquiries(1);
      setData(items);
      const res = await fetchAllLeadActions(items[0]?.id);
      console.log(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setIsActive(data[0].id);
      onSelect(data[0]);
    }
  }, [data]);

  return (
    <div className="w-full h-full bg-card col-span-4 row-span-2 rounded-3xl">
      <ListTable
        isActive={isActive}
        setIsActive={setIsActive}
        onSelect={onSelect}
        title={"Fresh Leads"}
        items={data}
        columns={leadsTablecolumns}
      />
    </div>
  );
};

export default FreshLeadsWrapper;

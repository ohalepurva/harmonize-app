import { useEffect, useState } from "react";
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
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState();
  const { fetchEnquiries } = useGetEnquiryDetails();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEnquiries(currentPageIndex);
      setData(data);
    };

    fetchData();
    setTotalPages(data?.totalRecords / 4);
  }, [currentPageIndex]);

  return (
    // <div className="h-full w-full flex">
    <div className="w-full h-full bg-card col-span-4 row-span-2 rounded-3xl">
      <ListTable
        isActive={isActive ? isActive : 0}
        setIsActive={setIsActive}
        onSelect={onSelect}
        title={"Fresh Leads"}
        items={data?.items}
        columns={leadsTablecolumns}
        itemsLength={data?.totalRecords}
      />
      {/* <div className="flex items-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {Array.from({ length: 4 }, (_, pageIndex) => {
              return (
                <PaginationItem key={pageIndex}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPageIndex(pageIndex + 1)}
                  >
                    {pageIndex + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            {totalPages > 4 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div> */}
    </div>
    // </div>
  );
};

export default FreshLeadsWrapper;

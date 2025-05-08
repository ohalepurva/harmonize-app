import { useEffect, useState } from "react";
import useGetEnquiryDetails from "./useGetEnquiryDetails";

const useInitializeData = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const [userActivityLogs, setUserActivityLogs] = useState([]);
  const [enquiryList, setEnquiryList] = useState([]);
  const [callbackList, setCallbackList] = useState([]);
  const [isActive, setIsActive] = useState();

  const { fetchEnquiries, fetchAllLeadActions, fetchCallbacksEnquiries } =
    useGetEnquiryDetails();

  useEffect(() => {
    const fetchData = async () => {
      const { items } = await fetchEnquiries(1);
      setEnquiryList(items);
      setSelectedUser(items[0]);
      setIsActive(items[0]?.id);
      const callbackList = await fetchCallbacksEnquiries(1);
      setCallbackList(callbackList?.items);
      const res = await fetchAllLeadActions(items[0]?.id);
      setUserActivityLogs(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchActions = async () => {
      const res = await fetchAllLeadActions(isActive);
      setUserActivityLogs(res);
    };
    fetchActions();
  }, [selectedUser]);

  return {
    selectedUser,
    userActivityLogs,
    enquiryList,
    isActive,
    callbackList,
    setCallbackList,
    setIsActive,
    setSelectedUser,
    setUserActivityLogs,
  };
};

export default useInitializeData;

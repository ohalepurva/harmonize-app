const useCreateCallbackActivity = () => {
  const logActivity = async ({ newUserActivity }) => {
    await fetch("/api/log-activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserActivity),
    });
  };

  return { logActivity };
};

export default useCreateCallbackActivity;

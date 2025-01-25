import { useGetCity } from "../../hooks/useCustomTestHooks";

function TestPage() {
  const {
    mutate,
    isLoading,
    isError,
    isSuccess,
    data: testData,
  } = useGetCity({
    onSuccess: (data) => console.log("onSuccess"),
    onError: (error) => console.log("onError"),
  });

  const handleFetchCity = () => {
    mutate({ name: "istanbul" });
  };

  console.log({ testData, isLoading, isError, isSuccess });

  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={handleFetchCity} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch City"}
      </button>
      {isError && <p>Error fetching city data. Please try again.</p>}
      {isSuccess && <pre>{JSON.stringify(testData, null, 2)}</pre>}
    </div>
  );
}

export default TestPage;

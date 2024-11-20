import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

const LabResult = () => {
  const [labResults, setLabResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLabResults = async () => {
      try {
        const username = "coalition";
        const password = "skills-test";
        const base64Credentials = btoa(`${username}:${password}`);

        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${base64Credentials}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch lab results");
        }

        const data = await response.json();
        console.log("Fetched lab results:", data);

        const patient = data.find(
          (patient) => patient.name === "Jessica Taylor"
        );

        if (patient) {
          setLabResults(patient.lab_results || []);
        } else {
          setError("Patient not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLabResults();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color="#fd961a" size={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-4 shadow rounded-2xl">
      <h3 className="text-2xl font-bold mb-2 text-[#072635]">Lab Results </h3>

      <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-black">
        <ul>
          {labResults.length > 0 ? (
            labResults.map((result, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-3"
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <span className="font-medium text-[#072635]">{result}</span>
                  </div>
                </div>
                <BsDownload className="text-black cursor-pointer" />
              </li>
            ))
          ) : (
            <li className="py-3 text-sm text-gray-500">
              No lab results available for Jessica Taylor
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LabResult;

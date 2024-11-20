import { useEffect, useState } from "react";

const DiagnosticList = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
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
          throw new Error("Failed to fetch patient data");
        }

        const data = await response.json();
        console.log("Fetched patient data:", data);

        // Filter for Jessica Taylor
        const patient = data.find(
          (patient) => patient.name === "Jessica Taylor"
        );

        if (patient) {
          setPatientData(patient);
        } else {
          setError("Patient not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const diagnosticList = patientData?.diagnostic_list || [];

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#072635]">Diagnostic List</h2>
      </div>

      <table className="min-w-full">
        <thead className="rounded-full">
          <tr className="text-left" style={{ backgroundColor: "#F6F7F8" }}>
            <th className="py-3 px-6 text-sm font-medium text-[#072635]">
              Problem/Diagnosis
            </th>
            <th className="py-3 px-6 text-sm font-medium text-[#072635]">
              Description
            </th>
            <th className="py-3 px-6 text-sm font-medium text-[#072635]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {diagnosticList.length > 0 ? (
            diagnosticList.map((diagnostic, index) => (
              <tr key={index}>
                <td className="py-3 px-6 text-sm">
                  {diagnostic.name || "Not Available"}
                </td>
                <td className="py-3 px-6 text-sm">
                  {diagnostic.description || "Not Available"}
                </td>
                <td className="py-3 px-6 text-sm text-[#072635]">
                  {diagnostic.status || "Not Available"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-3 px-6 text-sm text-center">
                No diagnostics available for Jessica Taylor
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;

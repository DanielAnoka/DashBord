/* eslint-disable react/prop-types */
import BloodPressureChart from "./BloodPressureChart";

const Card = ({ content, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow`} style={{ backgroundColor: bgColor }}>
      {content}
    </div>
  );
};

const DiagnosisHistory = () => {
  const cardContent1 = (
    <div>
      <img src="/assets/icons/rate.png" alt="Respiratory Rate Icon" />
      <h3 className="text-sm  text-[#072635]">Respiratory Rate</h3>
      <p className="text-2xl font-bold  text-[#072635]">20 bpm</p>
      <p className="pt-4 text-[14px] text-[#072635]">Normal</p>
    </div>
  );

  const cardContent2 = (
    <div>
      <img src="/assets/icons/temperature.png" alt="Temperature Icon" />
      <h3 className="text-sm font-semibold text-[#072635]">Temperature</h3>
      <p className="text-2xl font-bold text-[#072635]">98.6°F</p>
      <p className="pt-4 text-[14px] text-[#072635]">Normal</p>
    </div>
  );

  const cardContent3 = (
    <div>
      <img src="/assets/icons/HeartBPM.png" alt="Heart Rate Icon" />
      <h3 className="text-sm font-semibold text-[#072635]">Heart Rate</h3>
      <p className="text-2xl font-bold text-[#072635]">72 bpm</p>
      <p className="pt-4 text-[14px] text-[#072635] flex items-center">
        <img src="/assets/icons/ArrowDown.svg" className="mr-2" alt="Arrow Icon" /> Lower than
        Average
      </p>
    </div>
  );

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#072635]">Diagnosis History</h2>
      </div>

      {/* Blood Pressure Chart */}
      <div>
        <BloodPressureChart />
      </div>

      {/* Cards Section */}
      <div className="flex flex-row space-x-4 mt-4">
        <div className="flex-1">
          <Card content={cardContent1} bgColor="#E0F3FA" />
        </div>
        <div className="flex-1">
          <Card content={cardContent2} bgColor="#FFE6E9" />
        </div>
        <div className="flex-1">
          <Card content={cardContent3} bgColor="#FFE6F1" />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;

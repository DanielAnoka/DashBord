import { IoIosMore } from "react-icons/io";
import { Patients } from "../constants";

const PatientList = () => {
  return (
    <div className="bg-white p-4 shadow rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold mb-2 text-[#072635]">Patients</h3>
        <img src="/assets/icons/search.png" alt="search" />
      </div>

  
      <div className="max-h-[500px] overflow-y-auto scrollable-container">
        <ul>
          {Patients.map((patient) => (
            <li
              key={patient.id}
              className="flex justify-between items-center py-3"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={patient.icon}
                  alt={patient.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <span className="font-medium text-[#072635]">
                    {patient.name}
                  </span>
                  <div className="text-sm text-[#707070]">{patient.subtitle}</div>
                </div>
              </div>

              <IoIosMore className="text-gray-500 cursor-pointer mr-7" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientList;
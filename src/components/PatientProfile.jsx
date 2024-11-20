import { useEffect, useState } from 'react';

const PatientProfile = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const username = 'coalition';
        const password = 'skills-test';
        const base64Credentials = btoa(`${username}:${password}`);
  
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${base64Credentials}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch patient data');
        }
  
        const data = await response.json();
        console.log('Fetched patient data:', data); 
        
      
        const patient = data.find(patient => patient.name === "Jessica Taylor");
        
        if (patient) {
          setPatientData(patient); 
        } else {
          setError('Patient not found');  
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

  const Profile = [
    {
      icon: "/assets/icons/BirthIcon.png",
      text: "Date Of Birth",
      subText: patientData?.date_of_birth || "Not Available", 
    },
    {
      icon: "/assets/icons/FemaleIcon.png",
      text: "Gender",
      subText: patientData?.gender || "Not Available", 
    },
    {
      icon: "/assets/icons/PhoneIcon.png",
      text: "Contact Info.",
      subText: patientData?.phone_number || "Not Available", 
    },
    {
      icon: "/assets/icons/PhoneIcon.png",
      text: "Emergency Contacts",
      subText: patientData?.emergency_contact || "Not Available",  
    },
    {
      icon: "/assets/icons/secu.png", 
      text: "Insurance Provider",
      subText: patientData?.insurance_type || "Not Available",  
    },
  ];

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl w-[350px] mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src={patientData?.profilePicture || "/assets/Patients/main.png"} 
          alt="Patient"
          className="w-[200px] h-[200px] rounded-full object-cover"
        />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-[#072635]">
          {patientData?.name || 'Jessica Taylor'} 
        </h2>
      </div>

      <div className="space-y-4">
        {Profile.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-[#072635]">
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-[42px] h-[42px]"
                />
              ) : (
                item.icon
              )}
            </div>

            <div>
              <span className="font-medium text-[#072635]">{item.text}</span>
              <p className="text-sm text-[#707070]">{item.subText}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-[#01F0D0] text-black py-2 px-6 rounded-full text-base font-semibold hover:bg-[#01d7b5] transition-colors">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default PatientProfile;

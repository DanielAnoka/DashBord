import PatientList from "../components/PatientList"
import LabResults from "../components/LabResult"
import PatientProfile from "../components/PatientProfile"
import DiagnosticList from "../components/DiagnosticList"
import DiagnosisHistory from "../components/DiagnosisHistory"

const Dashbord = () => {
  return (
    <div className="flex mt-28">
    <div className="flex-1">
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-3">
          <PatientList />
        </div>
        <div className="col-span-6 space-y-4">
          <DiagnosisHistory />
          <DiagnosticList/>
        </div>
        <div className="col-span-3 space-y-4">
          <PatientProfile />
          <LabResults />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashbord
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import ProfessionalDetails from "./ProfessionalDetails";
import Skills from "./Skills";
import UpdateContact from "./UpdateContact";
import UploadPhoto from "./UploadPhoto";

const page = () => {
  return (
    <div className="w-full min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-y-4">
          {/* Profile Picture */}
          <UploadPhoto />
          {/* Update Contact Name & Email @ Mobile */}
          <UpdateContact />
          {/* Skills */}
          <Skills />
          {/* ProfessionalDetails */}
          <ProfessionalDetails />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-y-4">
            {/*  Certifications */}
            <Certifications />
            {/*  Experience */}
            <Experience />
            {/*  Education */}
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

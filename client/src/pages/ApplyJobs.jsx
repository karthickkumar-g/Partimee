import { useState } from "react";
import { useParams } from "react-router-dom";

const ApplyJobs = () => {
    const { jobId } = useParams();
    const [resumeUrl, setResumeUrl] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = () =>{

    }
  
    return (
      <div className="max-w-lg m-10 h-[70vh] mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Apply for Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 h-[40vh] border rounded"
            placeholder="Cover Letter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          />
          {/* <FileUploader uploadType="resume" onUpload={setResumeUrl} /> */}
          {resumeUrl && (
            <p className="text-green-600">
              ✅ Resume uploaded:{" "}
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="underline">
                View File
              </a>
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    );
  };

export default ApplyJobs;

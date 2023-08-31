import { NuvoImporter } from "nuvo-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function NuvoPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>(
    "After the file import, your cleaned data will be displayed here."
  );

  return (
    <div className="App">
      <div className="container-wrapper">
        <div>
          <p
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
              padding: "16px"
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </p>
          <h1>Hello nuvo tester</h1>
          <h2 className="description">
            Try out our importer and upload some data
          </h2>
          <NuvoImporter
            licenseKey={"non-commercial"}
            onResults={(res, identifier, complete) => {
              setResult(res);
              complete();
              console.log(res);
            }}
            settings={{
              developerMode: true,
              identifier: "contact_data",
              allowManualInput: true,
              columns: [
                {
                  key: "name",
                  label: "Name",
                  columnType: "string",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                  key: "email",
                  label: "Email",
                  columnType: "string",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                  key: "phone",
                  label: "Phone",
                  columnType: "string",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                  key: "date",
                  label: "Date",
                  columnType: "string",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
              ]
            }}
          >
            Import data
          </NuvoImporter>
          <div className="white-box">
            {Object.keys(result).length !== 0 && (
              <pre>
                {typeof result === "string"
                  ? result
                  : JSON.stringify(result, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

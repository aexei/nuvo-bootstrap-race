import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center"
      }}
    >
      <div>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Home Page
        </p>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => {
            navigate("/nuvo");
          }}
        >
          nuvo
        </p>
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => {
            navigate("/about-us");
          }}
        >
          About Us
        </p>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router";

export default function AboutUsPage() {
  const navigate = useNavigate();
  return (
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
  );
}

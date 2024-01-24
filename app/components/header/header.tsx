
import "./headerStyles.css"
import Link from "next/link";
const TheHeader = () => {
  return (
    <div 
    className="navigation"
    >
      <Link className="navItem" style={{textDecoration: "none", color: "#fff"}} href="/">Home</Link>
      <Link className="navItem" style={{textDecoration: "none", color: "#fff"}} href="/resumes">Resumes</Link>
      <Link className="navItem" style={{textDecoration: "none", color: "#fff"}} href="/offers">Job offers</Link>
      <Link  className="navItem" style={{textDecoration: "none", color: "#fff"}}href="/about">About</Link>
      <Link  className="navItem" style={{textDecoration: "none", color: "#fff"}}href="/profile">Profile</Link>
    </div>
  );
};

export { TheHeader };

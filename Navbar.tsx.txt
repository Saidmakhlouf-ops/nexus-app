import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: 20, color: "white" }}>Trainer App</Link>
      <Link to="/marketplace" style={{ marginRight: 20, color: "white" }}>Marketplace</Link>
      <Link to="/credits" style={{ marginRight: 20, color: "white" }}>Credits</Link>
      <Link to="/team" style={{ marginRight: 20, color: "white" }}>Team</Link>
      <Link to="/enterprise" style={{ marginRight: 20, color: "white" }}>Enterprise</Link>
      <Link to="/creator-tools" style={{ marginRight: 20, color: "white" }}>Creator Tools</Link>
      <Link to="/creator-economics" style={{ marginRight: 20, color: "white" }}>Economics</Link>
      <Link to="/bionexus" style={{ marginRight: 20, color: "white" }}>BioNexus</Link>
      <Link to="/gym-partner" style={{ marginRight: 20, color: "white" }}>Gym Partner</Link>
    </nav>
  )
}

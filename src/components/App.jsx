import Table from "./Table";
import profile from "/src/img/user.png";
import logo from "/src/img/Pathology.png";
const username = "username";
const userid = "userid";

export default function App() {
  return (
    <div className="App">
      <p align="right">
        <button>Back</button>
      </p>
      <div>
        <img className="logo" src={logo} alt="Pathology logo" />
        <figure>
          {" "}
          <img className="profilePic" src={profile} alt="profile_pic" />
          <figcaption> {username}</figcaption>
          <figcaption> {userid} </figcaption>
        </figure>
      </div>
      <Table />
    </div>
  );
}

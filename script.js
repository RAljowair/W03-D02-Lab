const root = document.getElementById("root");

let cv = (
  <>
    <img
      src="https://media.licdn.com/dms/image/C4E03AQElX4SDu4HeAA/profile-displayphoto-shrink_400_400/0/1643659798826?e=1680739200&v=beta&t=1S2TZLwXZc6lKIXASxkhgKYUkv8hNWbojdh1YEQi6OM"
      alt=""
    />
    <h1>Resume</h1>
    <div className="perosnal-info">
      <h3>Personal Info</h3>
      <p>Rayan Zeyd Aljowair</p>
      <p>Riyadh</p>
      <p>rayanaljwoair@gmail.com</p>
      <p>+966532996605</p>
    </div>
    <div className="education">
      <h3>Education and courses</h3>
      <p>Computer Science Bachelor</p>
      <p>Nanoodegree User Experince</p>
      <p>Nanoodegree intro to programming</p>
    </div>
    <div className="skills">
      <table>
        <tr>
          <td>
            <b>Skills</b>
          </td>
          <td>
            <b>Skill Level</b>
          </td>
        </tr>
        <tr>
          <td>UX Design</td>
          <td>skillfull</td>
        </tr>
        <tr>
          <td>Figma</td>
          <td>intermediate</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>intermediate</td>
        </tr>
      </table>
    </div>
  </>
);

ReactDOM.render(cv, root);

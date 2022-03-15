import React from "react";
import rows from "/src/rows";

import Entry from "./Entry";

function createRow(row) {
  return (
    <Entry
      key={row.UniqueID}
      UniqueID={row.UniqueID}
      Date={row.Date}
      DoctorName={row.DoctorName}
      Prescribed_Pathology={row.Prescribed_Pathology}
      Acknowledgement={row.Acknowledgement}
    />
  );
}

export default function Table() {
  return (
    <div>
      <table>
        <tr className="th1">
          <th colSpan="5"> Patient Record History </th>
        </tr>
        <tr>
          <th> Unique ID</th>
          <th> Date</th>
          <th> Doctor Name</th>
          <th> Prescribed Pathology</th>
          <th> Acknowledgement</th>
        </tr>

        {rows.map(createRow)}
        {/*<tr> <td>{rows[0].Date}</td>
      <td>{rows[0].DoctorName}</td>
      <td> {rows[0].Prescribed_X_Rays}</td>
      <td><input onClick="" type="checkbox" id="ack1" / ><label for ="ack1">{rows[0].Acknowledgement}</label></td>
  </tr> */}
      </table>
    </div>
  );
}

import React, { useState } from "react";

export default function Entry(row) {
  const [checked, toggleChecked] = useState(row.Acknowledgement);

  function confirm() {
    if (!checked) {
      if (window.confirm("Are you sure you want to change it?")) {
        toggleChecked(!checked);
      }
    } else {
      alert("you can't change it.");
    }
  }
  return (
    <tr>
      <td>{row.UniqueID}</td>
      <td>{row.Date}</td>
      <td>{row.DoctorName}</td>
      <td> {row.Prescribed_Pathology.toString()}</td>
      <td>
        <input onClick={confirm} type="checkbox" checked={checked} />
        <button onClick={confirm}>tests taken</button>
      </td>
    </tr>
  );
}

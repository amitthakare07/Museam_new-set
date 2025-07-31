import React from 'react';
import './Group.css';

const Group = () => {
  return (
    <div className="page-container">

      <div className="info-card">
        <h2 className="main-heading">GROUP RESERVATIONS AND INFORMATION<hr/></h2><br/>
        <h3 className="sub-heading">EVERYTHING YOU NEED TO KNOW BEFORE VISITING THE MUSEUM AS A GROUP</h3>
        
        <ul className="question-list">
          <li>1. What does the ‘right to speak’ mean?</li>
          <li>Ans: It allows guided groups to speak and explain within exhibition areas without disturbing other visitors.</li><br/>
          <li>2. What can I do/is expected of me as a group leader?</li>
          <li>Ans: Ensure your group follows museum rules, stays together, and respects the scheduled timings.</li><br/>
          <li>3. How many people can visit per group (pupils and leaders included)?</li>
          <li>Ans: A standard group can have up to 25 members including leaders; larger groups may need to split.</li><br/>
          <li>4. Can our group take a break during the visit or have lunch at the museum?</li>
          <li>Ans: Breaks are allowed in designated areas, and some museum cafés are available for group lunches.</li><br/>
        </ul>
      </div>
    </div>
  );
};

export default Group;
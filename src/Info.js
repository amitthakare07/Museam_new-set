import React from 'react';
import './Info.css';  // CSS file for styling

const Info = () => {
  return (
    <div className="info-container">
      <div className="breadcrumb"></div>

      

      <div className="content-box">
         <h2 style={{color:"blue"}}>GENERAL INFORMATION<hr/></h2>
        <h3><strong>TICKETS AND PRICES</strong></h3>
        <ul>
          <li>1. Is the reservation mandatory? Can I buy tickets at the ticket offices on the same day?</li>
          <li>Ans:  Reservation is recommended to avoid queues, but same-day tickets are available at the museum counters.</li><br/>
          <li>2. Can I come at a different time than the booked one?</li>
          <li>Ans:  It’s advised to come at the booked time slot, but small delays are generally tolerated.</li><br/>
          <li>3. Can I visit the museum for free? Do I have to book tickets?</li>
          <li>Ans:  Entry is free for EU residents under 26 and on special days; advance booking is still required.</li><br/>
        </ul>
        
         <h3><strong>HOURS AND ENTRANCES</strong></h3>
         <ul>
          <li>1. What are the museum's opening days?</li>
          <li>Ans:The museum is open every day except Tuesdays and certain public holidays.</li><br/>
          <li>2. What are the museum's opening hours?</li>
          <li>Ans:Typical hours are from 9:00 AM to 6:00 PM, with extended hours on select days.</li><br/>
          <li>3. How to get to the museum?</li>
          <li>Ans:You can reach the museum via metro, bus, taxi, or by walking from nearby stations.</li><br/>
          <li>4. Can I buy fast-track tickets?</li>
          <li>Ans:Yes, fast-track tickets are available online to skip long entry lines.</li><br/>
          
        </ul>
       
        <h3><strong>VISITOR AMENITIES AND RULES</strong></h3>
         <ul>
          <li>1. Does the museum offer a cloakroom? And what do I have to leave there?</li>
          <li>Ans: Yes, cloakrooms are available for coats, large bags, umbrellas, and other bulky items.</li><br/>
          <li>2. Can I bring a suitcase to the museum?</li>
          <li>Ans: Suitcases and large luggage are not allowed inside; use nearby lockers or storage services.</li><br/>
          <li>3. Are prams allowed in the museum?</li>
          <li>Ans:Yes, prams are allowed, but large strollers might need to be checked in the cloakroom.</li><br/>
          <li>4. Are there facilities to visit the museum as a family? Is there a baby area to breastfeed or change my child?</li>
          <li>Ans:Family-friendly facilities like changing tables and breastfeeding areas are available near restrooms.</li><br/>
           <li>5. Do you offer WiFi?</li>
          <li>Ans: Family-friendly facilities like changing tables and breastfeeding areas are available near restrooms.</li><br/>
           <li>6. Are there toilets in the museum?</li>
          <li>Ans: Yes, toilets are located on every floor and near the main entrance areas.</li><br/>
         <br/>
        </ul>
      </div>
    </div>
  );
};

export default Info;
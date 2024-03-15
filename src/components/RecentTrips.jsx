import React from "react";
import TripCard from "./TripCards.jsx";
import "./RecentTripsStyles.css";
import image1 from "../assets/5.jpg";
import image2 from "../assets/14.jpg";
import image3 from "../assets/12.jpg";
import image4 from "../assets/6.jpg";
import image5 from "../assets/24.jpg";
import image6 from "../assets/25.jpg";
function RecentTrips(props){
    return <div className={props.cName}> 
        <div className="text-component">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations</p>
        </div>
        <div className="cards-grid">
            <TripCard country="Italy"
            image={image1}
            description="Italy, a country rich in history and culture, boasts iconic landmarks like the Colosseum and the Duomo. Its cuisine, including pasta and pizza, is celebrated worldwide, and its diverse landscapes range from the Alps to the Amalfi Coast.">
            </TripCard>
            <TripCard image={image2} country="Jordan" 
            description="Jordan, a land of ancient wonders and natural beauty, captivates visitors with its iconic sites like Petra and the Dead Sea. Rich in history, it offers a glimpse into the past with Roman ruins and desert castles.">
            </TripCard>
            <TripCard image={image3} country="France" 
            description="France, known for its exquisite cuisine, iconic landmarks like the Eiffel Tower and Louvre Museum, and romantic ambiance, is a cultural powerhouse in Europe. From the picturesque vineyards of Bordeaux to the sun-kissed beaches of the French Riviera.">
            </TripCard>
            <TripCard image={image4} country="Greece" 
            description="Greece, birthplace of democracy and Western civilization, beckons with its ancient wonders such as the Acropolis and Delphi. With its stunning islands like Santorini and Mykonos, crystal-clear waters, and whitewashed villages.">
            </TripCard>
            <TripCard image={image5} country="Iceland" 
            description="
Iceland, a land of fire and ice, mesmerizes with its dramatic landscapes of glaciers, volcanoes, and geothermal wonders like the Blue Lagoon. From the cascading waterfalls of Gullfoss to the dancing Northern Lights, it offers a unique natural spectacle.">
            </TripCard>
            <TripCard image={image6} country="England" 
            description="
England, steeped in history and tradition, boasts iconic landmarks like Big Ben, Buckingham Palace, and Stonehenge. From the vibrant streets of London to the picturesque countryside of the Cotswolds, England offers a rich tapestry of cultural experiences.">
            </TripCard>

         
         </div>
    </div>
}
export default RecentTrips;
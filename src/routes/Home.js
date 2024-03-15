import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image1 from "../assets/6.jpg";
import image2 from "../assets/15.jpg";
import image3 from "../assets/13.jpg";
import image4 from "../assets/11.jpg";
import image5 from "../assets/16.jpg";
import image6 from "../assets/3.jpg";
import image7 from "../assets/17.jpg";
import image8 from "../assets/18.jpg";
import image9 from "../assets/20.jpg";
import image10 from "../assets/6.jpg";
import image11 from "../assets/21.jpg";
import image12 from "../assets/22.jpg";
import image13 from "../assets/23.jpg";

import Destination from "../components/Destination.jsx";
import RecentTrips from "../components/RecentTrips.jsx";
import Footer from "../components/Footer.jsx";
function Home(){
    return <div>
       <Navbar></Navbar>
       <Hero mainText="Your Journey Begins From Here" 
       subText="Choose your favourite destination" buttonText="Travel Plan" image={image1}></Hero>
       <Destination mainTextHOne="Places To Visit" mainTextP="Where would you like to go ?" 
       city="Paris , France"  
       cityDescritpion="In Paris, every moment is a masterpiece waiting to be experienced. Whether you're drawn to its rich history, iconic landmarks, or culinary delights, the City of Lights offers something for every traveler to discover and cherish. So pack your bags, immerse yourself in the timeless charm of Paris, and let the magic of this enchanting city captivate your heart and soul."
       image1={image2} image2={image3} cName="destination1" flexCName="destination-item"></Destination>
        <Destination
       city="Stockholm , Switzerland"  
       cityDescritpion="Stockholm epitomizes the essence of Scandinavian charm, where ancient traditions harmonize with modern sophistication. Whether you're wandering through the historic streets of Gamla Stan, immersing yourself in cultural treasures, or embarking on an archipelago adventure, every moment in this captivating city is sure to leave an indelible mark on your soul."
       image1={image4} image2={image5} cName="destination2" flexCName="destination-item-reversed"></Destination>
        <Destination 
       city="Giza,Egypt"  
       cityDescritpion="Egypt is a land of timeless wonders, where the echoes of ancient civilizations reverberate through the ages. Whether you're exploring the iconic monuments of Giza, cruising the storied waters of the Nile, or immersing yourself in the vibrant culture of Cairo's bustling bazaars, every moment in this enchanting land is a journey through time and history. So, pack your bags and embark on a voyage of discovery to Egypt, where every step unveils a new chapter in the epic saga of humanity's past and present."
       image1={image6} image2={image7} cName="destination3" flexCName="destination-item"></Destination>
        <Destination
       city="Rome , Italy"  
       cityDescritpion="Rome is more than just a city; it is a timeless testament to the ingenuity, creativity, and resilience of humanity. Whether you're exploring its ancient ruins, marveling at its artistic treasures, or savoring its culinary delights, every moment in the Eternal City is an opportunity to immerse yourself in the rich tapestry of Italian culture and history. "
       image1={image8} image2={image9} cName="destination4" flexCName="destination-item-reversed"></Destination>
        <Destination 
       city="Santorini , Greece"  
       cityDescritpion="Santorini is a destination unlike any other, where natural wonders, ancient history, and timeless beauty converge to create a truly unforgettable experience. Whether you're gazing out over the majestic caldera, exploring ancient ruins, or savoring the flavors of Greek cuisine, every moment spent on this enchanting island is filled with wonder and discovery"
       image1={image11} image2={image10} cName="destination5" flexCName="destination-item"></Destination>
        <Destination
       city="Maldives"  
       cityDescritpion="The Maldives is a destination that transcends imagination, where every moment is a celebration of nature's beauty and boundless wonders. Whether you're lounging on a secluded beach, diving into the depths of the ocean, or savoring a romantic sunset with your loved one, the Maldives offers a truly transformative experience that will stay with you long after you've left its shores. "
       image1={image12} image2={image13} cName="destination6" flexCName="destination-item-reversed"></Destination>
       <RecentTrips cName="recent-trips"></RecentTrips>
       <Footer cName="footer"></Footer>
    </div>;

}
export default Home;
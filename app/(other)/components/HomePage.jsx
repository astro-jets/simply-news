import Ads from "./Ads";
import AnnouncementBanner from "./AnnoucementBanner";
import ContactForm from "./ContactForm";
import Slider from "./Slider";
import Stories from "./Stories";
import Videos from "./Videos";

const HomePage = async ({latestStories}) => {
    return ( 
          <>
        <div className="flex flex-col md:space-x-2 md:flex-row h-full m-0">
          <div className="md:w-3/4 ">
            <Slider/>
          </div>
          <div className="md:w-2/4 h-[70vh] hidden md:flex">
            <Ads/>
          </div>
        </div>
        {latestStories?<Stories stories={latestStories}/>:null}
        <AnnouncementBanner/>
        <Videos/>
        <ContactForm/>
      </>
        
     );
}
 
export default HomePage;
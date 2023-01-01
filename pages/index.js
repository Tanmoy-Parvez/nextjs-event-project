import EventList from "../components/EventList/EventList";
import { getFeaturedEvents } from "../helpers/api.util";


const HomePage = (props) => {


  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export default HomePage;


// help to render this page at build time and also seo friendly;
export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800,
  }
}
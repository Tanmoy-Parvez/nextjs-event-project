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

export const getStaticProps = async () => {

  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    }
  }
}
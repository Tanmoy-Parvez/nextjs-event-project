import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetail/EventDetail";
import { getEventById, getFeaturedEvents } from "../../helpers/api.util";


const EventDetailPage = ({ selectedEvent }) => {

   
    return (
        <div>
            <EventDetail event={selectedEvent}></EventDetail> 
        </div>
    );
};

export default EventDetailPage;


// get specific event by its id
export const getStaticProps = async (context) => {
    const eventsId = context.params.eventsId;
    const event = await getEventById(eventsId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }

}


// get all the paths that will be pre rendered
export const getStaticPaths = async () => {

    const allEvents = await getFeaturedEvents()
    const paths = allEvents.map(event => ({ params: { eventsId: event.id } }))

    return {
        paths: paths,
        fallback: true
    }
}
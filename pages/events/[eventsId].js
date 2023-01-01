import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetail/EventDetail";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
    const router = useRouter();
    const eventsId = router.query.eventsId;
    const event = getEventById(eventsId)
   
    return (
        <div>
           <EventDetail event={event}></EventDetail> 
        </div>
    );
};

export default EventDetailPage;
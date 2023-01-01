import { useRouter } from "next/router";
import EventList from "../../components/EventList/EventList";
import EventSearchBox from "../../components/EventSearchBox/EventSearchBox";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {

    const allEvents = getAllEvents()
    const router = useRouter();


    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        
        router.push(fullPath);
    }

    return (
        <div>
            <EventSearchBox onSearch={findEventsHandler} />
            <EventList items={allEvents}></EventList>
        </div>
    );
};

export default AllEventsPage;
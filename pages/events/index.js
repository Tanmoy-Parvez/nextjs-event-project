import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/EventList/EventList";
import EventSearchBox from "../../components/EventSearchBox/EventSearchBox";
import { getAllEvents } from "../../helpers/api.util";


const AllEventsPage = (props) => {

    const { events } = props;


    const router = useRouter();


    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        
        router.push(fullPath);
    }

    return (
        <div>
            <Head>
                <meta name="next event" description="This page is about next js events" />
                <title>
                    Next ALL Events
                </title>
            </Head>
            <EventSearchBox onSearch={findEventsHandler} />
            <EventList items={events}></EventList>
        </div>
    );
};

export default AllEventsPage;


export const getStaticProps = async () => {

    const allEvents = await getAllEvents();

    return {
        props: {
            events: allEvents
        },
        revalidate: 30
    }
}
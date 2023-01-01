import useSWR from 'swr'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EventList from "../../components/EventList/EventList";
import ResultsTitle from "../../components/EventSearchBox/ResultsTitle";
import { getFilteredEvents } from "../../helpers/api.util";


const FilteredEventPage = (props) => {
    const [loadedEvents, setLoadedEvents] = useState([]);

    const router = useRouter();
    const FilterDate = router.query.slug;

    // const { data, error } = useSWR('https://nextjs-event-project-cfeae-default-rtdb.firebaseio.com/events.json'
    // )



    useEffect(() => {

        fetch('https://nextjs-event-project-cfeae-default-rtdb.firebaseio.com/events.json')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const events = [];

                    for (const key in data) {
                        events.push({
                            id: key,
                            ...data[key],
                        })
                    }
                    setLoadedEvents(events)
                }
            })



    }, [])



    if (!FilterDate) return <p>Loading......</p>

    const filteredYear = FilterDate[0];
    const filteredMonth = FilterDate[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const filteredEvents = loadedEvents.filter(event => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === numYear &&
            eventDate.getMonth() === numMonth - 1
        )
    });


    // const date = new Date(props.date.year, props.date.month - 1);
    const date = new Date(numYear, numMonth - 1);
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    );
};

export default FilteredEventPage;


// export const getServerSideProps = async (context) => {
//     const { params } = context;

//     const FilterDate = params.slug;

//     const filteredYear = FilterDate[0];
//     const filteredMonth = FilterDate[1];

//     const numYear = +filteredYear;
//     const numMonth = +filteredMonth;

//     const filteredEvents = await getFilteredEvents({
//         year: numYear,
//         month: numMonth,
//     });

//     return {
//         props: {
//             events: filteredEvents,
//             date: {
//                 year: numYear,
//                 month: numMonth
//             }
//         }
//     }
// }
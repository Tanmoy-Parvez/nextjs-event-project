import { useRouter } from "next/router";
import EventList from "../../components/EventList/EventList";
import ResultsTitle from "../../components/EventSearchBox/ResultsTitle";
import { getFilteredEvents } from "../../helpers/api.util";


const FilteredEventPage = (props) => {
    const router = useRouter();
    // const FilterDate = router.query.slug;

    // if (!FilterDate) return <p>Loading......</p>

    // const filteredYear = FilterDate[0];
    // const filteredMonth = FilterDate[1];

    // const numYear = +filteredYear;
    // const numMonth = +filteredMonth;


    // const filteredEvents = getFilteredEvents({
    //     year: numYear,
    //     month: numMonth,
    // });

    const date = new Date(props.date.year, props.date.month - 1);
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={props.events} />
        </div>
    );
};

export default FilteredEventPage;


export const getServerSideProps = async (context) => {
    const { params } = context;

    const FilterDate = params.slug;

    const filteredYear = FilterDate[0];
    const filteredMonth = FilterDate[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;


    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    });



    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }
}
import { useRouter } from "next/router";
import EventList from "../../components/EventList/EventList";
import ResultsTitle from "../../components/EventSearchBox/ResultsTitle";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventPage = () => {
    const router = useRouter();
    const FilterDate = router.query.slug;

    if (!FilterDate) return <p>Loading......</p>

    const filteredYear = FilterDate[0];
    const filteredMonth = FilterDate[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;


    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    const date = new Date(numYear, numMonth - 1);
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    );
};

export default FilteredEventPage;
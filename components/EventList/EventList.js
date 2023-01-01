import Button from '../UI/Button/Button';
import classes from './EventList.module.css';

const EventList = ({ items }) => {

    return (
        <ul className={classes.list}>
            {
                items.map(event => <li key={event.id} className={classes.item}>
                    <img src={event?.image} alt={event?.title} />
                    <div className={classes.content}>
                        <div className={classes.summary}>
                            <h2>{event?.title}</h2>
                            <div className={classes.date}>
                                <time>{
                                    new Date(event?.date).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })

                                }</time>
                            </div>
                            <div className={classes.address}>
                                <address>
                                    {event?.location.replace(', ', '\n')}
                                </address>
                            </div>
                        </div>
                        <div className={classes.actions}>
                            <Button link={`/events/${event?.id}`}>
                                Explore Event
                            </Button>
                        </div>
                    </div>

                </li>)
            }
        </ul>
    );
};

export default EventList;
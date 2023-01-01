import styles from './EventDetail.module.css';


const EventDetail = ({event}) => {

    if (!event) return <p>loading....</p>
    

    const { title, date, location, image, imageAlt, description } = event;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div>
            <section className={styles.summary}>
                <h1>{title}</h1>
            </section>
            <section className={styles.logistics}>
                <div className={styles.image}>
                    <img src={`${image}`} alt={imageAlt} />
                </div>
                <ul className={styles.list}>
                    <time>{humanReadableDate}</time>
                    <address>
                        {location.replace(', ', '\n')}
                    </address>
                </ul>
            </section>

            <section className={styles.content}>
                <p>{description}</p>
            </section>
            
        </div>
    );
};

export default EventDetail;
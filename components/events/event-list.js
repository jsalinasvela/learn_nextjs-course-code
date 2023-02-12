import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;

  if (!items.length) return <h1 className='center'>No events</h1>;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;

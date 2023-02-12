import { getAllEvents, getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const { events } = props;

  if (!events) return <p>No events</p>;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;

import Image from 'next/image';
import Link from 'next/link';

const City_events = ({data, id}) => {
  return (
    <>
            {data.map((ev) => {
                return (
                    // we use link here instead of a to make the page not refreshes and goes to the location but just client rendering like React
                    <Link href={`/events/${id}/${ev.id}`} key={ev.id} passHref>
                        <h2> {ev.title}</h2>
                        <Image
                            src={`${ev.image}`}
                            width={250}
                            height={250}
                            alt="none"
                        />
                    </Link>
                );
            })}
</>
  )
}

export default City_events
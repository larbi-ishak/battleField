import Image from "next/image";
import Link from "next/link";
const Events_page = ({ data }) => {
    return (
        <>
            {data.map((cat) => {
                return (
                    <Link
                        // legacyBehavior to let us use anchor tag inside the link component
                        legacyBehavior
                        href={`/events/${cat.id}`}
                        key={cat.id}
                        passHref
                    >
                        <a>
                            <h2> {cat.title}</h2>
                            <Image
                                alt="nothing"
                                src={`${cat.imageSrc}`}
                                width={"250"}
                                height={"250"}
                            />
                            <p>{cat.description}</p>
                        </a>
                    </Link>
                );
            })}
        </>
    );
};

export default Events_page;

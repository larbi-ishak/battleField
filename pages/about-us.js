const AboutUs = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                sequi vero amet.
            </p>
        </div>
    );
};

export default AboutUs;
export async function getServerSideProps() {
    return {
        props: {
            title: "About Us Page ",
        },
    };
}

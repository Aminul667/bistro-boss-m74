
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto my-8">
            <p className="text-yellow-600">--- {heading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 mb-2">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;
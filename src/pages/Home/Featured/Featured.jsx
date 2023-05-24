import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p>Where I can get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos animi
            rem ipsam vel. Quos, libero? Incidunt, maiores iusto ut asperiores,
            doloribus, ex quam nisi minima molestiae alias quaerat commodi iste
            odio fugit ea itaque doloremque nulla nesciunt ullam facere. Labore
            eaque sint, vero fuga perspiciatis porro cupiditate libero ab magni!
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

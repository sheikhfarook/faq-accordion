import frame from "../assets/Frame.svg";
import img from "../assets/background-pattern-mobile.svg";
const BackGround = () => {
  return (
    <div>
      <img className="w-[100%] max-md:hidden " src={frame} alt="" />

      <img className="w-[100%]  md:hidden " src={img} alt="" />
    </div>
  );
};

export default BackGround;

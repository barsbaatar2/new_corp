import { useRouter } from "next/dist/client/router";

interface ServiceProps {}

const ServiceComponent = (props: ServiceProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex flex-col justify-center bg-bar bg-cover bg-center drop-shadow-xl shadow-xl py-52">
      {/* <img src={"/static/images/Service/" + "img_1.jpg"} alt="" className="" /> */}
      <div className="flex flex-col">
        <div className="text-[#B58E3E] text-[30px] text-center">BAR & </div>
        <div className="text-white opacity-60 text-[30px] text-center">RESTAURANTS </div>
      </div>
    </div>
  );
};

export default ServiceComponent;

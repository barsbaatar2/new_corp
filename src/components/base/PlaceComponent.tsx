import { useRouter } from "next/dist/client/router";

interface IconProps {
  name: string;
  phone: string;
  image: string;
  href: string;
}

const PlaceComponent = (props: IconProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { name, phone, image, href } = props;
  const router = useRouter();
  return (
    <div className="relative flex flex-col w-full h-full group" onClick={() => {router.push(href)}}>
      {/* scale-100 hover:scale-105 hover:z-40 z-30 */}
      <img
        src={"/static/images/place/" + image}
        className="w-full h-full object-cover bg-gray-900"
      />
      <div className="absolute bottom-[142px] bg-gray-900 w-full h-full bg-opacity-60 group-hover:bg-opacity-0 ease-in-out duration-300"></div>
      <div className="absolute bottom-[68px] bg-gray-900 w-full bg-opacity-60">
        <div className="w-full h-[74px] flex flex-row content-center items-center px-5 cursor-pointer justify-between">
          <div className="text-white font-light ml-3 text-[18px] text-left">{name}</div>
          <img
            src={"/static/icons/" + "ic_open.png"}
            className="w-[25px] h-[25px] object-cover"
          />
        </div>
      </div>
      <a
        className="w-full h-[74px] flex flex-row content-center items-center pl-5 cursor-pointer"
        href={"tel:" + phone}
      >
        <img
          src={"/static/icons/" + "ic_phone.png"}
          className="w-[25px] h-[25px] object-cover"
        />
        <div className="text-white font-roboto ml-3 text-[18px]">{phone}</div>
      </a>
    </div>
  );
};

export default PlaceComponent;

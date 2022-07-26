import { useRouter } from "next/dist/client/router";

interface RoomProps {

}

const RoomComponent = (props: RoomProps & React.HTMLAttributes<HTMLDivElement>) => {
    return(
        <div className="flex flex-col justify-start bg-white drop-shadow-xl shadow-xl">
                <img src={"/static/images/room/" + "img_1.jpg"} alt="" className="" />
                <div className="flex flex-col p-5">
                  <div className="text-[#B58E3E] text-[25px] text-left">LUX ROOM</div>
                  <div className="text-black opacity-60 text-[15px] text-left">
                    Single room
                  </div>
                  <div className="grid grid-cols-2">
                    <div></div>
                    <div>
                      <div className="font-roboto text-black text-[16px] text-left">
                        {" "}
                        500,000₮/{" "}
                        <span className="text-[12px] opacity-60">per night</span>
                      </div>
                      <div className="font-roboto text-black text-[12px] opacity-60 text-left">
                        03 зочин 25м2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
}

export default RoomComponent;
import { useRouter } from "next/dist/client/router";

interface HistoryProps {

}

const HistoryComponent = (props: HistoryProps & React.HTMLAttributes<HTMLDivElement>) => {
    return(
      <div className="flex flex-col">
      <div className="relative flex flex-col justify-center">
        <div className="text-[100px] text-white font-bold text-left">
          History
        </div>
        <div className="absolute mt-5 ml-10 text-black font-[25px] text-left font-bold">
          CORPORATE HOTEL - <span className="text-gold">2008</span>
        </div>
      </div>
      <div className="text-left text-black opacity-60">
        Vivamus vitae ex a magna cursus pretium. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia. Curae posuere turpis
        facilisis, fringilla odio. Nunc eget purus at dolor venenatis cursus et
        non arcu. Praesent rutrum condimentum risus. Condimentum nibh, ut
        fermentum massa justo sit amet risus. mentum massa Fusce dapibus, tellus
        ac cursus commodo, tortor mauris condimentum nibh, ut fer condimentum
        nibh, ut fermentum massa justo sit amet risus. mentum massa justo sit
        amet risus.
      </div>
      <div className="flex flex-row justify-between mt-5 content-center items-center">
      <img src={"/static/images/" + "sign.png"} alt="" className="w-[140px]" />
      <div>Chief Executive Officer</div>
      </div>
    </div>
    );
}

export default HistoryComponent;
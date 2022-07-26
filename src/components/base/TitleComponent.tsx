import { useRouter } from "next/dist/client/router";

interface TitleProps {

}

const TitleComponent = (props: TitleProps & React.HTMLAttributes<HTMLDivElement>) => {
    return(
        <div className="flex flex-col w-[fit-content] justify-start">
        <div className="text-brand text-[30px] uppercase text-left mt-10">
          ROOMS<span className="text-black"> ACCOMMODATION</span>
        </div>
        <div className="text-black opacity-60 text-[18px] mb-10">
          Designed as a privileged almost private place where you'll feel right at
          home
        </div>
      </div>
    );
}

export default TitleComponent;
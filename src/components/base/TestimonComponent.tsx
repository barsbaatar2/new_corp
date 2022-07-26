import { useRouter } from "next/dist/client/router";

interface TestimonProps {}

const TestimonComponent = (
  props: TestimonProps & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-[25px]">Guest</div>
      <div className="text-white text-[18px] text-left mt-5">
        Gorgeous pool areas, beautiful bar and restaurant, excellent service with
        historic, very well appointed rooms.
      </div>
      <img
        src={"/static/images/" + "stars.png"}
        alt=""
        className="h-[10px] object-contain mt-10"
      />
    </div>
  );
};

export default TestimonComponent;

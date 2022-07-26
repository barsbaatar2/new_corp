import Image from "next/image";

interface IconProps {
    name: string;
    size: string;
}

const Icons = (props: IconProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { name, size } = props;
  return (
    <img
          src={"/static/icons/" + name}
          className='w-[18px] md:w-[25px] h-auto object-cover'
        />
  );
};

export default Icons;

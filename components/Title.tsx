import Image from "next/image";

type TitleProps = {
  children: string;
};

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="flex gap-6">
      <div className="relative h-7 w-7 lg:h-12 lg:w-12">
        <Image
          className="object-contain"
          src="/icon-star.svg"
          alt="star"
          fill
        />
      </div>
      <span className="text-3xl font-bold text-darkPurple lg:text-5xl">
        {children}
      </span>
    </h1>
  );
}

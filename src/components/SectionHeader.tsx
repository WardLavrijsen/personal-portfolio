export const SectionHeader = ({
  title,
  eyebrown,
  description,
}: {
  title: string;
  eyebrown: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-purple-200 bg-clip-text text-transparent text-center">
          {eyebrown}
        </p>
      </div>
      <h2 className=" text-3xl md:text-5xl text-center mt-6">{title}</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

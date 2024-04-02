export const Card = ({ img, name }) => {
  return (
    <div className="relative max-w-[230px] max-h-[230px] overflow-hidden">
      <img src={img} alt="" width={230} height={230} className="rounded-md" />
      <div className="absolute bottom-0 text-center w-full rounded-md bg-accent/80 mx-auto">
        <h2 className="text-xl py-1 rounded text-center font-medium">{name}</h2>
      </div>
    </div>
  );
};

export const Card = ({ img, name }) => {
  return (
    <div className="group relative items-center overflow-hidden sm:max-h-[230px] sm:max-w-[230px]">
      <img src={img} alt="" className="rounded-md" />
      <div className="absolute bottom-0 mx-auto w-full rounded-md bg-accent/80 text-center">
        <h2 className="rounded py-1 text-center text-xl font-medium">{name}</h2>
      </div>
      {/* gradiente del hover */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent to-secondary/80 opacity-0 transition-all duration-700 group-hover:opacity-80"></div>
      <div className="absolute bottom-0 translate-y-full items-center transition-all duration-300 group-hover:-translate-y-14 group-hover:xl:-translate-y-24">
        <div className="flex items-center gap-x-2 rounded-e-md bg-accent p-2 text-[14px] font-medium tracking-[0.2em]">
          {/* part 1 */}
          <div className="pl-6 delay-100">VER</div>

          {/* part 2 */}
          <div className="translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0">
            DETALLE
          </div>
        </div>
      </div>
    </div>
  );
};

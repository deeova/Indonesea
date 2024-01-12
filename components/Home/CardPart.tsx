
interface yachts {
  imgUrl: string;
  title: string;
  cabins: string;
  guests: string;
  crews: string;
  lengths: string;
}
const CardPart = ({imgUrl, title, cabins, guests, crews, lengths}: yachts) => {
  return (
    <div className="flex flex-col mx-5 mb-5 w-350 shadow-xl">
      <img
        src={imgUrl}
        alt={title}
        width={400}
        height={300}
        className="object-cover w-full h-72"
      />
      <div className="flex flex-col gap-5 px-5 py-8 ">
        <h3>{title}</h3>
        <div className="flex flex-row border border-black border-solid p-[10px] gap-[10px] justify-around items-center">
          <span className="text-sm">{`${lengths}M`}</span>
          <span className="text-sm">|</span>
          <span className="text-sm">{cabins} cabins</span>
          <span className="text-sm">|</span>
          <span className="text-sm">{guests} guests</span>
          <span>|</span>
          <span className="text-sm">{crews} crew</span>
        </div>
      </div>
    </div>
  );
};

export default CardPart;

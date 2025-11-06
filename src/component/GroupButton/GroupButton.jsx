const GroupButton = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      {/* Active Button indicator  */}
      <div>
        <h3 className="font-bold text-[#131313] text-[1.68rem]">
          Available Players
        </h3>
      </div>

      {/* join Buttons  */}
      <div className="join">
        {/* available button  */}
        <button className="px-[1.8rem] py-[0.9rem] border border-[#1313131A] bg-[#E7FE29] rounded-l-xl join-item font-bold text-[0.96rem] text-[#131313] cursor-pointer">
          Available
        </button>

        {/* Select button  */}
        <button className="px-[1.8rem] py-[0.9rem] border border-[#1313131A] rounded-r-xl join-item text-[0.96rem] text-[#1313139C] cursor-pointer">
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default GroupButton;

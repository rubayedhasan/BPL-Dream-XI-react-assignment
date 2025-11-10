import FooterMegaMenu from "../FooterMegaMenu/FooterMegaMenu";
import Newsletter from "../Newsletter/Newsletter";

const FooterContainer = () => {
  return (
    <footer className="bg-[#131313]">
      <div className="w-full md:w-11/12 mx-auto mt-[19.6rem] md:mt-[22.68rem] px-5 md:px-0 relative ">
        {/* newsletter section component: Newsletter  */}
        <Newsletter></Newsletter>

        {/* footer section component: Footer  */}
        <FooterMegaMenu></FooterMegaMenu>
      </div>

      {/* footer copy-right text  */}
      <div className="py-[1.92rem] border border-[#ffffff26] mt-[4.32rem]">
        <p className="text-[0.96rem] text-[#ffffff99] text-center">
          <small>@2025 Dream-11 All Rights Reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default FooterContainer;

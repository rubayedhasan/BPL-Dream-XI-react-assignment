import FooterMegaMenu from "../FooterMegaMenu/FooterMegaMenu";
import Newsletter from "../Newsletter/Newsletter";

const FooterContainer = () => {
  return (
    <footer className="mt-[19.6rem] md:mt-[22.68rem]  bg-[#131313]">
      <div className="w-full md:w-11/12 mx-auto px-5 md:px-0 relative ">
        {/* newsletter section component: Newsletter  */}
        <Newsletter></Newsletter>

        {/* footer section component: Footer  */}
        <FooterMegaMenu></FooterMegaMenu>
      </div>
    </footer>
  );
};

export default FooterContainer;

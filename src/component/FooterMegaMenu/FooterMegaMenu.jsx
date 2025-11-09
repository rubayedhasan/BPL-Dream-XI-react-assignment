import FooterLogo from "../../assets/images/logo-footer.png";

const FooterMegaMenu = () => {
  return (
    <div className="pt-[18.4rem] text-white">
      {/* footer logo  */}
      <div className="flex justify-center">
        <figure className="flex justify-center w-[8.52rem] h-[8.4rem]">
          <img
            src={FooterLogo}
            alt=""
            className="w-full h-full object-contain"
          />
        </figure>
      </div>

      {/* footer mega menu  */}
      <div className="mt-[3.84rem]">
        <p>mega menu</p>
      </div>
    </div>
  );
};

export default FooterMegaMenu;

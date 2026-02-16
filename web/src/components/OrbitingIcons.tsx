import Logo_shield from "./Logo_shield";

function OrbitingIcons() {
  return (
    <>
      <div className="circle__logo">
        <Logo_shield />
      </div>
      <div className="circle__container circle__container--1">
        <i className="circle circle--case bxf bx-briefcase" />
      </div>
      <div className="circle__container circle__container--2">
        <i className="circle circle--shield bxf bx-check-shield" />
      </div>
      <div className="circle__container circle__container--3">
        <i className="circle circle--lock bxf bx-lock-keyhole" />
      </div>
    </>
  );
}

export default OrbitingIcons;

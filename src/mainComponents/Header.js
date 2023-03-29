import styleHeader from "./Header.module.css";

const Header = () => {
  return (
    <div className={styleHeader.header}>
      <div className={styleHeader.title}>
        <h3>Sigma</h3>
        <h3>Development</h3>
      </div>
    </div>
  );
};

export default Header;

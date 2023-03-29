import styleMap from "./Map.module.css";

const Map = () => {
  return (
    <iframe
      title="map"
      className={styleMap.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.7913592203645!2d18.115886815383128!3d44.128925479107885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f27489f40b83f%3A0x133cebab8c465eae!2sAlije%20Izetbegovi%C4%87a%2035%2C%20Kakanj!5e0!3m2!1sbs!2sba!4v1680127102555!5m2!1sbs!2sba"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;

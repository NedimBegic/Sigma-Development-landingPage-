import styleContact from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={styleContact.heading}>
        <h2>Contact&nbsp;</h2>
        <h2>us</h2>
      </div>
      <div className={styleContact.messageAndMap}>
        <div className={styleContact.message}>
          <form>
            <input type="text" name="name" placeholder="Full name" />
            <input type="text" name="email" placeholder="E-mail" />
            <textarea rows="10" cols="20" placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

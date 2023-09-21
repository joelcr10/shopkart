const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="upper-footer">
                <div className="left-text">
                    <span id="heading">Newslleter</span>
                    <br />
                    <div className="sub-heading-container">
                        <span id="sub-heading">Get news about articles and updates</span>
                        <span id="sub-heading"> in your inbox</span>
                    </div>
                </div>
                <div className="right-text">
                    <form action="" className="form">
                        <input type="text" className="text" placeholder="NAME" required/>
                        <input type="email" className="text" placeholder="EMAIL"/>
                        <input type="text" className="text" placeholder="MESSAGE"/>
                        <input type="submit" className="submit" id="submit-btn" value={"SEND"}/>

                    </form>
                </div>
            </div>
            <div className="lower-footer">
                <h1>GET</h1>
                <h1>IN TOUCH</h1>
            </div>
            <div className="copyright">
                <span>Copyright 2022 All Right Reserved By SG</span>
            </div>
        </footer>
     );
}
 
export default Footer;
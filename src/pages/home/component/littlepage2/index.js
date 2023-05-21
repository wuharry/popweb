import "./style.scss";

const LittlePage2 = () => {
  return (
    <>
      <div className="contain">
        <div className="font-sec">
          <h2>Take your event to the next level</h2>
          <p>Elevate your invite with our powerful features</p>
        </div>
        <div className="feature_wrapper">
          <div className="feature">
            <img src="/images/feature_fullscreen.svg" alt="SVG Image" />
            <h3>Beautiful Full-screen Invitations</h3>
            <p>Designed to look good on the web, phones and tablets.</p>
          </div>
          <div  className="feature">
            <img src="/images/feature_customize.svg" alt="SVG Image" />
            <h3>Customize with Photos and Videos</h3>
            <p>
              Upload your own photos and videos or select from our free, pro
              galleries.
            </p>
          </div>
          <div  className="feature">
            <img src="/images/feature_send.svg" alt="SVG Image" />
            <h3>Send Invitations via Email or Text</h3>
            <p>
            Choose your guests and we’ll send the invitation for you.
            </p>
          </div>
          <div  className="feature">
            <img src="/images/feature_rsvp.svg" alt="SVG Image" />
            <h3>Robust RSVP Management Tools</h3>
            <p>See who has responded, added plus-ones and opened invites.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LittlePage2;

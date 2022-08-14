
import ProfileImage from "./ProfileImage";
import TimeStamps from "./TImestamps";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>
     
      <div className="body">
        <div className="top">
          <User userData= {props.tweet.user}/>
          <TimeStamps time={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>
        
      </div>

      <Actions/>
    </div>
  );
}

export default Tweet;

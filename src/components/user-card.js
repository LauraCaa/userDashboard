import "@/assets/styles.css";
import Data from "@/utils/leaderboard.json";

export default function UserCard() {
    return(
        <div className="main-container">
            <div className="users-container">
                {Data.map((user, index) => (
                <div className={`user-container`} style={{backgroundColor: user.backgroundColor}} key={index}>
                    <img src="https://placehold.co/50" alt="user-picture"/>
                    <h4>{user.name}</h4>
                    <span className="earnings-span">{user.earnings}</span>
                    <p>Score<span>{user.score}%</span></p>
                    <div className="range-container">
                        <span className="range-bar" style={{backgroundColor: user.progressColor, width: user.score + "%"}}></span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
};
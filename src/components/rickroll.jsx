import ReactPlayer from "react-player";

const Rickroll = (props) => {
    const embedUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=WrCb_a3ft2JXow56&amp;controls=0&autoplay=1'
    return (
        
            <div className="player-wrapper" >
                <ReactPlayer
                    className="react-player"
                    url={props.url}
                    playing={true}
                    width="560px"
                    height="315px"
                />
            </div>


    )
}

export default Rickroll
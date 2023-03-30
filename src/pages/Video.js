import React from 'react'
import "./video.css"

function Video() {
    return (
        <div className='video'>
            TikTok
            <video 
                className='video__player'
                src='https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c002/o8ZWQGqD0VRfIUOIkBejA2nnQgJAXB7qbt1E3L/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=806&bt=403&cs=0&ds=3&ft=_RwJrBiTq8ZmoL.cCc_vjyBM8AhLrus&mime_type=video_mp4&qs=0&rc=PGQ7OjY8aDc5PDtpNTc7NEBpM3N5bDg6ZjdnaTMzNzczM0A1NWFjNjQ2Ni4xYmJeXjQwYSNkYmtlcjQwaV9gLS1kMTZzcw%3D%3D&btag=80000&expire=1680233841&l=20230330213709AE3C1477ED2E1C684012&ply_type=2&policy=2&signature=65b15bf18818a16420f85fa321268f28&tk=tt_chain_token'
            >

            </video>
        </div>
    )
}

export default Video
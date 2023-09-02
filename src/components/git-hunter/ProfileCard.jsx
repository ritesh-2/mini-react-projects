import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { BiBuildings, BiLink, BiLogoTwitter } from "react-icons/bi"

const GITHUB_URL = "https://github.com"

const ProfileCard = ({ data }) => {
    return (
        <div className="card-container">
            <img className="avatar-img" src={data.avatar_url} />
            <div className="info-container">
                <div className="header-box">
                    <strong className="text-large">{data.name ?? data.login}</strong>
                    <span className="self-end text-medium">Joined {data.created_at.slice(0, 10)}</span>
                    <span ><a className="anchor" target='_blank' href={`${GITHUB_URL}/${data.login}`}>@{data.login}</a></span>
                </div>
                <div className="mid">
                    <li>
                        <span>Repos</span>
                        <strong>{data.public_repos}</strong>
                    </li>
                    <li>
                        <span>Followers</span>
                        <strong>{data.followers}</strong>
                    </li>
                    <li>
                        <span>Following</span>
                        <strong>{data.following}</strong>
                    </li>
                </div>
                <div className="footer">
                    <li className={data && !data.location ? "text-mute" : ""}>
                    <i><CiLocationOn /></i>
                    <span >{data.location ? data.location : "Not Avilable"}</span>
                </li>
                <li className={data && !data.blog ? "text-mute" : ""}>
                    <i> <BiLink /></i>
                    <span  >{data.blog ? data.blog : "Not avilable"} </span>
                </li>
                <li className={data && !data.twitter_username ? "text-mute" : ""} >
                    <i><BiLogoTwitter /></i>
                    <span >{data.twitter_username ? data.twitter_username : "Not avilable"}</span>
                </li>
                <li>
                    <i> <BiBuildings /></i>
                    <span > @github</span>
                </li>
            </div>
        </div>
        </div >
    )
}

export default ProfileCard

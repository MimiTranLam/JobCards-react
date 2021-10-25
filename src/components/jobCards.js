import React from "react"

// let textColor = "";
// const remoteColor = () => {
//     if (document.getElementsByClassName("remote").innerHTML === "Remote: true") {
//         textColor = ' color:"green" '
//     } else if (document.getElementsByClassName("remote").innerHTML === "Remote: false") {
//         textColor = ' color:"red" '
//     }
//     return textColor;
// }

const JobCard = ({data}) => {
    //console.log(data.jobs);
    // console.log(remoteColor());
    // console.log(textColor);

    // const Skills = () => {
    //     console.log(typeof data.skills)
    //     console.log(data.skills)
    //     const singleSkill = data.skills.forEach((x)=>{
    //         return '<div className="singleSkill">{data.skills[x]}</div>'
    //     });
    //     return singleSkill;
    // }

    const dateTime = () => {
    const dateNow = new Date();
    const dateVals = {year: "numeric", month: "long", day: "numeric"}
    const dateFormatted = dateNow.toLocaleDateString("en-US", dateVals)
    let ampm = dateNow.getHours() >= 12 ? 'pm' : 'am';
    const time = dateNow.getHours() + ":" + dateNow.getMinutes() + " " + ampm.toLocaleUpperCase();
    return time + " " + dateFormatted;
    };
    
    return <div className="job-card">
        <div className="title">{data.title}</div>
        <div className="skills-box">
            {/* <Skills/> */}
        </div>
        Remote: <span className="remote">{data.remote ? "true" : "false" }</span>
        <div className="location">Location: {data.city}</div>
        <div className="description">Description: {data.description}</div>
        <div className="date-time">Posted {dateTime()}</div>
    </div>
}

export default JobCard
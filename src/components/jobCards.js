import React from "react"

const JobCard = ({data}) => {
    //console.log(data.jobs);

    const dateTime = () => {
    const dateNow = new Date(data.postedDate);
    const dateVals = {year: "numeric", month: "long", day: "numeric"}
    const dateFormatted = dateNow.toLocaleDateString("en-US", dateVals)
    let ampm = dateNow.getHours() >= 12 ? 'pm' : 'am';
    const time = Math.abs(12 - dateNow.getHours()) + ":" + dateNow.getMinutes() + " " + ampm.toLocaleUpperCase();
    return time + " " + dateFormatted;
    };

    return <div className="job-card">
        <div className="title">{data.title}</div>
        <div className="skills-box">
            {/* <Skills/> */}
        </div>
            Remote: 
            <span className="remoteTF" style={data.remote === true ? {color:"green"} : {color:"red"}}>
                {data.remote ? "TRUE" : "FALSE" }
            </span>
        <div className="location">Location: {data.city}</div>
        <div className="description">Description: {data.description}</div>
        <div className="date-time">Posted {dateTime()}</div>
    </div>
}

export default JobCard
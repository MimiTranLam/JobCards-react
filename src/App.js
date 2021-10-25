import './App.css';
import Navbar from './components/navbar'
import data from "./data.json"
import JobCard from './components/jobCards';

// const RenderRightCard = () => {
//   const company = data.companies.filter(x => {return x.id === data.companyId;});

//   console.log(company({data}));    

    // const Skills = () => {
    //     console.log(typeof data.skills)
    //     console.log(data.skills)
    //     const singleSkill = data.skills.forEach((x)=>{
    //         return '<div className="singleSkill">{data.skills[x]}</div>'
    //     });
    //     return singleSkill;
    // }

//   return (<div className="job-card-expanded">
//     <div className="expanded-title"></div>
//     <div className="companyName">{company.name}</div>
//     <div className="exp-yrs">Minimum experience LVL (in years): {data.yrsEXExpected}</div>
//     <div className="skills"><Skills/></div>
//     <div className="companyName"></div>
//   </div>);
// }


function App() {
  const jobData = data.jobs.slice(0,20);

  //render job only if active = true
  // on the right, job cards display client's interest in the job's description
  // on the left, job cards expanded display job/company's interest in the client's description

  // const company = data.companies.filter(x => {return x.id === data.jobs[0].companyId;});

  // console.log(company);

  let HTML = (<div className="App">
      <Navbar/>
      <section id="sec-jobs">
        <div id="job-cards-left">
          {
            jobData.map((el)=> <JobCard key={el.id}  data={el}/>)
          }
        </div>
        <div id="job-card-right">
          <div className="expanded"></div>
        </div>
      </section>
    </div>);
  
  return HTML;
}

export default App;

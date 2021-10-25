import './App.css';
import Navbar from './components/navbar'
import data from "./data.json"
import JobCard from './components/jobCards';

function App() {

  const jobData = data.jobs.slice(0,20);

  //render job only if active = true

  let HTML = (<div className="App">
      <Navbar/>
      <section id="sec-jobs">
        <div id="job-cards-left">
          {
            jobData.map((el)=> <JobCard key={el.id}  data={el}/>)
          }
        </div>
        <div id="job-cards-right"></div>
      </section>
    </div>);
  
  return HTML;
}

export default App;

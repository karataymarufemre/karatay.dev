import { useEffect, useState } from "react";
import FadeInSection from "../fadeinsection";
import Project from "./project";

function ProjectsSection(props) {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
       fetch('https://api.github.com/users/karataymarufemre/repos')
          .then((res) => res.json())
          .then((data) => {
             setRepos(filterRepos(data));
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);


    return (<>
            <FadeInSection className="flex w-full md:w-1/2">
            <div className="flex flex-col w-full pt-12 md:items-center  pb-16">
                <div className="border-b md:w-1/2 pb-4 rounded-sm border-b-palette-not-bg">
                    <h1 id="projects" className="text-3xl pl-2 font-bold text-palette-not-bg scroll-mt-64">Projects/Repos</h1>
                </div>
                {repos.map((obj, index) => {
                    return (

                            <Project
                                key={index}
                                dates={timeDiff(obj.created_at)}
                                name={obj.name}
                                link={obj.html_url}
                                bullets={[obj.description]}
                            />
                    );
                })}


            </div>
        </FadeInSection>

    </>)
}

function filterRepos(data) {
    if(data !== null && data !== undefined) {
        return data.filter(a => a.topics.includes("addtokarataydev")).sort(compareMonths);
    }
    return [];
}

function compareMonths(a, b) {
    return diffInMonths(a.created_at) - diffInMonths(b.created_at);
  }

function diffInMonths(date) {
    let date1 = new Date();
    let date2 = new Date(date);
    const monthDiff = date1.getMonth() - date2.getMonth();
    const yearDiff = date1.getYear() - date2.getYear();
  
    return monthDiff + yearDiff * 12;
}

function timeDiff(date) {
    let diff = diffInMonths(date)
    if(diff >= 12) {
        return (diff/12).toFixed(0) + " years " + diff%12 + " months ago.";
    }
    if(diff > 1) {
        return diff + " months ago.";
    }
    if(diff > -1) {
        return "New."
    }

  }

export default ProjectsSection;
import allProjects from '../../projects.json';

export default (req, res) => {

    const { name } = req.query;
    let projects = allProjects;

    if (name) {
        projects = projects.filter(project => project.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (!projects.length) {
        projects = allProjects.filter(project => project.name.toLowerCase() === 'unknown');
    }


//   const project = projects[Math.floor(Math.random() * projects.length)];
  res.status(200).json(projects);
};
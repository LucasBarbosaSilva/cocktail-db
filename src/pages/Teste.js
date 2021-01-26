import axios from 'axios';

const list = 'https://jobs.github.com/positions.json';

function getGitHubJobs() {
    return axios.get(list);
}

console.log(getGitHubJobs)
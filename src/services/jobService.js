import axios from "axios";

// mock API (local JSON simulation)
const mockJobs = [
    { id: 1, title: "Frontend Developer", company: "Google" },
    { id: 2, title: "React Developer", company: "Amazon" },
    { id: 3, title: "UI Engineer", company: "Microsoft" },
];

export const fetchJobs = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockJobs);
        }, 800);
    });
};

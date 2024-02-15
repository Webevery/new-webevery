import { Project } from "./models";
import { connectToDB } from "./utils";


export const getOurProjects = async () => {
    try {
        connectToDB();

        const ourProjects = await Project.find();
        return ourProjects;
    } catch (error) {
        console.log('error', error)
        throw new Error("Failed to fetch our projects.");
    }
}

export const getOurProject = async (slug) => {
    try {
        connectToDB();

        const project = await Project.findOne({ slug });
        return project;
    } catch (error) {
        console.log('error', error)
        throw new Error("Failed to fetch project.");
    }
}
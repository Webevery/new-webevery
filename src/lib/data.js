import { Project } from "./models";
import { connectToDB } from "./utils";
//stop cashing data, when use API
import { unstable_noStore as noStore } from "next/cache";


export const getOurProjects = async () => {
    noStore();
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
    noStore();
    try {
        connectToDB();

        const project = await Project.findOne({ slug });
        return project;
    } catch (error) {
        console.log('error', error)
        throw new Error("Failed to fetch project.");
    }
}
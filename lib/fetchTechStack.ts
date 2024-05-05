import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

export async function fetchTechStack() {
    try {
        const client = new MongoClient(uri!);
        const conn = await client.connect();
        const db = conn.db("portfolio");
        const projects = await db.collection("techStack").find({}).toArray();
        const mappedProjects = projects
            .sort((a, b) => {
                if (a.alt < b.alt) return -1;
                return 1;
            })
            .map((obj) => ({
                id: obj._id.toString(),
                imgSrc: obj.imgSrc,
                alt: obj.alt,
            }));
        client.close();
        return mappedProjects;
    } catch (e) {
        return null;
    }
}

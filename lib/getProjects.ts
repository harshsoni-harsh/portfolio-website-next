import { MongoClient } from "mongodb"
const uri = process.env.MONGODB_URI;

export async function getProjects() {
  if (!uri)
    return []
  const client = new MongoClient(uri, {});
  const conn = await client.connect();
  const db = conn.db("portfolio");
  const projects = await db.collection("projects").find({}).toArray();
  const mappedProjects = projects.map(obj => ({
    id: obj._id.toString(),
    title: obj.title,
    imgSrc: obj.imgSrc,
    repoLink: obj.repoLink,
    liveLink: obj.liveLink,
  }))
  return mappedProjects;
}
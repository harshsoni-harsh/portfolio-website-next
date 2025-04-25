import { client } from "@/migrations/sanity/client";

const GetAllDocumentIds =
  '*[_type != "system.document" && !(_id in path("_.**"))]._id';

export async function deleteAllDocuments() {
  try {
    const documentIds = await client.fetch(GetAllDocumentIds);
    const transaction = client.transaction();

    for (const docId of documentIds) {
      transaction.delete(docId);
    }
    const results = await transaction.commit();
    console.log(`Deleted ${results.results.length} documents.`);
    return true;
  } catch (error) {
    console.error("Error deleting documents:", error);
    return false;
  }
}

deleteAllDocuments();

import { db } from "../firebase/firebase-config";

export const loadContent = async () => {
  const contentSnap = await db.collection("portfolio").orderBy("nombre").get();
  const content = [];
  contentSnap.forEach((s) => {
    content.push({ ...s.data(), id: s.id });
  });
  return content;
};

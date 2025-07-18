const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://<TU_PROJECT_ID>.firebaseio.com" // solo si usas Realtime Database
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

// Ejemplo: obtener días de un capítulo
app.get("/api/chapter-days/:chapterNo", async (req, res) => {
  try {
    const chapterNo = parseInt(req.params.chapterNo, 10);
    const daysRef = db.collection("days");
    const snapshot = await daysRef.where("chapterNo", "==", chapterNo).get();
    const days = [];
    snapshot.forEach((doc) => days.push({ id: doc.id, ...doc.data() }));
    res.json(days);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.backendPort || 3000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));

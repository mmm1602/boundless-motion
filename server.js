import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());

// ✅ DEBUG: Print loaded environment values
console.log("EMAIL:", process.env.JIRA_EMAIL);
console.log("TOKEN:", process.env.JIRA_API_TOKEN ? "✅ Loaded" : "❌ Missing");
console.log("DOMAIN:", process.env.JIRA_DOMAIN);

app.get("/api/jira-me", async (req, res) => {
  const auth = Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString("base64");

  const url = `https://${process.env.JIRA_DOMAIN}/rest/api/3/myself`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();
    console.log("🧑 Jira user info:", JSON.stringify(data, null, 2));
    res.json(data);
  } catch (err) {
    console.error("❌ Failed to get user info:", err);
    res.status(500).json({ error: "Failed to get user info" });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

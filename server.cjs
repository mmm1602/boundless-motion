const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");              // ✅ missing import
const fetch = require("node-fetch");

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/jira-events", async (req, res) => {
  const auth = Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString("base64");

  const url = `https://${process.env.JIRA_DOMAIN}/rest/api/3/search?jql=project=CLUB AND issuetype=Event&fields=summary,duedate`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();

    const events = data.issues.map((issue) => ({
      id: issue.id,
      title: issue.fields.summary,
      start: issue.fields.duedate,
    }));

    res.json(events);
  } catch (err) {
    console.error("Jira fetch error:", err);
    res.status(500).json({ error: "Failed to fetch from Jira" });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

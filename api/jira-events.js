// /api/jira-events.js
export default async function handler(req, res) {
  const jiraEmail = process.env.JIRA_EMAIL;
  const jiraToken = process.env.JIRA_API_TOKEN;
  const jiraDomain = process.env.JIRA_DOMAIN; // e.g. "your-org.atlassian.net"

  const auth = Buffer.from(`${jiraEmail}:${jiraToken}`).toString("base64");

  const jql = encodeURIComponent('project = CLUB AND issuetype = Event ORDER BY duedate ASC');
  const url = `https://${jiraDomain}/rest/api/3/search?jql=${jql}&fields=summary,duedate`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json"
    }
  });

  const data = await response.json();

  const events = data.issues.map(issue => ({
    id: issue.id,
    title: issue.fields.summary,
    start: issue.fields.duedate
  }));

  res.status(200).json(events);
}

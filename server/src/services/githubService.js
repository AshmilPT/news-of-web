/**
 * Service to interact with the GitHub API
 */

export const createGithubIssue = async (title, body) => {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;

  if (!token || !owner || !repo) {
    console.warn('GitHub Configuration is missing. Skipping issue creation.');
    return null;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        labels: ['lead', 'new-order']
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`GitHub API Error: ${response.status} - ${errorData.message}`);
    }

    const data = await response.json();
    return data.html_url;

  } catch (error) {
    console.error('Failed to create GitHub issue:', error);
    return null; // Return null on failure instead of crashing the whole order flow
  }
};

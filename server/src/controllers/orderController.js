import { createGithubIssue } from '../services/githubService.js';

export const getOrders = async (req, res) => {
  // Since we removed Firestore, we will return an empty list or a message
  res.status(200).json({ message: "Order history is handled via GitHub Issues." });
};

export const createOrder = async (req, res) => {
  try {
    const { fullName, serviceType, customAppName, businessDetails, phoneNumber } = req.body;

    // 1. Validate Input
    if (!serviceType || !businessDetails || !phoneNumber || !fullName) {
      const missing = [];
      if (!fullName) missing.push('fullName');
      if (!serviceType) missing.push('serviceType');
      if (!businessDetails) missing.push('businessDetails');
      if (!phoneNumber) missing.push('phoneNumber');
      
      return res.status(400).json({ 
        message: `Missing required fields: ${missing.join(', ')}` 
      });
    }

    // 2. Format details for GitHub Issue
    const issueTitle = `New Lead: ${serviceType}${customAppName ? ' (' + customAppName + ')' : ''} Request from ${fullName || 'Client'}`;
    const issueBody = `
## New Order Received

**Client Name:** ${fullName || 'N/A'}
**Service Type:** ${serviceType}
${customAppName ? '**App Name/Type:** ' + customAppName : ''}
**Phone:** \`${phoneNumber}\`

### Project Details
> ${businessDetails}
    `.trim();

    // 3. Create GitHub Issue
    const githubUrl = await createGithubIssue(issueTitle, issueBody);

    if (!githubUrl) {
      return res.status(500).json({ 
        message: 'Failed to create GitHub issue. Please check server configuration.' 
      });
    }

    // 4. Send Success Response
    res.status(201).json({
      message: 'Order successfully created and logged to GitHub',
      githubLogged: true,
      githubUrl: githubUrl
    });

  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Internal server error while processing order' });
  }
};

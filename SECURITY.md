# Security Policy

NyayaAI processes incident descriptions, so security reports must protect both application users and reporters.

## Supported version

Security fixes are currently applied to the v4 project branch and to the latest deployed production version.

## Reporting a vulnerability

Do not describe a vulnerability in a public issue, discussion or pull request.

Use GitHub's **Security** tab and private vulnerability reporting when it is available for this repository. If that option is unavailable, contact the repository owner through their GitHub profile without including exploit details, then agree on a private channel.

Include:

- the affected endpoint, component or version;
- clear reproduction steps using non-sensitive test data;
- the possible impact;
- screenshots or logs with secrets and personal details removed; and
- a suggested fix, if known.

Please allow reasonable time for investigation before public disclosure.

## Sensitive information

Never submit a real victim's or accused person's name, phone number, address, identification number, case number, medical information, credentials or complete incident narrative. Use fictional test cases and redact tokens, cookies and server details.

## Security scope

Useful reports include injection, cross-site scripting, unsafe dependency behaviour, authentication issues introduced in later versions, unintended incident-data retention, information disclosure and ways to bypass request validation.

Model disagreement, an incomplete category list or a disputed legal interpretation is normally a correctness issue rather than a security vulnerability. Such reports may use a public issue only when they contain no private data.

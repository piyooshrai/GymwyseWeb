// Amazon SES email utility
// Requires: AWS_SES_REGION, AWS_SES_ACCESS_KEY_ID, AWS_SES_SECRET_ACCESS_KEY, AWS_SES_FROM_EMAIL

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailParams) {
  const region = process.env.AWS_SES_REGION;
  const accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SES_SECRET_ACCESS_KEY;
  const fromEmail = process.env.AWS_SES_FROM_EMAIL;

  if (!region || !accessKeyId || !secretAccessKey || !fromEmail) {
    throw new Error(
      "Missing AWS SES environment variables. Check .env.local.example for required values."
    );
  }

  // Dynamic import to keep this server-side only
  const { SESClient, SendEmailCommand } = await import(
    "@aws-sdk/client-ses"
  );

  const client = new SESClient({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });

  const command = new SendEmailCommand({
    Source: fromEmail,
    Destination: { ToAddresses: [to] },
    ReplyToAddresses: replyTo ? [replyTo] : undefined,
    Message: {
      Subject: { Data: subject, Charset: "UTF-8" },
      Body: {
        Html: { Data: html, Charset: "UTF-8" },
      },
    },
  });

  return client.send(command);
}

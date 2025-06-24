# Email Integration Guide

This project uses EmailJS to send emails from the contact form without requiring a backend server.

## Setup Instructions

1. **Create an EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
   - Verify your email address

2. **Create an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, or another email provider)
   - Follow the instructions to connect your email account

3. **Create an Email Template**
   - Go to "Email Templates" in the EmailJS dashboard
   - Create a new template
   - Design your email using the variables from the contact form
   - Example template variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{phone}}` - Sender's phone
     - `{{service_type_label}}` - Service requested
     - `{{property_type_label}}` - Property type
     - `{{location}}` - Location
     - `{{message}}` - Message content

4. **Update Environment Variables**
   - Open the `.env` file in the project root
   - Update the following values with your EmailJS credentials:
     ```
     REACT_APP_RECIPIENT_EMAIL=nworahebuka.a@gmail.com
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - You can find these values in your EmailJS dashboard

## Testing

1. Fill out the contact form on the website
2. Submit the form
3. Check the recipient email inbox to confirm receipt
4. Check browser console for any errors if the email is not received

## Troubleshooting

- If emails are not being sent, check the browser console for errors
- Verify that your EmailJS account is active and within the free tier limits (200 emails/month)
- Ensure your email template has the correct variable names matching the form data
- Check that your email service is properly connected in the EmailJS dashboard

## Security Note

The EmailJS public key is exposed in the frontend code. This is normal for EmailJS integration, but you should:
- Set sending limits in your EmailJS dashboard
- Use email templates with fixed "to" addresses to prevent email abuse
- Consider implementing server-side validation if higher security is needed

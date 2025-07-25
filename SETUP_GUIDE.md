# Enhanced Contact Form Setup Guide

This guide will help you set up the comprehensive contact form system with Google Sheets integration and email notifications.

## 🚀 Quick Start

1. **Copy Environment Variables**
   ```bash
   cp .env.example .env
   ```

2. **Install Required Dependencies**
   ```bash
   npm install @emailjs/browser
   ```

3. **Configure Services** (see detailed instructions below)

## 📊 Google Sheets Setup

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Scalezix Academy Contact Forms"
4. Copy the Spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

### Step 2: Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Go to "Credentials" and create:
   - **API Key** (restrict to Google Sheets API)
   - **OAuth 2.0 Client ID** (for web application)

### Step 3: Set Up Authentication
Choose one of these methods:

#### Option A: Service Account (Recommended for Production)
1. Create a Service Account in Google Cloud Console
2. Download the JSON key file
3. Share your Google Sheet with the service account email
4. Use service account credentials in your application

#### Option B: OAuth 2.0 (Easier for Development)
1. Set up OAuth 2.0 consent screen
2. Create OAuth 2.0 Client ID
3. Get access token using OAuth flow
4. Use access token in your application

### Step 4: Configure Environment Variables
```env
VITE_GOOGLE_SHEETS_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
VITE_GOOGLE_API_KEY=AIzaSyBhuQoiQFnOkuLuXmXxxxxxxxxxxxxxxxxx
VITE_GOOGLE_ACCESS_TOKEN=ya29.a0AfH6SMBxxxxxxxxxxxxxxxxxxxxxxxx
```

## 📧 Email Setup (EmailJS)

### Step 1: Create EmailJS Account
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Get your Service ID and Public Key

### Step 2: Create Email Templates
Create these 4 templates in EmailJS:

#### Corporate User Confirmation Template
- **Template ID**: `corporate_inquiry_user`
- **Subject**: `Thank you for your corporate inquiry - Scalezix Academy`
- **Variables**: `{{from_name}}`, `{{company_name}}`, `{{industry}}`, etc.

#### Corporate Admin Notification Template
- **Template ID**: `corporate_inquiry_admin`
- **Subject**: `New Corporate Inquiry from {{from_name}}`
- **Variables**: All form fields for admin review

#### Educational User Confirmation Template
- **Template ID**: `educational_inquiry_user`
- **Subject**: `Thank you for your educational inquiry - Scalezix Academy`
- **Variables**: `{{from_name}}`, `{{institution_name}}`, `{{institution_type}}`, etc.

#### Educational Admin Notification Template
- **Template ID**: `educational_inquiry_admin`
- **Subject**: `New Educational Inquiry from {{from_name}}`
- **Variables**: All form fields for admin review

### Step 3: Configure Environment Variables
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxxxxxxxxxxxx
VITE_EMAILJS_CORPORATE_USER_TEMPLATE=corporate_inquiry_user
VITE_EMAILJS_CORPORATE_ADMIN_TEMPLATE=corporate_inquiry_admin
VITE_EMAILJS_EDUCATIONAL_USER_TEMPLATE=educational_inquiry_user
VITE_EMAILJS_EDUCATIONAL_ADMIN_TEMPLATE=educational_inquiry_admin
```

## 🔧 Implementation Details

### Form Structure
The enhanced contact form includes:

**Corporate Fields:**
- Company Name
- Industry (dropdown)
- Business Size (dropdown)
- Job Title
- Inquiry Type (dropdown)

**Educational Fields:**
- Institution Name
- Institution Type (dropdown)
- Department
- Role/Position
- Program Interest (dropdown)

**Common Fields:**
- Full Name
- Email Address
- Phone Number
- Message

### Data Flow
1. **User submits form** → Form validation
2. **Data processing** → Parallel execution:
   - Submit to Google Sheets
   - Send confirmation email to user
   - Send notification email to admin
3. **Success feedback** → User sees confirmation message

### Google Sheets Structure
The system creates two sheets:

#### Corporate Sheet Columns:
- Timestamp
- Contact Type
- Full Name
- Email
- Phone
- Message
- Company Name
- Industry
- Business Size
- Job Title
- Inquiry Type

#### Educational Sheet Columns:
- Timestamp
- Contact Type
- Full Name
- Email
- Phone
- Message
- Institution Name
- Institution Type
- Department
- Role
- Program Interest

## 🛠 Customization Options

### Adding New Fields
1. Update the `FormData` interface in `EnhancedContactForm.tsx`
2. Add the field to the form UI
3. Update the Google Sheets columns
4. Update email templates

### Changing Email Templates
1. Modify templates in EmailJS dashboard
2. Update template variables in `EmailService.ts`
3. Test with sample data

### Adding New Contact Types
1. Extend the `contactType` union type
2. Add new tab in the form
3. Create corresponding fields
4. Add new Google Sheet
5. Create new email templates

## 🔍 Testing

### Test Google Sheets Integration
```javascript
// Test in browser console
import { GoogleSheetsService } from './src/components/GoogleSheetsIntegration';

const service = new GoogleSheetsService('your_sheet_id', 'your_api_key', 'your_token');
await service.initializeSheets();
```

### Test Email Service
```javascript
// Test in browser console
import { EmailService } from './src/components/EmailService';

const service = new EmailService('service_id', 'template_id', 'public_key');
await service.sendEmail(testEmailData);
```

## 🚨 Troubleshooting

### Common Issues

**Google Sheets API Errors:**
- Check API key restrictions
- Verify sheet sharing permissions
- Ensure correct spreadsheet ID

**Email Delivery Issues:**
- Verify EmailJS service configuration
- Check template variable names
- Test with simple template first

**Form Validation Errors:**
- Check required field validation
- Verify email/phone format validation
- Test with different input combinations

### Debug Mode
Enable debug logging by adding to your `.env`:
```env
VITE_DEBUG_MODE=true
```

## 📈 Analytics & Monitoring

### Tracking Form Submissions
The system logs all submissions with timestamps for analytics:
- Submission success/failure rates
- Popular inquiry types
- Response time tracking
- User engagement metrics

### Data Export
Google Sheets data can be exported to:
- CSV files for analysis
- CRM systems via API
- Business intelligence tools
- Email marketing platforms

## 🔒 Security Considerations

### Data Protection
- All form data is validated client-side and server-side
- Email addresses are verified before sending
- Phone numbers are formatted and validated
- Messages are sanitized to prevent XSS

### API Security
- Google API keys are restricted by domain
- EmailJS public keys are safe for client-side use
- Access tokens have limited scope and expiration
- No sensitive data is stored in client-side code

## 📞 Support

If you need help with setup:
1. Check the troubleshooting section above
2. Review the example configurations
3. Test each service independently
4. Contact the development team with specific error messages

---

**Next Steps:**
1. Complete the Google Sheets setup
2. Configure EmailJS templates
3. Test the form with sample data
4. Deploy to production environment
5. Monitor form submissions and email delivery
// Integration utilities for form submission
import { GoogleSheetsService } from '../components/GoogleSheetsIntegration';
import { EmailService } from '../components/EmailService';

// Environment variables (to be set in .env file)
const GOOGLE_SHEETS_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const GOOGLE_ACCESS_TOKEN = import.meta.env.VITE_GOOGLE_ACCESS_TOKEN;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize services
let googleSheetsService: GoogleSheetsService | null = null;
let emailService: EmailService | null = null;

if (GOOGLE_SHEETS_ID && GOOGLE_API_KEY && GOOGLE_ACCESS_TOKEN) {
  googleSheetsService = new GoogleSheetsService(
    GOOGLE_SHEETS_ID,
    GOOGLE_API_KEY,
    GOOGLE_ACCESS_TOKEN
  );
}

if (EMAILJS_SERVICE_ID && EMAILJS_PUBLIC_KEY) {
  emailService = new EmailService(
    EMAILJS_SERVICE_ID,
    'template_id', // This will be determined dynamically
    EMAILJS_PUBLIC_KEY
  );
}

/**
 * Main form submission handler
 */
export async function submitContactForm(formData: any): Promise<void> {
  const timestamp = new Date().toISOString();
  const submissionData = {
    timestamp,
    ...formData
  };

  const promises: Promise<any>[] = [];

  // Submit to Google Sheets if configured
  if (googleSheetsService) {
    promises.push(googleSheetsService.submitFormData(submissionData));
  }

  // Send email notifications if configured
  if (emailService) {
    const emailData = {
      to: [formData.email, 'academy@scalezix.com'],
      subject: `New ${formData.contactType} inquiry from ${formData.fullName}`,
      template: formData.contactType === 'corporate' ? 'corporate_inquiry' : 'educational_inquiry',
      data: formData
    };
    promises.push(emailService.sendEmail(emailData));
  }

  // Execute all integrations
  await Promise.all(promises);
}

/**
 * Initialize all services (call this on app startup)
 */
export async function initializeServices(): Promise<void> {
  if (googleSheetsService) {
    await googleSheetsService.initializeSheets();
  }
}

/**
 * Check if services are properly configured
 */
export function getServiceStatus() {
  return {
    googleSheets: !!googleSheetsService,
    email: !!emailService,
    configured: !!(googleSheetsService && emailService)
  };
}
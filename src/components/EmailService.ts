// Email Service for sending notifications
// This service handles sending confirmation emails to both users and administrators

interface EmailData {
  to: string[];
  subject: string;
  template: 'corporate_inquiry' | 'educational_inquiry';
  data: any;
}

interface EmailTemplateData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  contactType: 'corporate' | 'educational';
  [key: string]: any;
}

class EmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor(serviceId: string, templateId: string, publicKey: string) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
  }

  /**
   * Send email using EmailJS service
   */
  async sendEmail(emailData: EmailData): Promise<void> {
    try {
      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      
      // Initialize EmailJS
      emailjs.init(this.publicKey);

      // Prepare template parameters
      const templateParams = this.prepareTemplateParams(emailData);

      // Send email to user (confirmation)
      await emailjs.send(
        this.serviceId,
        `${emailData.template}_user`,
        {
          ...templateParams,
          to_email: emailData.data.email,
          to_name: emailData.data.fullName,
          email_type: 'confirmation'
        }
      );

      // Send email to admin (notification)
      await emailjs.send(
        this.serviceId,
        `${emailData.template}_admin`,
        {
          ...templateParams,
          to_email: 'academy@scalezix.com',
          to_name: 'Scalezix Academy Team',
          email_type: 'notification'
        }
      );

      console.log('Emails sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
      throw error;
    }
  }

  /**
   * Prepare template parameters based on contact type
   */
  private prepareTemplateParams(emailData: EmailData): any {
    const baseParams = {
      from_name: emailData.data.fullName,
      from_email: emailData.data.email,
      phone: emailData.data.phone,
      message: emailData.data.message,
      contact_type: emailData.data.contactType,
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString()
    };

    if (emailData.data.contactType === 'corporate') {
      return {
        ...baseParams,
        company_name: emailData.data.companyName,
        industry: emailData.data.industry,
        business_size: emailData.data.businessSize,
        job_title: emailData.data.jobTitle,
        inquiry_type: emailData.data.inquiryType
      };
    } else {
      return {
        ...baseParams,
        institution_name: emailData.data.institutionName,
        institution_type: emailData.data.institutionType,
        department: emailData.data.department,
        role: emailData.data.role,
        program_interest: emailData.data.programInterest
      };
    }
  }

  /**
   * Generate email templates for different scenarios
   */
  static getEmailTemplates() {
    return {
      corporate_inquiry_user: {
        subject: "Thank you for your corporate inquiry - Scalezix Academy",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Scalezix Academy</h1>
              <p style="color: white; margin: 10px 0 0 0;">AI Education Platform</p>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #333;">Thank you for your inquiry!</h2>
              <p>Dear {{from_name}},</p>
              <p>Thank you for reaching out to Scalezix Academy regarding corporate training solutions. We have received your inquiry and our team will review your requirements.</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #667eea; margin-top: 0;">Your Inquiry Details:</h3>
                <p><strong>Company:</strong> {{company_name}}</p>
                <p><strong>Industry:</strong> {{industry}}</p>
                <p><strong>Business Size:</strong> {{business_size}}</p>
                <p><strong>Your Role:</strong> {{job_title}}</p>
                <p><strong>Inquiry Type:</strong> {{inquiry_type}}</p>
                <p><strong>Message:</strong> {{message}}</p>
              </div>
              
              <p>Our corporate training specialists will contact you within 24 hours to discuss how we can help your organization achieve its AI training goals.</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://scalezixacademy.com/courses" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">Explore Our Programs</a>
              </div>
              
              <p>Best regards,<br>The Scalezix Academy Team</p>
            </div>
          </div>
        `
      },
      
      educational_inquiry_user: {
        subject: "Thank you for your educational inquiry - Scalezix Academy",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Scalezix Academy</h1>
              <p style="color: white; margin: 10px 0 0 0;">AI Education Platform</p>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #333;">Thank you for your inquiry!</h2>
              <p>Dear {{from_name}},</p>
              <p>Thank you for your interest in Scalezix Academy's educational programs. We're excited to learn about your institution's AI education needs.</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #667eea; margin-top: 0;">Your Inquiry Details:</h3>
                <p><strong>Institution:</strong> {{institution_name}}</p>
                <p><strong>Type:</strong> {{institution_type}}</p>
                <p><strong>Department:</strong> {{department}}</p>
                <p><strong>Your Role:</strong> {{role}}</p>
                <p><strong>Program Interest:</strong> {{program_interest}}</p>
                <p><strong>Message:</strong> {{message}}</p>
              </div>
              
              <p>Our academic partnerships team will reach out within 24 hours to discuss curriculum options, implementation strategies, and how we can support your educational goals.</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://scalezixacademy.com/admissions" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">Learn More About Our Programs</a>
              </div>
              
              <p>Best regards,<br>The Scalezix Academy Team</p>
            </div>
          </div>
        `
      }
    };
  }
}

// Export the service and setup instructions
export { EmailService, type EmailData, type EmailTemplateData };

export const emailSetupInstructions = {
  service: "EmailJS",
  steps: [
    "1. Sign up for EmailJS account at https://www.emailjs.com/",
    "2. Create a new email service (Gmail, Outlook, etc.)",
    "3. Create email templates for each inquiry type",
    "4. Get your Service ID, Template IDs, and Public Key",
    "5. Set up environment variables"
  ],
  
  environmentVariables: {
    VITE_EMAILJS_SERVICE_ID: "Your EmailJS Service ID",
    VITE_EMAILJS_PUBLIC_KEY: "Your EmailJS Public Key",
    VITE_EMAILJS_CORPORATE_USER_TEMPLATE: "Template ID for corporate user confirmation",
    VITE_EMAILJS_CORPORATE_ADMIN_TEMPLATE: "Template ID for corporate admin notification",
    VITE_EMAILJS_EDUCATIONAL_USER_TEMPLATE: "Template ID for educational user confirmation",
    VITE_EMAILJS_EDUCATIONAL_ADMIN_TEMPLATE: "Template ID for educational admin notification"
  },
  
  templates: [
    "corporate_inquiry_user - Confirmation email to corporate users",
    "corporate_inquiry_admin - Notification email to admin for corporate inquiries",
    "educational_inquiry_user - Confirmation email to educational users", 
    "educational_inquiry_admin - Notification email to admin for educational inquiries"
  ]
};

export { EmailService }
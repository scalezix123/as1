// Google Sheets Integration Service
// This file contains the logic for integrating with Google Sheets API

interface FormSubmission {
  timestamp: string;
  contactType: 'corporate' | 'educational';
  fullName: string;
  email: string;
  phone: string;
  message: string;
  
  // Corporate fields
  companyName?: string;
  industry?: string;
  businessSize?: string;
  jobTitle?: string;
  inquiryType?: string;
  
  // Educational fields
  institutionName?: string;
  institutionType?: string;
  department?: string;
  role?: string;
  programInterest?: string;
}

class GoogleSheetsService {
  private spreadsheetId: string;
  private apiKey: string;
  private accessToken: string;

  constructor(spreadsheetId: string, apiKey: string, accessToken: string) {
    this.spreadsheetId = spreadsheetId;
    this.apiKey = apiKey;
    this.accessToken = accessToken;
  }

  /**
   * Initialize the Google Sheets with proper headers
   */
  async initializeSheets(): Promise<void> {
    const corporateHeaders = [
      'Timestamp', 'Contact Type', 'Full Name', 'Email', 'Phone', 'Message',
      'Company Name', 'Industry', 'Business Size', 'Job Title', 'Inquiry Type'
    ];

    const educationalHeaders = [
      'Timestamp', 'Contact Type', 'Full Name', 'Email', 'Phone', 'Message',
      'Institution Name', 'Institution Type', 'Department', 'Role', 'Program Interest'
    ];

    try {
      // Create or update Corporate sheet
      await this.createOrUpdateSheet('Corporate', corporateHeaders);
      
      // Create or update Educational sheet
      await this.createOrUpdateSheet('Educational', educationalHeaders);
      
      console.log('Google Sheets initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Create or update a sheet with headers
   */
  private async createOrUpdateSheet(sheetName: string, headers: string[]): Promise<void> {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}!A1:${String.fromCharCode(64 + headers.length)}1?key=${this.apiKey}`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [headers]
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to update sheet ${sheetName}: ${response.statusText}`);
    }
  }

  /**
   * Submit form data to appropriate sheet
   */
  async submitFormData(data: FormSubmission): Promise<void> {
    const sheetName = data.contactType === 'corporate' ? 'Corporate' : 'Educational';
    
    let values: (string | undefined)[];
    
    if (data.contactType === 'corporate') {
      values = [
        data.timestamp,
        data.contactType,
        data.fullName,
        data.email,
        data.phone,
        data.message,
        data.companyName,
        data.industry,
        data.businessSize,
        data.jobTitle,
        data.inquiryType
      ];
    } else {
      values = [
        data.timestamp,
        data.contactType,
        data.fullName,
        data.email,
        data.phone,
        data.message,
        data.institutionName,
        data.institutionType,
        data.department,
        data.role,
        data.programInterest
      ];
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}!A:K:append?valueInputOption=RAW&key=${this.apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [values]
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to submit data to ${sheetName} sheet: ${response.statusText}`);
    }

    console.log(`Data successfully submitted to ${sheetName} sheet`);
  }

  /**
   * Get all submissions from a specific sheet
   */
  async getSubmissions(sheetName: 'Corporate' | 'Educational'): Promise<any[]> {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}?key=${this.apiKey}`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${sheetName} sheet: ${response.statusText}`);
    }

    const data = await response.json();
    return data.values || [];
  }
}

// Export the service class and types
export { GoogleSheetsService, type FormSubmission };

// Example usage and setup instructions
export const setupInstructions = {
  steps: [
    "1. Create a new Google Sheet or use an existing one",
    "2. Get the Spreadsheet ID from the URL (the long string between /d/ and /edit)",
    "3. Enable Google Sheets API in Google Cloud Console",
    "4. Create credentials (API Key and OAuth 2.0)",
    "5. Set up environment variables:",
    "   - VITE_GOOGLE_SHEETS_ID=your_spreadsheet_id",
    "   - VITE_GOOGLE_API_KEY=your_api_key",
    "   - VITE_GOOGLE_ACCESS_TOKEN=your_access_token"
  ],
  
  environmentVariables: {
    VITE_GOOGLE_SHEETS_ID: "Your Google Sheets ID",
    VITE_GOOGLE_API_KEY: "Your Google API Key", 
    VITE_GOOGLE_ACCESS_TOKEN: "Your OAuth Access Token"
  },
  
  permissions: [
    "Make sure the Google Sheet is shared with edit permissions",
    "Or use service account credentials for automated access"
  ]
};
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'shipper' | 'carrier' | 'general';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface QuoteRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  freightType: string;
  weight: string;
  details: string;
}

export interface CarrierApplication {
  legalName: string;
  mcNumber: string;
  dotNumber: string;
  email: string;
  phone: string;
  equipmentType: string;
  additionalInfo: string;
}

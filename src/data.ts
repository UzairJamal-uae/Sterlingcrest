import { FAQItem, ServiceItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ftl',
    title: 'Full Truckload (FTL)',
    description: 'Dedicated dry van, reefer, and flatbed trailer capacity for large, high-value, or time-sensitive shipments across North America.',
    iconName: 'Truck',
    highlights: ['Sole-use trailers', 'No mid-transit handling', 'Expedited team drivers', 'GPS tracking']
  },
  {
    id: 'ltl',
    title: 'Less Than Truckload (LTL)',
    description: 'Cost-efficient transport for shipments that do not require a full 53-foot trailer. We optimize routing and pricing through elite tier relationships.',
    iconName: 'Boxes',
    highlights: ['Consolidated pricing', 'Liftgate services available', 'Class-based auditing']
  },
  {
    id: 'partials',
    title: 'Partials & Volume LTL',
    description: 'The sweet spot for mid-sized freight that exceeds standard LTL constraints but does not justify FTL costs. Avoid transit damage by bypassing hubs.',
    iconName: 'TrendingUp',
    highlights: ['Direct-to-destination transit', 'Fewer load transfers', 'Flexible dimensions', 'Competitive spot rates']
  },
  {
    id: 'drop-trailer',
    title: 'Drop Trailer Programs',
    description: 'Minimize dock congestion and eliminate driver detention fees. Pre-loaded trailers are dropped off and swapped out seamlessly.',
    iconName: 'CornerDownRight',
    highlights: ['Flexible load times', 'Optimized dock scheduling', 'No detention charges', 'Consistent asset availability']
  },
  {
    id: 'Expedited Shipping',
    title: 'Expedited Shipping',
    description: 'Time-critical delivery services for urgent shipments. When your cargo needs to be there fast, we prioritize speed without sacrificing safety.',
    iconName: 'Electricity',
    highlights: ['Fully certified carriers', 'Reefer temperature telemetry', '100% DOT compliance']
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'q1',
    category: 'shipper',
    question: 'How does SterlingCrest Logistics vet its carrier network?',
    answer: 'We enforce a rigorous multi-stage vetting process. Every carrier in our network is verified daily through leading compliance databases for active FMCSA authority, clean safety records (SMS scores), valid insurance coverage (minimum $1M Auto Liability and $100k Cargo Insurance), and robust safety ratings. We do not work with double-brokered carriers or those with high CSA infraction counts.'
  },
  {
    id: 'q2',
    category: 'shipper',
    question: 'How do you guarantee freight tracking and security?',
    answer: 'We utilize advanced ELD integrations and tracking software. Once a load is dispatched, Shippers receive real-time location updates via GPS, automated geo-fencing alerts upon arrival/departure, and digital Proof of Delivery (POD) directly to their email. For high-value loads, we assign dedicated tracking teams who monitor all of transits.'
  },
  {
    id: 'q3',
    category: 'shipper',
    question: 'What happens in the event of an unavoidable transit delay?',
    answer: 'Transparency is our core value. In the event of traffic, mechanical issues, or weather delays, our dispatchers proactively communicate with both the shipper and the receiver. We actively coordinate alternative pickup/delivery windows or re-route shipments using team drivers if necessary, ensuring minimized friction for your logistics chains.'
  },
  {
    id: 'q4',
    category: 'carrier',
    question: 'What are your payment terms and do you offer QuickPay?',
    answer: 'Our standard terms are Net 30 from the receipt of clean PODs. However, we offer an industry-leading QuickPay option: Get paid within 24 to 48 hours for a small 2.5% factoring fee, or utilize 3-day ACH transfers. All submissions can be made seamlessly through our digital portal.'
  },
  {
    id: 'q5',
    category: 'carrier',
    question: 'What types of equipment do you have high demand for?',
    answer: 'We have consistent, year-round volume across North America for Dry Vans (53-foot), Reefers, Flatbeds, Step-Decks, Hotshots, and Sprinter Vans. We specialize in matching lanes to maximize backhaul opportunities, keeping your trucks loaded and rolling.'
  },
  {
    id: 'q6',
    category: 'carrier',
    question: 'How do I submit Proof of Delivery (POD) and access support?',
    answer: 'PODs and bills of lading (BOL) can be uploaded directly via our carrier portal, or emailed to dispatch@sterlingcrestlogistics.com. For on-the-road questions or emergency check-ins, our dispatch desk is staffed with real humans 24/7 at (657) 751-5684.'
  }
];

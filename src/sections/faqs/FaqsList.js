// @mui
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
// _mock_
// import { _faqs } from "../../_mock";
// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------
const _faqs = [
  {
    id: 1,
    value: "panel1",
    heading: "What is Web 3 Africa?",
    detail: "Web 3 Africa is a pioneering conglomerate committed to transforming Africa’s digital landscape by building and scaling decentralized infrastructure. It focuses on blockchain, decentralized finance (DeFi), and innovative technologies to position Africa as a global leader in the decentralized economy."
  },
  {
    id: 2,
    value: "panel2",
    heading: "What does Web 3 Africa aim to achieve?",
    detail: "Our mission is to empower Africa through digital innovation by providing decentralized infrastructure, advancing policy frameworks, fostering education, and driving economic empowerment and technological sovereignty across the continent."
  },
  {
    id: 3,
    value: "panel3",
    heading: "Where is Web 3 Africa based?",
    detail: "We operate globally, with a focus on Africa and its diaspora. Our main hubs are in London, Accra, and Los Angeles."
  },
  {
    id: 4,
    value: "panel4",
    heading: "What is Web 3?",
    detail: "Web 3 refers to the next evolution of the internet, where decentralization, blockchain technology, and user sovereignty are at the core. It enables people to control their data, identity, and digital assets without relying on centralized entities."
  },
  {
    id: 5,
    value: "panel5",
    heading: "How does blockchain benefit Africa?",
    detail: "Blockchain technology can revolutionize industries by fostering financial inclusion, improving supply chains, reducing corruption, and enhancing transparency. It also provides new economic opportunities by enabling cross-border transactions, decentralized finance, and the tokenization of real-world assets."
  },
  {
    id: 6,
    value: "panel6",
    heading: "Is Web 3 only about cryptocurrencies?",
    detail: "No. While cryptocurrencies are a significant part of Web 3, the ecosystem includes decentralized applications (dApps), tokenized assets, smart contracts, and more, all designed to transform industries beyond finance."
  },
  {
    id: 7,
    value: "panel7",
    heading: "What services does Web 3 Africa offer?",
    detail: "We provide decentralized infrastructure development, blockchain education, policy advocacy, strategic consulting, and partnerships to support the adoption of Web 3 technologies across Africa."
  },
  {
    id: 8,
    value: "panel8",
    heading: "What industries does Web 3 Africa focus on?",
    detail: "We work across various industries, including finance, agriculture, energy, education, health, and art, integrating blockchain solutions to drive sustainable growth and innovation."
  },
  {
    id: 9,
    value: "panel9",
    heading: "What educational initiatives does Web 3 Africa support?",
    detail: "We host workshops, training programs, and webinars to educate communities about blockchain technology, DeFi, and decentralized infrastructure. Our goal is to upskill Africans and position them as leaders in the global Web 3 economy."
  },
  {
    id: 10,
    value: "panel10",
    heading: "How can I partner with Web 3 Africa?",
    detail: "We welcome collaborations with businesses, governments, and individuals who share our vision of empowering Africa through decentralized technology. Visit our Partnerships page to learn more and apply."
  },
  {
    id: 11,
    value: "panel11",
    heading: "Who are some of your key partners?",
    detail: "We collaborate with blockchain organizations, policymakers, international corporations, and local innovators to create sustainable and impactful solutions. Contact us for specific partnership inquiries."
  },
  {
    id: 12,
    value: "panel12",
    heading: "Can startups work with Web 3 Africa?",
    detail: "Yes, we actively support African startups by offering mentorship, funding opportunities, and access to decentralized infrastructure."
  },
  {
    id: 13,
    value: "panel13",
    heading: "How can I get involved with Web 3 Africa?",
    detail: "You can get involved by joining our events, participating in training programs, contributing to our initiatives, or applying for open roles on our Careers page."
  },
  {
    id: 14,
    value: "panel14",
    heading: "Does Web 3 Africa provide funding for projects?",
    detail: "We occasionally fund innovative projects that align with our mission. Visit our Grants & Funding page to learn more about eligibility and application processes."
  },
  {
    id: 15,
    value: "panel15",
    heading: "What events does Web 3 Africa host?",
    detail: "We host conferences, webinars, and panel discussions featuring Web 3 leaders, creators, and policymakers. Keep an eye on our Events page for upcoming dates and locations."
  },
  {
    id: 16,
    value: "panel16",
    heading: "How can I stay updated on Web 3 Africa’s activities?",
    detail: "Follow us on social media and subscribe to our newsletter for the latest updates, announcements, and thought leadership content."
  },
  {
    id: 17,
    value: "panel17",
    heading: "Is Web 3 Africa involved in policymaking?",
    detail: "Yes, we collaborate with governments and international organizations to develop policy frameworks that support the growth and legitimacy of blockchain and decentralized technologies across Africa."
  },
  {
    id: 18,
    value: "panel18",
    heading: "Does Web 3 Africa offer technical support?",
    detail: "We provide consulting and technical expertise to businesses and governments looking to adopt blockchain technology. Visit our Services page for more information."
  },
  {
    id: 19,
    value: "panel19",
    heading: "How can I contact Web 3 Africa?",
    detail: "You can reach us via the Contact Us page on our website or email us at letstalk@web3africagroup.com. We’re happy to assist you with any inquiries."
  },
  {
    id: 20,
    value: "panel20",
    heading: "Where can I find more information about your initiatives?",
    detail: "Visit our About Us and Initiatives pages for detailed insights into our projects, goals, and impact."
  }
];

//----------------------------------------------------------------------
export default function FaqsList() {
  return (
    <>
      {_faqs.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={
              <Iconify icon={"iconoir:plus"} width={20} height={20} />
            }
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: 'start' }}>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

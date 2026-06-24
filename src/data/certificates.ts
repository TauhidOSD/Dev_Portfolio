export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "programming-hero",
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    date: "2024",
    image: "/certificates/programming-hero.jpg",
    credentialUrl: "#",
  },
  {
    id: "react-advanced",
    title: "Advanced React & Next.js",
    issuer: "Udemy",
    date: "2024",
    image: "/certificates/react-advanced.jpg",
    credentialUrl: "#",
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/certificates/aws-cloud.jpg",
    credentialUrl: "#",
  },
];

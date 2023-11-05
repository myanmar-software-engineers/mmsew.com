export const getIconUrl = (iconId) =>
  `https://skillicons.dev/icons?i=${iconId}`;

export const reactQueryIconUrl =
  "data:image/png;base64,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";

const skillsData = [
  { iconUrl: getIconUrl("ts"), name: "TypeScript" },
  { iconUrl: getIconUrl("react"), name: "ReactJS" },
  { iconUrl: getIconUrl("nextjs"), name: "NextJS" },
  { iconUrl: getIconUrl("redux"), name: "Redux" },
  { iconUrl: reactQueryIconUrl, name: "React Query" },
  { iconUrl: getIconUrl("materialui"), name: "Material UI" },
  { iconUrl: getIconUrl("tailwind"), name: "Tailwind CSS" },
  { iconUrl: getIconUrl("bootstrap"), name: "Bootstrap" },
];

export default skillsData;

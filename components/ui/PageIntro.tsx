import Reveal from "./Reveal";
export default function PageIntro({label,title,accent,description}:{label:string;title:string;accent:string;description:string}) {
  return <section className="page-intro site-container"><Reveal><p className="eyebrow">{label}</p><h1>{title}<br /><em>{accent}</em></h1><p className="page-description">{description}</p></Reveal></section>;
}

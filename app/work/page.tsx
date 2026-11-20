import WorkList from "@/components/work/WorkList";
import Footer from "@/components/ui/Footer";
import PageIntro from "@/components/ui/PageIntro";
export const metadata = { title: "Work — Moses Fawole" };
export default function WorkPage() {
 return <main id="main-content"><PageIntro label="The project shelf" title="Ideas, brought" accent="into the real world." description="AI workflows, web products, and a few experiments. Explore the problem, the implementation, and what each project can actually do."/><WorkList/><Footer/></main>;
}

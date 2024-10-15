import Container from "@/app/_components/container";
import { Intro } from "../_components/intro";
import Header from "../_components/header";
import { PostTitle } from "../_components/post-title";

export default function Test() {
    return(
        <main>
            <Container>
                <Header/>
                <PostTitle>About</PostTitle>
                <div>
                    <p>Welcome to Project <span style={{fontStyle: "italic"}}>Remedify</span>, an app designed to make remembering to take your medication easier than ever before. Remedify aims to improve medication adherence while maintaining a low learning curve to prioritize accessibility for users. Users who are prone to polypharmacy and cognitive impairments will have a convenient reminder and easy support system in their life. In addition to our support system at the touch of your fingers, Remedify aims to empower our users by giving them full control over their schedule and medication details.</p>
                    <p className="mt-5">One method of improving medication adherence will be done with help from AI. This will involve features such as recognizing instructions and medications from photos via OCR/Vision, and providing users with information based on the <a className="about-hyperlink" href="https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database.html">Canadian Drug Product Database (DPD)</a> or <a className="about-hyperlink" href="https://go.drugbank.com/">DrugBank</a>.</p>
                </div>
            </Container>
        </main>
    )
}
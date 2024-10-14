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
                <p>We are project Remedify!</p>
            </Container>
        </main>
    )
}
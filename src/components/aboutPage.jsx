import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/aboutPage.css";

export function AboutPage() {
	return (
		<main className="aboutPage">
			<h1>This is a mock online store website to test the concepts of react router</h1>
			<p>The info and images from the products come from Fake Store API</p>
			<p>
				You can follow me at my github
				<a href="https://github.com/juan-est145">
					<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
				</a>
			</p>
		</main>
	);
}

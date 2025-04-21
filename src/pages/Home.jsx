import Typer from "../components/IntroductionPage";

export default function Home() {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'm <b> Fredrik Nilsson </b>
          </h1>
          <Typer />
        </div>
      </div>
    </div>
  );
}

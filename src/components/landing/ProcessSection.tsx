const STEPS = [
  {
    n: "01",
    title: "문의",
    body: "인스타그램으로 제작 또는 리뉴얼을 문의합니다.",
  },
  {
    n: "02",
    title: "상담",
    body: "업종, 원하는 디자인, 필요한 기능을 확인합니다. 리뉴얼의 경우 기존 홈페이지 주소도 확인합니다.",
  },
  {
    n: "03",
    title: "제작",
    body: "브랜드에 맞게 홈페이지를 제작하거나 리뉴얼합니다.",
  },
  {
    n: "04",
    title: "확인 및 오픈",
    body: "완성된 홈페이지를 확인하고 수정 후 오픈합니다.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="studio-section studio-process" id="process">
      <div className="studio-section-head">
        <p className="studio-kicker">PROCESS</p>
        <h2>
          복잡하지 않게,
          <br />
          필요한 것만.
        </h2>
      </div>

      <ol className="studio-process-list">
        {STEPS.map((step) => (
          <li key={step.n}>
            <span>STEP {step.n}</span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

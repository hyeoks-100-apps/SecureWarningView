import Head from "next/head";

const warningItems = [
  "이 사이트는 금융 정보를 탈취하려는 피싱 페이지입니다.",
  "절대로 개인정보나 비밀번호를 입력하지 마세요.",
  "브라우저를 즉시 닫고 공식 고객센터를 통해 사실 여부를 확인하세요.",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>위험한 피싱 사이트 경고</title>
        <meta
          name="description"
          content="사용자를 속여 정보를 빼내려는 악성 피싱 사이트 경고 페이지"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="page">
        <section className="warning-card" role="alert" aria-live="assertive">
          <div className="warning-badge" aria-hidden="true">
            <span className="warning-icon">⚠️</span>
          </div>
          <h1 className="warning-title">경고: 악성 피싱 사이트</h1>
          <p className="warning-subtitle">
            이 사이트는 example.com 도메인을 사칭하여 사용자의 민감 정보를 탈취하려고 시도하고 있습니다.
          </p>
          <ul className="warning-list">
            {warningItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="cta-button"
            href="https://www.kisa.or.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            한국인터넷진흥원(KISA)에서 더 알아보기
          </a>
        </section>
      </main>
      <footer className="footer">
        <p>
          이 페이지는 보안 교육 목적으로 제공되는 데모이며 실제 피싱 사이트가 아닙니다.
        </p>
      </footer>
    </>
  );
}

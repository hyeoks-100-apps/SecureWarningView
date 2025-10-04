# SecureWarningView

GitHub Pages에 배포할 수 있는 Next.js 기반의 정적 경고 페이지 예제입니다. `example.com`과 같이 피싱 위험이 있는 도메인을 사칭하는 사이트라는 설정으로, 사용자에게 즉각적인 경고 메시지를 강조하는 UI를 제공합니다.

## 주요 특징

- **정적 Export 지원**: `next.config.mjs`에서 `output: "export"`를 사용해 GitHub Pages에 올릴 수 있는 순수 정적 파일을 생성합니다.
- **접근성 고려**: `role="alert"`, `aria-live="assertive"` 등 스크린 리더 사용자도 경고를 인지할 수 있도록 접근성 속성을 포함했습니다.
- **어두운 테마의 경고 UI**: 강렬한 색상과 애니메이션을 통해 위험 경고를 시각적으로 강조합니다.

## 개발 환경 구성

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 개발 서버가 실행되며, 수정 사항을 실시간으로 확인할 수 있습니다.

### 프로덕션 빌드 및 정적 Export

```bash
npm run build
npm run export
```

명령이 완료되면 `out/` 디렉터리에 GitHub Pages에 업로드할 수 있는 정적 파일이 생성됩니다.

## GitHub Pages 배포 예시

1. 리포지터리를 GitHub에 푸시합니다.
2. GitHub Pages 설정에서 **Build and deployment** → **Source**를 `Deploy from a branch`로 설정합니다.
3. `gh-pages` 등 배포용 브랜치를 하나 만들고, `out/` 디렉터리의 정적 파일을 해당 브랜치의 루트에 커밋합니다.
   - 예: `npm run build && npm run export` 이후 `git subtree push --prefix out origin gh-pages`
4. 저장하면 수 분 내에 GitHub Pages 주소에서 경고 페이지를 확인할 수 있습니다.

> GitHub Pages의 서브디렉터리에 배포하는 경우(예: `https://username.github.io/repo-name`)에는 `next.config.mjs`의 `basePath`와 `assetPrefix`를 저장소 이름에 맞게 지정하세요.

## 라이선스

이 프로젝트는 학습 및 데모 목적으로 자유롭게 사용할 수 있습니다.


# SecureWarningView

GitHub Pages에 배포할 수 있는 Next.js 기반의 정적 경고 페이지 예제입니다. `example.com`과 같이 피싱 위험이 있는 도메인을 사칭하는 사이트라는 설정으로, 사용자에게 즉각적인 경고 메시지를 강조하는 UI를 제공합니다.

## 주요 특징

- **정적 Export 지원**: `next.config.mjs`에서 `output: "export"`를 사용해 GitHub Pages에 올릴 수 있는 순수 정적 파일을 생성합니다.
- **GitHub Pages 경로 자동 처리**: GitHub Actions에서 빌드할 때 저장소 이름을 감지해 `https://<username>.github.io/<repo>/`와 같은 하위 경로에서도 올바르게 동작합니다.
- **접근성 고려**: `role="alert"`, `aria-live="assertive"` 등 스크린 리더 사용자도 경고를 인지할 수 있도록 접근성 속성을 포함했습니다.
- **어두운 테마의 경고 UI**: 강렬한 색상과 애니메이션을 통해 위험 경고를 시각적으로 강조합니다.

## 개발 환경 구성

```bash
npm install
```

처음 의존성을 설치하면 `package-lock.json`이 생성됩니다. GitHub Actions 워크플로는 이 잠금 파일을 기반으로 `npm ci`를 실행하므로, 의존성
을 추가하거나 변경할 때는 `package-lock.json`도 함께 커밋해 주세요.

### 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 개발 서버가 실행되며, 수정 사항을 실시간으로 확인할 수 있습니다.

### 프로덕션 빌드 및 정적 Export

```bash
npm run build


명령이 완료되면 Next.js가 자동으로 `out/` 디렉터리에 GitHub Pages에 업로드할 수 있는 정적 파일을 생성합니다.

## GitHub Pages 배포 예시 (GitHub Actions)

GitHub Pages의 **Build and deployment** 소스를 `GitHub Actions`로 설정하면, 기본 브랜치(main)에 푸시할 때마다 자동으로 정적 사이트를 빌드하고 배포할 수 있습니다.

1. 리포지터리를 GitHub에 푸시한 뒤, GitHub Pages 설정에서 **Build and deployment** → **Source**를 `GitHub Actions`로 지정합니다.
2. 이 저장소에 포함된 워크플로(`.github/workflows/deploy.yml`)가 `main` 브랜치에 푸시될 때마다 실행됩니다.
3. 워크플로는 `npm ci`와 `npm run build`를 수행해 `out/` 디렉터리에 정적 파일을 생성하고, GitHub Pages에 자동 배포합니다. GitHub Pages 배포 URL은 일반적으로 `https://<username>.github.io/<repo>/` 형태입니다.
4. 워크플로 실행이 완료되면 배포 로그의 `Deploy to GitHub Pages` 단계에서 제공하는 URL을 통해 결과를 확인할 수 있습니다.

> 포크 등 다른 저장소로 배포한다면 저장소 이름이 경로로 사용됩니다. GitHub Actions 환경에서는 자동으로 감지되지만, 로컬에서 직접 정적 Export를 배포하려면 `GITHUB_REPOSITORY` 환경 변수를 `username/repo` 형식으로 지정하고 `npm run build`를 실행하면 동일한 결과를 얻을 수 있습니다.


## 라이선스

이 프로젝트는 학습 및 데모 목적으로 자유롭게 사용할 수 있습니다.


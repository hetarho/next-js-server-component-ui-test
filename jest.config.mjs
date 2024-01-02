import nextJest from "next/jest.js";

// Next.js 애플리케이션에 맞게 Jest 설정을 생성합니다.
const createJestConfig = nextJest({
  dir: "./", // Next.js 앱의 경로를 지정합니다.
});

const customJestConfig = {
  // 각 테스트가 실행되기 전에 설정할 파일들을 지정합니다.
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // 테스트 환경 설정 파일

  // Jest가 처리할 파일 확장자를 지정합니다.
  moduleFileExtensions: [
    "js", // JavaScript 파일
    "json", // JSON 파일
    "ts", // TypeScript 파일
    "tsx", // TypeScript와 JSX를 포함한 파일
  ],

  // Jest 테스트 파일의 루트 디렉토리를 설정합니다.
  rootDir: "",

  // 테스트 파일을 식별하기 위한 정규 표현식 패턴입니다.
  testRegex: ".*\\.(spec|test)\\.(ts|tsx)$", // '.spec.ts', '.test.ts', '.spec.tsx', '.test.tsx' 파일을 테스트 파일로 인식

  // 테스트 파일 변환을 위한 설정입니다.
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest", // TypeScript 및 JSX 파일을 위한 변환 처리
  },

  // 커버리지 수집 대상 파일을 지정합니다.
  collectCoverageFrom: ["**/*.(t|j)s"],

  // 커버리지 보고서가 저장될 디렉토리를 지정합니다.
  coverageDirectory: "../coverage",

  // 테스트 환경을 설정합니다. React/Next.js 컴포넌트 테스트에 적합한 jsdom 환경을 사용합니다.
  testEnvironment: "jest-environment-jsdom",

  // 추가적인 Jest 설정을 필요에 따라 여기에 추가할 수 있습니다.
};

// 위에서 정의한 설정을 Next.js의 Jest 설정 생성 함수에 전달합니다.
export default createJestConfig(customJestConfig);

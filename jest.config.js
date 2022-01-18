export default async () => {
  return {
    // cjs로 변환하는 설정이 있다면 무시한다
    transform: {},
    // 프로젝트 루트를 지정한다
    rootDir: './',
  }
}

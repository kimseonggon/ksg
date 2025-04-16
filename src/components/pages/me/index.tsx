
const MeComponent = () => {
  return (
    <div >
      <section className="p-8 text-center bg-gray-100">
        <h1 className="text-3xl font-bold">안녕하세요!</h1>
        <h2 className="text-xl mt-2 font-medium">6년차 웹 프론트엔드 개발자 김성곤입니다.</h2>
        <p className="mt-4 text-gray-600">
          Angular, Vue, React 등 다양한 프레임워크를 활용해 스마트팩토리 및 물류 시스템을 설계·개발했습니다.
        </p>
      </section>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="text-sm leading-relaxed">
          <li><strong>이름:</strong> 김성곤</li>
          <li><strong>이메일:</strong> shuw75@gmail.com</li>
          <li><strong>연락처:</strong> 010-3259-9295</li>
        </ul>
      </section>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed">
          메져에이드에서 스마트팩토리 시스템을 풀스택으로 개발하며 커리어를 시작했습니다.
          이후 물류 회사인 <strong>㈜두핸즈</strong>에 합병되어 풀필먼트 시스템 초기 기획부터 개발에 참여했고,
          프론트 파트 리더로 React 기반의 시스템을 총괄했습니다.
        </p>
      </section>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>

        <div className="space-y-6">
          {/* 두핸즈 */}
          <div>
            <h3 className="text-xl font-bold">㈜두핸즈 (2020.01 ~ 2024.06)</h3>
            <p className="text-sm text-gray-700 mb-2">품고 풀필먼트 시스템 / 홈페이지 구축</p>
            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
              <li>초기 시스템 설계 및 현장 조사 기반의 요구 분석</li>
              <li>아토믹 디자인 패턴 도입 → 컴포넌트 재사용 및 UI 일관성 확보</li>
              <li>도메인 4분화로 사용자 맞춤형 서비스 제공</li>
              <li>백오피스 개발, 웹소켓 기반 파일 업로드 기능 구현</li>
              <li>D3 차트 시각화 및 커스터마이징 그리드 개발</li>
              <li>Strapi 도입으로 CMS 및 홈페이지 연동 개발</li>
              <li>Slack + DataDog 연동 → 알림 및 장애 추적 자동화</li>
              <li>Cypress 도입으로 기본 테스트 환경 구축</li>
              <li><strong>기술 스택:</strong> React, TypeScript, MobX, AUIGrid, ECharts, D3, Cypress, Strapi</li>
            </ul>
          </div>

          {/* 메져에이드 */}
          <div>
            <h3 className="text-xl font-bold">㈜메져에이드 (2018.01 ~ 2019.12)</h3>
            <p className="text-sm text-gray-700 mb-2">스마트팩토리 1.0 / 2.0</p>
            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
              <li>MES, WMS, SPC 풀스택 개발 (Angular + Node + PostgreSQL)</li>
              <li>Vue 마이그레이션 및 Raspberry Pi + Electron 활용한 IoT 연동</li>
              <li>실시간 생산 공정 데이터 시각화 기능 구현</li>
              <li><strong>기술 스택:</strong> Angular, Vue, Electron, Node.js, PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-sm text-gray-700">
          성공회대학교 컴퓨터공학과 (2010.03 ~ 2015.03)
        </p>
      </section>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-sm leading-relaxed">
          <li><strong>Frontend:</strong> React, Vue.js, Angular, TypeScript, Sass</li>
          <li><strong>Backend:</strong> Node.js, PostgreSQL, Strapi</li>
          <li><strong>Tools:</strong> Git, GitHub, Slack, Cypress, DataDog</li>
          <li><strong>Visualization:</strong> D3.js, ECharts, AUIGrid</li>
        </ul>
      </section>
    </div>
  );
};

export default MeComponent;
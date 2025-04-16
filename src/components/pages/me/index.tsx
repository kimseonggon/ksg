import styles from "./style.module.scss";

const MeComponent = () => {
  return (

    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>김성곤</h1>
        <p className={styles.contact}>이메일: shuw75@gmail.com | 연락처: 010-3259-9295</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>자기소개</h2>
        <div className={styles.paragraphGroup}>
          <p>안녕하세요, 6년 차 웹 프론트엔드 개발자 김성곤입니다.</p>
          <p>개발 커리어는 2018년 메져에이드에서 스마트팩토리 시스템(MES, WMS, SPC)을 풀스택으로 개발하면서 시작했습니다. Angular로 시작하여 Vue로의 마이그레이션을 경험했고, 센서 장비와의 연동, 시각화 시스템까지 다양한 산업현장의 시스템을 개발하며 기술뿐 아니라 문제 해결 중심의 사고를 익혔습니다.</p>
          <p>2020년부터는 물류 회사인 두핸즈로 합병되면서, 새로운 풀필먼트 시스템을 기획 초기부터 설계, 개발, 운영까지 전 주기에 걸쳐 주도적으로 참여하였습니다. React 기반의 프론트엔드를 구축하면서 아토믹 디자인 패턴 도입, 컴포넌트 재사용 최적화, 디자인 시스템 정립 등 구조적인 UI 개선을 이끌었고, 이후 프론트 파트 리더로서 팀원들과 함께 품질 중심의 개발 문화를 만들어 왔습니다.</p>
          <p>저는 약속과 일정 관리를 매우 중요하게 생각합니다. 다양한 협업자들과 지속적으로 소통하고 피드백을 주고받으며 함께 완성도 높은 결과물을 만들어가는 데에 가치를 두고 있습니다.</p>
          <p>앞으로도 ‘기획부터 함께 고민하고, 팀과 함께 성장하는 개발자’로서 더욱 나은 서비스를 만들기 위해 고민하고 도전하겠습니다.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.gridLayout}>
          <div className={styles.period}>2020.01 ~ 2024.06</div>
          <div>
            <h3 className={styles.title}>품고 풀필먼트 서비스 구축 및 프론트엔드 리딩</h3>
            <p className={styles.company}>주식회사 두핸즈</p>
            <ul className={styles.list}>
              <li>회사 합병 이후 기획부터 개발까지 전 주기에 걸쳐 서비스 개발에 참여</li>
              <li>도메인을 4개(내부 업무, 고객용, 센터 리드, 관리자)로 분리하여 시스템 설계</li>
              <li>아토믹 디자인 패턴을 적용하여 컴포넌트 재사용 및 개발 속도 향상</li>
              <li>디자인 시스템(색상, 버튼, 입력 필드 등)을 자체 구축하여 UI 일관성 확보</li>
              <li>MobX와 Context API를 조합하여 상태 관리 및 글로벌 상태 분리</li>
              <li>공통 레이아웃, 버튼, 테이블 등 재사용 가능한 컴포넌트 정의 및 활용</li>
              <li>웹소켓 기반의 파일 업로드 상태 알림 기능 구현</li>
              <li>엑셀 양식을 통한 기본/주문정보 일괄 업로드 기능 개발</li>
              <li>입출고 지시서 등 첨부파일 기능 개발 및 리스트/생성/상세 화면 구성</li>
              <li>module scss 및 전역 변수 기반 스타일 구성으로 유지보수 편의성 향상</li>
              <li>ECharts를 활용한 실시간 물류 현황 대시보드 개발</li>
              <li>바코드 스캔을 통한 출고 프로세스 구현으로 현장 검수 효율화</li>
              <li>DataDog + Slack 연동을 통한 장애 실시간 알림 시스템 구축</li>
              <li>Cypress를 도입하여 페이지 단위 테스트 자동화 환경 구축</li>
              <li>Strapi 기반 홈페이지 연동으로 비개발자 콘텐츠 관리 가능</li>
            </ul>
            <p className={styles.tech}>기술 스택: React, TypeScript, MobX, AUIGrid, ECharts, D3.js, Cypress, Sass, Module CSS, WebSocket, Context API, Strapi, Slack, DataDog</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.gridLayout}>
          <div className={styles.period}>2018.01 ~ 2019.12</div>
          <div>
            <h3 className={styles.title}>스마트팩토리 시스템 개발 (1.0 / 2.0)</h3>
            <p className={styles.company}>주식회사 메져에이드</p>
            <ul className={styles.list}>
              <li>스마트팩토리 1.0에서 MES, WMS, SPC 시스템 풀스택 개발 참여</li>
              <li>Angular 기반 시스템에서 Vue로의 마이그레이션 진행</li>
              <li>사용자 피드백 기반 UI 개선 및 컴포넌트 기반 구조 적용</li>
              <li>Electron + 라즈베리파이를 활용한 장비 시각화 시스템 개발</li>
              <li>생산 계획, 품질 관리, 재고 관리를 포함한 MES 시스템 설계</li>
              <li>업무일지, 휴가 관리, 일정/조직관리 포함 간단한 ERP 시스템 추가</li>
              <li>센서 데이터를 수집하고 실시간으로 시각화하여 공정 모니터링 지원</li>
            </ul>
            <p className={styles.tech}>기술 스택: Angular, TypeScript, Node.js, PostgreSQL, Vue, Electron Vue</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>학력</h2>
        <p>성공회대학교 컴퓨터공학과 (2010.03 - 2015.03)</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>스킬</h2>
        <p className={styles.skillList}>Git, React, TypeScript, HTML, Node.js, CSS, GitHub, React.js, PostgreSQL, Angular, VueJS, NodeJS, Slack, JavaScript</p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>링크</h2>
        <a className={styles.link} href="https://github.com/kimseonggon/ksg" target="_blank" rel="noopener noreferrer">
          https://github.com/kimseonggon/ksg
        </a>
      </section>
    </div>
  );
};

export default MeComponent;
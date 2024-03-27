# 🖥️ 프로젝트명 : itemManagementSystem(IMS)

# 🗒️ 프로젝트 개요
### 물건을 어디다 두었는지 수량이 얼마나 되는지 매번 파악하기 힘든 점을 없애고자 물건들의 재고를 파악할 수 있는 물건 관리 시스템을 개발하고자 함.

# 📢 스펙
### FrontEnd : React.js
### BackEnd : SpringBoot, JPA
### DB : MariaDB
### Tool : Gradle, Git...

# 🎫 초기 구상
###  메인화면 - 서비스 개요 및 기대 효과, 사용법 설명
###  시작화면 - 슬라이드 형식으로 방, 화장실 등 장소를 이미지 형태로 보여줌
###  상세보기화면 - 방>가구>물건 형식의 리스트를 볼 수 있는 화면
###  통계화면 - 물건 종류 및 총 개수 조회, 가구 종류 조회 등을 할 수 있는 화면

# 🛠 기능 
###  1. 물건 장소 추가(방, 화장실, 부엌, 거실 등) - 장소 테이블을 만들어 선택할 수 있도록 구성 / 1:N 가구 테이블과 매핑
###  2. 가구 선택(서랍, 책상, 냉장고 등) - 가구 테이블을 만들어서 선택할 수 있도록 구성 / 1:N 물건 테이블과 매핑
###  3. 물건 입력(ex. 노트 2개, 앨범 1개 등) - 물건 테이블을 만들어서 선택할 수 있도록 구성 
###  4. 슬라이드에서 이미지 클릭 시 장소 상세보기 화면에서 등록된 물건 리스트 볼 수 있도록 구현
###  - 장소, 가구, 물건 추가 기능 - 1~3번 추가 시 각각 추가 가능하도록 구현

# 진행상황
### react로 메인 화면에 슬라이더를 넣고 화면구성진행
### 이후 Spring Boot로 서버 구현 후 Doker로 DB서버 컨테이너 띄운 뒤 설정 추가해서 인프라 구축

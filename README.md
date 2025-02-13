# ReactBlog  
**React와 Spring Boot를 활용한 블로그 만들기 프로젝트**  

---

## 📋 프로젝트 개요  
**Spring Boot**와 **React**를 활용하여 블로그를 만든 개인 프로젝트입니다.  
프론트엔드에서 React로 동적인 사용자 경험을 구현하고, 백엔드에서는 Spring Boot를 사용해 데이터 관리와 API를 제공합니다.

---

## 🚀 주요 기능  
- **게시글 작성 및 관리**: 사용자가 블로그 게시글을 작성, 수정, 삭제할 수 있는 기능  
- **REST API 연동**: 프론트엔드와 백엔드를 연결하여 데이터 처리  
- **이미지 업로드**: 파일 업로드 기능을 통해 게시글에 이미지를 추가  
- **MySQL 데이터베이스 연동**: 데이터를 저장 및 관리  

---

## 🛠️ 기술 스택  

### **Frontend**  
- **Framework**: React  
- **Styling**: CSS  
- **Libraries**: Axios, React Router  

### **Backend**  
- **Framework**: Spring Boot  
- **Database**: MySQL  
- **Build Tool**: Gradle  

---

## 🧑‍💻 개발자 정보  
- **개발자**: 오승안 / OH SEUNG ANH 
- **이메일**: dhtmddks98@naver.com, ahn980321@gmail.com
- **GitHub**: https://github.com/OurOh
- **개인블로그**: https://ouroh.tistory.com/
  
---

## 🗂️ 프로젝트 구조  

### **Frontend**  
```plaintext
frontend/
│
├── public/               # 정적 파일 (HTML, 이미지 등)  
│   ├── images/           # 이미지 파일  
│   ├── json/             # JSON 데이터  
│   └── index.html        # 메인 HTML 파일  
│
├── src/                  # React 소스코드  
│   ├── components/       # React 컴포넌트  
│   ├── data/             # 데이터 처리 파일  
│   ├── pages/            # 페이지별 구성  
│   ├── style/            # CSS 스타일 파일  
│   └── App.js            # 메인 App 컴포넌트  
│
└── package.json          # Node.js 패키지 관리 파일  

backend/
│
├── src/  
│   ├── main/  
│   │   ├── java/com/example/backend/  
│   │   │   ├── config/             # 설정 클래스  
│   │   │   ├── controller/         # 컨트롤러  
│   │   │   ├── entity/             # 엔티티 클래스  
│   │   │   ├── repository/         # 리포지토리 인터페이스  
│   │   │   ├── service/            # 서비스 클래스  
│   │   │   └── BackendApplication.java  # Spring Boot 메인 실행 파일  
│   │   ├── resources/  
│   │   │   ├── application.yml     # 데이터베이스 설정 파일  
│   │   │   └── templates/          # 템플릿 파일  
│   │
│   └── test/  
│       └── java/com/example/backend/  # 테스트 코드  
│
├── build.gradle          # Gradle 의존성 관리 파일  
├── gradlew               # Gradle Wrapper 실행 파일  
└── mysql.sql             # MySQL 테이블 초기화 파일

```

---



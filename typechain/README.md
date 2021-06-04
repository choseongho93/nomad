# Typechain
typescript로 만드는 간단한 블록체인

# 설치 순서
1. `npm init`
2. `npm -f add typescript`
3. tsconfig.json파일 생성 및 세팅
4. index.ts 파일 생성
5. npm start하기 전에 prestart를 먼저 실행하기때문에 tsc가 먼저 실행되고 index.js로 변환한다음 start가 실행됨.
6. `npm add tsc-watch --dev` npm start로 tsc를 반복적이게 입력하지 않아도 되게 하는 패키지를 설치
7. `npm add crypto-js` hash 암호화 패키지 설치 

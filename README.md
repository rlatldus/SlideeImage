# Slider Image
Fixabay처럼 이미지를 조회.검색 가능한 사이트<br />
- **`Team name` :** Sildee Image ( 이미지 슬라이드 제작 )
- **`Project duration` :** 2023.07.20 - 2023.07.21
- **`Team members` :** 김시연
- **`Link` :** [Sildee Image 방문하기](https://movie-33ea4.web.app/)


![image](https://github.com/rlatldus/Movie/assets/122216298/4e39e8aa-cdfd-4750-a7e9-cd2a0e480a9b)


<br/>

## 핵심 기능
- **`이미지조회` :** javascript, React.js 기반 웹서비스 개발.
- **`REACT 라이브러리` :** Slider 관련 프론트 엔드 라이브러리 사용. React.js 최신 framework 사용.
- **`주 사용언어` :** 주 사용언어 : HTML 5, CSS, Javascript, React.js, scss.


<br/>
## 폴더구조
  
```
📦 src
├── 📂 api
│   ├── 📄 flowerimage.js
│   └── 📄 movieimage.js
├── 📂 assets
│   ├── 📂 fonts
│   ├─  📂 logo
│   ├── 📄 base_color.scss
│   ├── 📄 base.scss
│   ├── 📄 fonts_face.scss
│   └── 📄 global.scss
│   └── 📂 hooks 
├── 📂 components
│   ├── 📂 button
│   ├── 📂 form
│   ├── 📂 header
│   ├── 📂 pixabayImg
│   ├── 📂 switch
│   └── 📂 TypingEffect
├── 📂 contants
│   └── 📄 api.js
├── 📂 firebase
│   └── 📄 firebase.js
│   └── 📄 Sidebar.vue
├── 📂 hooks
│   └── 📄 useFlowerImage.js
├── 📂 pages
│   ├──📂 main.js
│   ├──📂 signin.js
│   ├──📂 signout.js
│   └──📂 todo.js
├── 📂 util 
│   ├── 📄 AuthenticatedRoute.js
│   └── 📄 PrivateRouter.js
├── 📄 App.vue
└── 📄 main.js
```

</div>

<br/>

### Front-End

React|Scss|JavaScript|firebase|ReactQuary|
|  :--: | :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" />|  <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://github.com/rlatldus/Movie/assets/122216298/95630a87-0621-4bc2-b5fe-08a62da9a595" alt="icon" width="65" height="65" /> | <img src="https://github.com/rlatldus/SlideeImage/assets/122216298/2809e202-1f53-4582-8c1c-5a2af94eaf70" alt="icon" width="65" height="65" /> |


<br/>

<br/>

느낀점 

- 프로젝트에서 **팀 리더로** 처음 맡게 되었는데, 다행히 노력한 만큼 결과가 좋은 프로젝트가 되었고, 그만큼 많이 성장한 계기가 되었다고 생각한다.
- **소셜 계정 연동 로그인**을 처음 시도해 보았다. 각 사이트에서 제공하는 API 문서를 참고하여 개발하였다.
- react로만 상태관리를 해봤는데, vue로 도전해보다 vuex를 사용해 보게 되었다.  vue 에서 watcheffect() 와 리액트의 useEffect는 같은 기능이라는 사실을 알게되었다. 그외에도 이름이 다르지만, 기능은 같은 몇가지가 있었다.
- 상태관리로 store를 사용할 때 localstorgy와 별개의 기능이라는 사실을 알게 되었다. localstorigy로 저장하면 회원마다 같은 기능이 적용되는 상황이 발생하는데, 이때 store를 사용하면 그러한 오류들을 해결할 수 있다.
- Firebase를 사용하여 회원가입, 로그인, 로그아웃 구현도 처음 해봤는데, 이름은 DB에 직접 name을 만들어서 사용해야한다는 사실을 알게되었다.




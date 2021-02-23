export const initialState = {
    mainPosts:[{
        id: 1,
        User: {
            id:1,
            nickname:'제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [
            {
                src : "https://a.cdn-hotels.com/gdcs/production82/d710/a983cd23-643b-468b-ab6d-fb14d5082e00.jpg",
            },
            {
                src : "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/3d281f7d-6b44-4550-ab20-856a1a8e0fc1.jpeg",
            },
            {
                src: "https://previews.123rf.com/images/isansky/isansky1511/isansky151100017/47425666-%EB%B0%94%EB%8B%A4-%ED%95%B4%EB%B3%80-%EB%B0%94%EB%8B%A4%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80-%EC%9D%BC%EB%B3%B8-%EC%95%84%EC%8B%9C%EC%95%84-.jpg",
            }
        ],
        Comments :[{
            User:{
                nickname : 'Andy'
            },
            content: '안녕',
        },{
            User:{
                nickname : 'Nana'
            },
            content : '안녕하세요',
        }],
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = "ADD_POST";
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: "더미데이터입니다.",
    User: {
        id:1,
        nickname:'제로초',
    },
    Images : [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;
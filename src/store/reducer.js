//reducer 需要导出一个函数
const defaultState = {
    titleTxt: '欢迎来到白嫖时代',
    mvListId: '0'
}
//1.previousState  2.action 

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_titleTxt':
            return { ...state, titleTxt: action.value };
        case 'chang_mvListId':
            return { ...state, mvListId: action.value };
        case 'del_list_action':
            const NewList = [...state.list];
            NewList.splice(action.index, 1)
            // console.log(NewList);
            return {
                ...state, list: [...NewList]
            }
    }

    return state
}
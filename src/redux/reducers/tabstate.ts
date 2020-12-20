interface TabInterface {
 activeTab: string,
 activeTabIndex: number,  
}

const intialTabState: TabInterface = {
    activeTab: 'Swap',
    activeTabIndex: 0,
}

const tabstate = (state= intialTabState , action) => {
    switch (action.type) {
        case 'CHANGE_TAB':
                return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default tabstate;
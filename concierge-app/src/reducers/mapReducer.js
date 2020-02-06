
const iState ={
    center:     { lat: 34.052235, lng: -118.243683 },
    startAdd:   'VibeVans',
    startCord: {},
    endCord:    {}
}

const mapReducer = (state=iState, action) => {

    switch(action.type){

        case "FETCH_DURATION":{
            return{
                ...state,
                // center:     action.center,
                startCord:  action.startCord,
                endCord:    action.endCord,
                startAdd:   action.startAddress,
                endAdd:     action.endAddress,
                polyline:   action.polyline,
                error:      action.errorMessage          
            }
        }
        default:
            return state

    }
}
export default mapReducer;

const dummyApiResponse={
    showLightDarkMode:true,
    showTicTacToe:true,
    showRandomGenerator:true,
    showAccordion:true,

}
function featuresFlagsApiCalls(){
    return new Promise ((resolve,reject)=>{
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse),500)
            else reject('some error occured ! pls try again')
    })
}

export default featuresFlagsApiCalls
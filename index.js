// console.log("hello");


import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// ye apko previous state, action or next state ka btata hai ,


import axios from "axios";

import thunk from "redux-thunk";


// TypeError: middleware is not a function node me ye error aye ga lekin react jab use krenge to nai ayega
// isko remove krne ke leye default use kren







// ye is error ki waja se uper likha hai constants
// ReferenceError: Cannot access 'inc' before initialization
// ACTION NAME CONSTANTS 
// const increment = "increment"
// const decrement = "decrement"
// const incrementByAmount = "incrementByAmount"

// ab ye error de ga ke Identifier 'increment' has already been declared lekin jab ham ise use krenge project me to ye elada file me hoga tb error ne ayega
// is leye abi ham inke name change kr dete hain
const inc = "increment"
const dec = "decrement"
const incByAmt = "incrementByAmount"

const init = "init"

// ab neche jaha jaha apne "" use ki hai waha ap increment, decment, incrementByAmount likh de is se error ke 
// chances bohat kam hai 


// ab me ye sab krne ke bad 1 server banao ga kyo ke ye jitne be request the ye sync request the jo ke asan hoti hai
// ab me async request yani API call jesa kuch banane wala hun or API call ke leye ham ko 1 special middleware
// chahyee hota hai jisko ham THUNK MIDDLEWARE bolty hain pehle to ye dekhe gen ke wo chahyee kyon hoga kyo ham
// uske begair kam ne skty or phr ham thunk middleware ko smjhen ge 
// ham 1 server banane ge to yaha server create krna thora difficult hai to me yaha node me 1 simpe server db.json
//  use kronga  npm i json-server or chalane ke leye 
//  {
//  "amount" : [
//     {"id" : 1, "amount" : 200 },
//     {"id" : 2, "amount" : 100 }
//  ]    
// }
// ye ab server ban gya hai or is me 1 tara ka database hai ye 1 fake api server hai bs 
// ye rest api ke funde pe chalta hai ye 1 fake rest api ban gye hai 
// is api ko access krne ke leye fetch axios use hota hai 
// axios me bs get krna chata hun kise chex ko 
// to yaha pe ham esa action banaye ge ham ke shru me kisi user ki amount ko initial krna hai ab shur me jo
// us user ki amount hai wo ajane chahye state me 200 
// 1 new action banaye   
// 




// 1
// store 
// createStore tb tk useful nai hota jb tk is me reducer na ho
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default)); // () is ke ander ap middleware likhoge

// agr ham apni state ki history be check krne hai to 

const history = []







// REDUCERS
// reducer are simply some functions

// is me 2 parameter hoty hai state or action 
function reducer(state = { amount: 1 }, action) {
    // is ki khas bat ye hai ye hamesha state return krta hai

    // LOGIC

    // hamy actio  me kya check krna hai type ko
    // action is leye likha kyo ke ye convention hai 
    // action me ham ne type check ki or usme ja ke increment check kya

    // if (action.type === "increment") {
    // ab uper constants banane ke bad yaha wo constants likh den es se error ke chance kam hai 
    //
    // ab neche switch se banaya hai ye same 
    // if (action.type === inc) {

    //     // or ye chex yad rkhni ab hamy state return krne hai 

    //     //  state.amount = state.amount +1  ese nai krna redux is ki warning de ye ham javascript me krty hai

    //     // return state.amount+1 is taran nai return krne balqe is ka sai tareqa hai
    //     // immutability state ko directly change na kren iska mtlb
    //     return { amount: state.amount + 1 }
    // }
    // // yaha bohat sary actions ho skty hai 
    // // if (action.type === "decrement") {
    // if (action.type === dec) {
    //     return { amount: state.amount - 1 }
    // }
    // // if (action.type === "incrementByAmount") {
    // if (action.type === incByAmt) {
    //     return { amount: state.amount + action.payload }
    // }
    //


    // ab reducers me bar bar if if hoty ja rahy hai 
    // agr in if ko hatana hai to ap switch use kr skty hai jo ese cases ke leye acha hota hai to apka code better hoga

    switch (action.type) {
        // switch me cases hoty hai
        //ab first case me hamari type kis ke barabar the inc ke to ye likh deya 
        case inc:
            // or uske bad return krdo
            return { amount: state.amount + 1 };
        // ab ese tara baqi cases be likh den or uper wala code comment kr den
        case dec:
            // or uske bad return krdo
            return { amount: state.amount - 1 };
        case incByAmt:
            // or uske bad return krdo
            return { amount: state.amount + action.payload };
        case init:
            // ab yaha be amount apki inilialize hojaye ge farq ne prega iske ke pehle apne kya default amount le 
            // rkhe hai action.payload jo be ata hai jese waha pe 100 hai 200 hai wo apko amount me ajaye ga 
            // or 1 new state yaha pe ban jaye ge to is taran se init kam kreega 
            // esko agr apko check krna hai without api to neche check kr skty hai 
            return { amount: action.payload };
        default:
            return state;
    }
    // ab agr ye state ese return krwane phr be sai lekin default se or be acha hai switch ka tareqa hai
    // return state;
}


// next chex ham state ko 1 initial value de skty hai reducers me jo uper de de hai mene


// next chex kya ham check krskty hai ke state ki value kya hai global state 

// global state 
// to is ke leye 1 function hota hai getState() yaad rkhye ye store me he hota hai 
// store.getState()

// package.json me ja ke ye likhenge to ye chal jaye ga 
// "type" : "module",


// console.log(store.getState())
// console.log(store.getState()) ab kitne bar ham ye likhenge is ke leye redux ka 1 special function hai
// jo ke har bar chle ga jab be naya dispatch hoga

// store.subscribe(() => {

//     // ab jab be state change to usko history ki jo [] banai the us me push krty jao
//     history.push(store.getState()) 
//     // console.log(store.getState())
//     console.log(history)

// })

// subscribe ko comment krke is ke jagah
// ab me is ko easy krne ke leye middleware batata hu applymiddleware












// Async API Call
// or is me ham kahenge getUser ke name ka koi function hai 
// or is func me ham axios call kr lete hai 
// async function getUser() {
//     //  or api apke localhost pe chal rahe hai or port number bydefault rekhta hai ap ese change be kr skte hai 
//     // or usme  accounts hai  or us me be abhi ham fix kr rahy hai ke 1 hai user bad me es ko wari kr ke dekhe ge 
//     // kyoke ye async hai or esko await lagaye ge or funct me be async lagage ge 
//     // or axios me apke pass response return hojaye ga 
//     // or us response me agr ap axios ko janty ho to 1 data name ke value ati hai 
//     // to usko mene destructure krke nikal leta hun to us me apka data hoga ye sab axios se related hai es ko apko 
//     // samjhne  ke zarorat nai hai 
//     const { data } = await axios.get("http://localhost:3000/accounts/1");
//     // ab is data me first wala object ajana chahye jo hmne db.json me banaya hai 
//     // to ap is data me amount aye ge hamary pass ap dekhe skty hai ab start me hamari wo wali amount arahae 
//     // hai 200 or id:1, jo hamne db.json me rkhe hai  lekin hame ye ese nai chaye 
//     // hamko ye ese chahye ke jab me ham initUser kro to ye call ho ab yaha problem aye ge suppose ye wala kam
//     //  aapko neche initUser me krna tha 
//     console.log(data);
// }

// getUser();












// ab apke pass 1 reducer attach hogya hai store me or 1 initial state us ke pass hai 1 
// ab ye state kabi be change nai hogye kyo ke yaha abhi koi action nai likha howa 

// to hamy 1 action banaan prega 


// ACTION

// { type: "increment" } //increment ammount by 1 
// abi me is me payload nai de raha is increment ka mtlb simply 1 se barha de ga  

// actually action REDUX ka part nai hai ye 1 convention hai ke is taran ke
// { type: "increment" } 
// objects apko bhejne hoty hai reducers ke pass par store me ya redux me ye kahi nai 
// likha howa is ka name action ye bs 1 convention hai 




//  ab ye action apne ap kam nai krega isko bhejna prta hai 1 chex yaad rkhe ye event triger chwx hai
// jese onclick event hota hai usme 1 listener hota hai jese click ka listener usko ap jab
// be call krty ho to us se related koi function chal jata hai

// to wese he yaha  store me 1 chex hoti hai dispatch 


// Action Creators banane ke bad
// PROBLEM IN Action Creators
// ab yaha action creator ka jo function usk definition me be 1 problem hai 
// {type: "increment"} is ki definition me be 1 string hai "" or jo uper reducer banaya hai waha pe
// be 1 string "" hai or ye mismatch ho skty hain mtlb ap {type: "decrement"} isme r likhna bhol gye decment 
// to ye poora code ne chle ga decment wala specially to is ke leye kya kiya jaye to iske leye ACTIONS ke jo names 
// hai unko ap CONSTANTS bana do to uper dekhe // action name constants 



//  Action Creators
// pehla action creator jiska name hai increment
function increment() {
    // return {type: "increment"}

    // constants banane ke bad
    return { type: inc }
    // isko neche call kr len
    // es action creator or be bohat se faidy hai is me ap calculations be put kr skty ho or last me final action 
    // ko return krty hain 
}
function decrement() {
    // return {type: "decrement"}
    return { type: dec }
}
function incrementByAmount(value) {
    // return {type: "incrementByAmount" , payload:value}
    return { type: incByAmt, payload: value }
    // ab function banane se faida howa hai ke payload ko bar bar hardcode ne krna prega ap simple isko param de de
    // value 
}

// function initUser(value) {
//     return { type: init, payload: value }
// }

// ab yaha param me value to aye ge nahi kyo ham api se nikalne hai
// thunk lagane ke bad ab wo is func initUser ko access dega 1 dispatch ki or 1 getState 
// to ye dispatch kya hai wohi jo abhi tk ham use kr rahy hai
//  or getState kya hai mene apko btaya tha ke jis se ap global state ko access kr skty hai 
// Ye 2 powerful chezen hai 
// 2 he chezen to store me hoti hai 
// wo dono apko in func initUser ke param me access ho jaye ge 
// is se faida kya hai ke 1 to ye ruk jaye ga kyo isko pata he ke abhi apne 1 funct is ke ander bheja hai 
// to ye khudi ruk jaye ga 
// or dosra faida ab apko ye return { type: init, payload: data.amount }
// return krne ke zarorat nai hai balqe ap yaha pe dispatch kr skty ho ab
// dispatch ({ type: init, payload: data.amount })

async function getUser(dispatch, getState) {
    const { data } = await axios.get("http://localhost:3000/accounts/1");

    // or dosra faida ab apko ye return { type: init, payload: data.amount }
    // return krne ke zarorat nai hai balqe ap yaha pe dispatch kr skty ho ab
    // dispatch ({ type: init, payload: data.amount }) 
    // dispatch ye dispatch func me jo param hai wo wala hai lekin ye he store ka he dispatch 
    // is ka name ap kuch be rkh skty hai kyo ke ye hoty params he lekin me yaha bta raha hun ke 
    // pehla is me dispatch hota hai or dosra getState
    // return { type: init, payload: data.amount }
    // dispatch({ type: init, payload: data.amount })
    // neche console me 2 actions  arahay hai lekin us knko elada elada action creator ke fun me hona chaye 
    // to neche uska elada func banaya hai initUser ka or esko ab getUser ka name de deya hai uper
    // esa kyo keya ye apko react me samjh ayega 
    dispatch(initUser(data.amount))


}


function initUser(value) {
    return { type: init, payload: value }

}



// ab ye hame error dega Error: Actions must be plain objects
// to actions     return { type: init, payload: data.amount } sedhe is taran ke plain objects hone chahye 
// to hamne esa kya kiya jo error aya hai 
// hamne yaha actually me async function pass kr deya hai jo bydefault return me 1 promise return krta hai 
// to ye chez hold ne krskte mtlb actions creators synchronous he hoty hai ye sedhe he apko is taran ka object
//     return { type: init, payload: data.amount } return krne ke leye bane hoty hai 
// jo apne await likha ye await krne ke leeye ne bane hoty or yehe problem hai jis ke leye hamy 
// 1 middleware use krna parega 
// kya problem hai he ke jab ap koi chez dispatch kr rahy ho to wo instantly dispatch hone chahyee 
// jab ham redux use krenge to is problem ko ache se smjhe ge lekin abi ke lye ap isko samjh jao ke 
// async actions ese nahi banaye ja skty to eska solution kya hai to iska hal ha ke 
// ke kahi mujhe koi esa hal mil jaye ke jo store ka dispatch hai      store.dispatch(initUser()); 
// neche to chalo call horha hai kisi be action ko bhejne ke leye ye call hota hai 
// lekin me yaha esa chahta hu ke wo 1 dafa ruk jaye  request keleye 
//  is kam ke leye const {data} = await axios.get("http://localhost:3000/accounts/1");
// or phr mujhe us store.dispatch(initUser()); dispatch se wapis se access mil jaye or phr us se me 
//     return { type: init, payload: data.amount } ye wala action dispatch kr paon 
// 1
// to us dispatch   store.dispatch(initUser()); ki access ko rukna 
// 2
// or dispatch ko phr is action // return { type: init, payload: data.amount } ke sath call krna 
// ye chex hamko chahye to ye hame kon provide krta hai ye hame 1 middleware deta hai jiska name hai THUNK 
// to isko install krte hai npm i redux-thunk









// { type: "increment" }  ye action 1 taran ka event he hai is ke bhej deta hai

// kaha bhej deta hai reducer me jo iska listener hai
// dispatch ke ander action
setTimeout(() => {
    // store.dispatch({ type: "increment"})
    // store.dispatch({ type: "decrement" })
    // store.dispatch({ type: "incrementByAmount", payload:4 })

    // function banane ke bad 
    // store.dispatch(increment())
    // store.dispatch(decrement())
    // store.dispatch(incrementByAmount(5))
    // store.dispatch(initUser(500)) 
    // ab ye chez chal to rahi lekin mujhe ese nai chalana mujhe is ko api
    // ke through chalana hai 
    // to jo initUser hai wo kuch esa hona chahye ke wo us api ko call kre or us api me value hai wo mere pass aye 
    // or wo payload me chale jaye esa me chahta hun to ab ham api calling dekte hai 
    // to ap global state ke neche Async API Call me dekhe  
    // store.dispatch(initUser()); // ab mujhe isme 500 khud se value dene ke zarorat nai hai 


    // axios or thunk add krne ke bad ab 

    // 
    // axios banane ke bad 
    // Thnuk ki khas baat kya hai 
    // is me jab be apko koi chex ese krne hai jisme apko await krwana hai dispatch ko to ap waha pe 1 function bhej do
    // dispatch ke through ap 1 function bhejo 
    // pehle ham 1 object return krty thy bhejty thy ese store.dispatch(initUser());
    // store.dispatch({ type: "decrement" })
    // lekin ab function bheje ge 
    // ese bhejo ab () ye hata do store.dispatch(initUser);
    // to ab usko pata chal jaye ga ke apne ye chez 1 function definition beje hai to ye initUser ki definition hai 
    // es ke bad ap uper initUser action funct me dekhen thunk kya kare ga 
    // 
    store.dispatch(initUser);



    // ye jo action hoty hain bohat sary hoty hain or same action ko kahi se be bar bar be call krna pr skta hai
    //store.dispatch({ type: "incrementByAmount", payload:4 }) or dosre chex usko esa likhene me garbar be ho skte hai  
    // to uske leye 1 concept use kiya gya hai jis ko action creators bolty hain uper action creator dekhen
}, 2000);

// console.log(store.getState())
// ab yaha be 1 he arha hai kyo ke reducer me koi logic he nahi hai to ap logic lagaye



//
// axios banane ke bad
// Thnuk ki khas baat kya hai
// is me jab be apko koi chex ese krne hai jisme apko await krwana hai dispatch ko to ap waha pe 1 function bhej do
// dispatch ke through ap 1 function bhejo


//





//  middleware or be bohat sary hai jab ham Thunk use krenge tb dekhege

// store.dispatch({ type: "increment" })
// thunk is dispatch ko thora delay kr deta hai or hamy 1 esa tareqa deta hai
// ke action ko direct Reducer me na bhejen balqe ham apni 1 api call kr len or us ke baad bhejen to is taran ke
// chexon ke leye middleware hoty hain hm khud se be middleware bana skty ye sirf functions hoty hain 









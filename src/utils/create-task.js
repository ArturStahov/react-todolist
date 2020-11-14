import {LoremIpsum} from 'lorem-ipsum'


const lorem=new LoremIpsum;

export default function(){
    return{
        id:Date.now(),
        text:lorem.generateSentences(5),
        completed:false
    }
}
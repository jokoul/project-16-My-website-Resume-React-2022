import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs'

export default class ScrollService {
    static scrollHandler = new ScrollService()

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
    }
    scrollToHireMe = () => {
        let ccontactMeScreen = document.getElementById('Contact Me')
        if(!ccontactMeScreen) return;
        ccontactMeScreen.scrollIntoView({behavior: "smooth"})
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById('Contact Me')
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }
    isElementInView = (elem, type) => {
        let rec = elem.getBoundinClientRect();
        let elementTop = rec.top;
        let elementBotom = rec.Botom;

        let partiallyVisible = elementTop < window.innerHeight &&elementBotom >= 0;
        let completelyVisible = elementTop >= 0 && elementBotom <= window.innerHeight;
        
        switch(type){
            case "partial":
                return partiallyVisible;
            case "complete" :
                return completelyVisible
            default:
                return false
        }  
    }
    checkCurrentScreenUnderViewport = (event) => {
        if(!event || Object.keys(event).length <1 ) return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial")
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    })
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
        }
        
    }
}
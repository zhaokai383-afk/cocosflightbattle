import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        //移动
        //遍历子物体
        for (let bgNode of this.node.children) {
            //移动
            bgNode.y -= 60 * deltaTime;
            if (bgNode.y <= -1000) {
                bgNode.y += 2000 ;
            }
        }

    }
}



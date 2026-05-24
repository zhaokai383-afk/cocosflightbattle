import { _decorator, Collider, Component, Contact2DType, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {
    @property
    Speed: number = 200;


    start() {
        let collier = this.getComponent(Collider);
        if (collier) {
            this.node.destroy();
            
        
            }

    }

    update(deltaTime: number) {
        const position = this.node.position;
        this.node.setPosition(position.x, position.y + this.Speed * deltaTime, position.z);

        if (position.y > 800) {
            this.node.destroy()
        }

    }

    onBeginContact() {

        // this.anim.play();
        this.node.destroy();


    }
}



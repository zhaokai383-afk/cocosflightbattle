import { _decorator, Animation, animation, Collider2D, Component, Contact2DType, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy0')
export class Enemy0 extends Component {
    @property
    speed: number = 300;

    @property(Animation)
    anim: Animation = null;

    @property
    hp: number = 1;

    start() {
        //this.anim.play();
        let collier = this.getComponent(Collider2D);
        if (collier) {
            collier.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);

        }

    }

    update(deltaTime: number) {
        if (this.hp > 0) {
            const p = this.node.position;
            this.node.setPosition(p.x, p.y - this.speed * deltaTime, p.z);

            if(p.y<-800){
                this.node.destroy();
            }

        }


    }

    onBeginContact() {
        this.hp -= 1;
        // this.anim.play();
        this.node.destroy();


    }
}



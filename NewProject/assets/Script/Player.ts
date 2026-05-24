import { _decorator, Component, Node, EventTouch, Vec3, input, Input, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property
    shootRate: number = 0.5;
    shootTime: number = 0;
    @property(Prefab)
    bullet1Prefab: Prefab = null;
    @property(Node)
    bulletPosworld: Node = null;

    @property(Node)
    bullet1Pos: Node = null;

    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    protected onDestory(): void {
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchMove(event: EventTouch) {
        const p = this.node.position;

        const targetPos = new Vec3(p.x + event.getDeltaX(), p.y + event.getDeltaY(), p.z);
        if (targetPos.x < -190) {
            targetPos.x = -190
        }
        if (targetPos.x > 190) {
            targetPos.x = 190
        }

        if (targetPos.y > 320) {
            targetPos.y = 320
        }
        if (targetPos.y < -320) {
            targetPos.y = -320
        }
        this.node.setPosition(targetPos);

    }

    protected update(dt: number): void {
        this.shootTime += dt;
        if (this.shootTime >= this.shootRate) {
            this.shootTime = 0;
            const bullet1 = instantiate(this.bullet1Prefab);
            this.bulletPosworld.addChild(bullet1);
            bullet1.setPosition(this.bullet1Pos.worldPosition);

        }


    }



}



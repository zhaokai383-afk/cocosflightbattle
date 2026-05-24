import { _decorator, Component, instantiate, math, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('enemymanage')
export class enemymanage extends Component {
    @property
    enemy0Rate: number = 1;
    @property(Prefab)
    enemy0Prefabs: Prefab = null;

    start() {
        this.schedule(this.enemy0Spawn, this.enemy0Rate);

    }

    update(deltaTime: number) {


    }
    protected onDestroy(): void {
        this.unschedule(this.enemy0Spawn);
    }


    enemy0Spawn() {

        const enemy0 = instantiate(this.enemy0Prefabs);
        this.node.addChild(enemy0);
        const randomx = math.randomRangeInt(-200, 200);
        enemy0.setPosition(randomx, 450, 0);


    }
}



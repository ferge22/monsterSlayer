new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        mW: false,
        pW: false,
        dW: false,
        turns: []
    },

    methods: {
        startGame(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.mW = false;
            this.pW = false;
            this.dW = false;
            this.turns = [];
        },

        attack(){
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster for  ${damage}`
            });
            this.whoWin();
            this.monsterAttack();
        },

        specialAttack(){
            let damage = this.calculateDamage(10, 17);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster ${damage}`
            });
            this.whoWin()
            this.monsterAttack();
        },

        heal(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }
            else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },

        giveUp(){
            this.gameIsRunning = false;
        },

        calculateDamage(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        monsterAttack(){
            let damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`
            });
            console.log(this.turns);
            this.whoWin()
        },

        whoWin(){
            if(this.monsterHealth <=0 && this.playerHealth <=0){
                this.dW = true;
                this.gameIsRunning = false;
            }
            else if(this.playerHealth >=0 && this.monsterHealth < 0){
                this.pW = true;
                this.gameIsRunning = false;
            }
            else if(this.monsterHealth > 0 && this.playerHealth <= 0){
                this.mW = true;
                this.gameIsRunning = false;
            }
        },
    }
})
new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        mW: false,
        pW: false,
        dW: false
    },

    methods: {
        startGame(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.mW = false;
            this.pW = false;
            this.dW = false;
        },

        attack(){
            this.monsterHealth -= this.calculateDamage(3, 10);
            this.whoWin()

            this.monsterAttack();
        },

        specialAttack(){
            this.monsterHealth -= this.calculateDamage(10, 17);
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
            this.monsterAttack();
        },

        giveUp(){
            this.gameIsRunning = false;
        },

        calculateDamage(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        monsterAttack(){
            this.playerHealth -= this.calculateDamage(5, 12);
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
        }


    }
})
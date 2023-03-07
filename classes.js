//Knight ou Sorcerer = Guerreiro ou Mago
//LittleMonster ou BigMonster

//Character = coisas padrao que um personagem precisa ter
class Character{

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name){
        this.name = name
    }

    //posso mudar a vida pré-definida
    get life(){
        return this._life
    }
    //aqui se a vida passar de 0 ele não deixa passar tipo -15 de vida
    set life (newLife){
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character{//pegou as caracterisca inicial e formou a dele
    constructor(name){
        super(name)//super vc pega uma variavel da class extendida
        this.life= 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }
}

class Soracerer extends Character{//mesma coisa que em cima
    constructor(name){
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxLife = this.life
    }  
}

class LittleMonster extends Character{
    constructor(){
        super('Little Monster')
        this.life = 40        
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character{
    constructor(){
        super('Big Monster')
        this.life = 120        
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

class Stage{//construindo o cenario, lutadores e elementos deles eo log é mensagem 
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
        this.log = logObject
    }

    start(){//inicia o jogo quem aperta o botao ataca
        this.update()

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.funcao_a() || this.funcao_b())
    
        // this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        // this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))    
        
    }

    funcao_b(){            
            this.doAttack(this.fighter2, this.fighter1)
        }
    
    funcao_a(){
        this.doAttack(this.fighter1, this.fighter2)
        }

    update(){//atualiza as informaões do jogo, como vida e a barra de vida diminui
        //Fighter 1
            this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100

        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`


        //fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`

        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100

        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked){//fala quem atacou e quem defendeu e calcula o dano e defesa, baseado nas suas forçã definidas nas suas classes
        if(attacked.life <= 0){
            this.log.addMessage(`${attacking.name} venceu`)
            return;
        }if(attacking.life <= 0){
            this.log.addMessage(`Morto não ataca`)
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2)//multiplica por 2 o dano dele, mas limita a no maximo 2 numero .
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense){//faz o calculo da perda de vida
            attacked.life -= actualDefense
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} em ${attacked.name} <br><br>`)
        } else{
            this.log.addMessage(`${attacked.name} conseguiu defender <br><br>`)
        }

        this.update()
    }
}

class Log{//mostra a mensagem
    list = []

    constructor(listEl){
        this.listEl = listEl
    }

    addMessage(msg){
        this.list.push(msg)
        this.render()
    }

    render(){
        this.listEl.innerHTML = ''

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}

